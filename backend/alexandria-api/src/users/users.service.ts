import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CreateUserDTO } from './User.dto';

@Injectable()
export class UsersService {
  private prisma = new PrismaClient();
  async create({ password, ...data }: CreateUserDTO) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
        profile: {
          create: {
            ...data.profile,
          },
        },
      },
      select: {
        email: true,
        password: false,
        username: true,
        createdAt: true,
        profile: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  async findOne(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}
