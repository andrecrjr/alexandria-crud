import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { exclude } from 'src/utils';
import { Prisma } from '@prisma/client';
import { UpdateUserProfileDTO } from '../User.dto';
import { JwtDTO } from 'src/auth/jwt.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prismaService: PrismaService) {}

  convertUpdatePrisma(
    data: UpdateUserProfileDTO,
    userData: JwtDTO,
  ): Prisma.UserUpdateInput {
    return {
      ...data,
      profile: {
        connect: {
          id: userData.sub,
        },
        update: {
          ...(data.profile as Prisma.ProfileUpdateWithoutUserInput),
        },
      },
    };
  }

  getAllProfiles = async () => {
    const data = await this.prismaService.user.findMany({
      include: {
        profile: true,
      },
    });
    return data.map((userData) => ({
      ...exclude(userData, ['password']),
    }));
  };

  getProfile = async (user: JwtDTO) => {
    return await this.prismaService.user.findUnique({
      where: {
        id: user.sub,
        email: user.email, // assuming email is a field on the profile model
      },
      select: {
        profile: true,
      },
    });
  };

  async getUserAndProfile(user: JwtDTO) {
    const updateData = await this.prismaService.user.findFirstOrThrow({
      where: {
        id: user.sub,
      },
      include: {
        profile: true,
      },
    });
    const newData = exclude(updateData, ['password']);
    return newData;
  }

  async updateProfile(data: UpdateUserProfileDTO, user: JwtDTO) {
    const prismaData = this.convertUpdatePrisma(data, user);
    const updateData = await this.prismaService.user.update({
      where: {
        id: user.sub,
        email: user.email,
      },
      data: {
        ...prismaData,
      },
      include: {
        profile: true,
      },
    });

    const newData = exclude(updateData, ['password']);
    return { ...newData };
  }

  async deleteProfile(user: JwtDTO) {
    await this.prismaService.collection.deleteMany({
      where: {
        profile: { id: user.sub },
      },
    });
    await this.prismaService.profile.delete({
      where: {
        id: user.sub,
      },
    });
    return true;
  }
}
