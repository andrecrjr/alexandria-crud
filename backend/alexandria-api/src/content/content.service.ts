import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateContentDTO } from './content.dto';
import { Prisma } from '@prisma/client';
import { JwtDTO } from 'src/auth/jwt.dto';

@Injectable()
export class ContentService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUniqueContent(id: number) {
    return this.prismaService.content.findFirstOrThrow({
      where: { id: id },
      include: {
        createdBy: true,
        type: true,
      },
    });
  }
  convertCreatePrisma(
    data: UpdateContentDTO,
    user: JwtDTO,
  ): Prisma.ContentCreateInput {
    const { collections, type, ...rest } = data;
    return {
      ...rest,
      createdBy: { connect: { id: user.sub } },
      type: type?.id
        ? {
            connect: {
              id: type.id || 1,
            },
          }
        : undefined,
      collection: collections
        ? {
            connect: collections?.map((items) => ({ id: items.id })),
          }
        : undefined,
    };
  }
  async createContent(contentData: UpdateContentDTO, user: JwtDTO) {
    const prismaData = this.convertCreatePrisma(contentData, user);
    const data = await this.prismaService.content.create({
      data: { ...prismaData },
    });
    return data;
  }

  getAllContent() {
    return this.prismaService.content.findMany({
      include: {
        type: true,
      },
    });
  }

  async updateContent(id: number, contentData: UpdateContentDTO, user: JwtDTO) {
    const prismaData = this.convertCreatePrisma(contentData, user);
    const data = await this.prismaService.content.update({
      where: {
        id,
      },
      data: {
        ...prismaData,
      },
    });
    return data;
  }
}
