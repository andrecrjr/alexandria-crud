import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateContentDTO, UpdateContentDTO } from './content.dto';
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
        contentType: true,
      },
    });
  }
  convertCreatePrisma(
    data: CreateContentDTO,
    user: JwtDTO,
  ): Prisma.ContentCreateInput {
    const { collections, contentType, authors, ...rest } = data;
    return {
      ...rest,
      createdBy: { connect: { id: user.sub } },
      contentType: contentType
        ? {
            connect: {
              id: contentType.id,
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
    const { collections, contentType, authors, ...rest } = data;
    return {
      ...rest,
      contentType: contentType
        ? {
            connect: {
              id: contentType.id,
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

  async createContent(contentData: CreateContentDTO, user: JwtDTO) {
    const prismaData = this.convertCreatePrisma(contentData, user);
    const data = await this.prismaService.content.create({
      data: { ...prismaData },
    });
    return data;
  }

  getAllContent() {
    return this.prismaService.content.findMany({
      include: {
        authors: true,
        contentType: {
          include: {
            statusTracker: true,
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
        contentType: true,
      },
    });
    return data;
  }
}
