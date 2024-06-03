import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { exclude } from 'src/utils';
import { ProfileDTO } from './profile.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProfileService {
  constructor(private readonly prismaService: PrismaService) {}

  convertUpdatePrisma(data: ProfileDTO): Prisma.ProfileUpdateInput {
    const { user, collections, ...profile } = data;
    return {
      ...profile,
      user: {
        connect: {
          email: user.email,
        },
      },
      collections: {
        connect: collections?.map((collection) => ({
          id: collection.id,
        })),
      },
    };
  }

  getAllProfiles = async () => {
    const data = await this.prismaService.profile.findMany({
      include: {
        user: true,
      },
    });
    return data.map((userData) => ({
      ...userData,
      user: exclude(userData.user, ['password']),
    }));
  };

  getProfile = async (user) => {
    return await this.prismaService.profile.findUnique({
      where: {
        id: parseInt(user.sub),
        user: {
          email: user.email, // assuming email is a field on the profile model
        },
      },
    });
  };

  async getUserAndProfile(user) {
    const updateData = await this.prismaService.profile.findFirstOrThrow({
      where: {
        id: user.sub,
      },
      include: {
        user: true,
      },
    });
    const newData = exclude(updateData.user, ['password']);
    return { ...updateData, user: newData };
  }

  async updateProfile(data: ProfileDTO, user) {
    const prismaData = this.convertUpdatePrisma(data);
    const updateData = await this.prismaService.profile.update({
      where: {
        id: parseInt(user.sub),
        user: {
          email: user.email,
        },
      },
      data: {
        ...prismaData,
        user: {
          update: {
            ...data.user,
          },
        },
      },
      include: {
        user: true,
      },
    });

    const newData = exclude(updateData.user, ['password']);
    return { ...updateData, user: newData };
  }

  //async createProfile(data) {}
}
