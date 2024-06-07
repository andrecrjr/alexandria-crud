import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ContentDTO, UpdateContentDTO } from './content.dto';
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
    data: ContentDTO,
    user: JwtDTO,
  ): Prisma.ContentCreateInput {
    const { collections, type, authors, ...rest } = data;
    return {
      ...rest,
      createdBy: { connect: { id: user.sub } },
      type: type
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
      authors: authors
        ? {
            connect: authors?.map((items) => ({ id: items.id })),
          }
        : undefined,
    };
  }

  convertUpdatePrisma(data: UpdateContentDTO): Prisma.ContentUpdateInput {
    const { collections, type, authors, ...rest } = data;
    return {
      ...rest,
      type: type
        ? {
            connect: {
              id: type.id,
            },
          }
        : undefined,
      collection: collections
        ? {
            connect: collections?.map((items) => ({ id: items.id })),
          }
        : undefined,
      authors: authors
        ? {
            connect: authors?.map((items) => ({ id: items.id })),
          }
        : undefined,
    };
  }

  async createContent(contentData: ContentDTO, user: JwtDTO) {
    const prismaData = this.convertCreatePrisma(contentData, user);
    const data = await this.prismaService.content.create({
      data: { ...prismaData },
    });
    return data;
  }

  getAllContent() {
    return this.prismaService.content.findMany({
      include: {
        type: {
          include: {
            statusType: true,
          },
        },
      },
    });
  }

  async updateContent(id: number, contentData: UpdateContentDTO) {
    const prismaData = this.convertUpdatePrisma(contentData);
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

  async searchInsideCollectionByContentName(query: string) {
    const data = await this.prismaService.content.findMany({
      where: {
        title: {
          contains: query,
        },
      },
      include: {
        authors: true,
        type: true,
      },
    });
    return data;
  }
}
