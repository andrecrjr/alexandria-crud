import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { exclude } from 'src/utils';
import { ProfileDTO } from './profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prismaService: PrismaService) {}

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

  async updateProfile(data, user) {
    const updateData = await this.prismaService.profile.update({
      where: {
        id: parseInt(user.sub),
        user: {
          email: user.email,
        },
      },
      data: {
        ...data,
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
