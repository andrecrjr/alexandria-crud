import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateContentDTO } from './content.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ContentService {
  constructor(private readonly prismaService: PrismaService) {}

  convertCreatePrisma(data: UpdateContentDTO): Prisma.ContentCreateInput {
    const { collections, type, ...rest } = data;
    return {
      ...rest,
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
  async createContent(contentData: UpdateContentDTO) {
    const prismaData = this.convertCreatePrisma(contentData);
    const data = await this.prismaService.content.create({
      data: prismaData,
    });
    return data;
  }

  getAllContent() {
    return this.prismaService.content.findMany({
      include: {
        collection: true,
        type: true,
      },
    });
  }

  async updateContent(id: number, contentData: UpdateContentDTO) {
    const prismaData = this.convertCreatePrisma(contentData);
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
