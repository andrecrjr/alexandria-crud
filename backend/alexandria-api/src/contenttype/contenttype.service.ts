import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { ContentTypeDTO } from './contenttype';

@Injectable()
export class ContenttypeService {
  constructor(private readonly prismaService: PrismaService) {}

  createContentTypePrisma(data: ContentTypeDTO): Prisma.ContentTypeCreateInput {
    const { contents, ...rest } = data;

    return {
      ...rest,
      contents: {
        connect: contents?.map((item) => ({
          id: item.id,
        })),
      },
    };
  }
  async createContentType(data: ContentTypeDTO) {
    const prismaData = this.createContentTypePrisma(data);
    const created = await this.prismaService.contentType.create({
      data: prismaData,
    });
    return created;
  }
}
