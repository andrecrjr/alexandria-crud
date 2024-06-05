import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { ContentTypeDTO } from './contenttype';
import { PaginateAndFind } from 'src/decorators/Pagination';

@Injectable()
export class ContenttypeService {
  constructor(private readonly prismaService: PrismaService) {}

  createContentTypePrisma(data: ContentTypeDTO): Prisma.ContentTypeCreateInput {
    const { contents, statusType, ...rest } = data;

    return {
      ...rest,
      contents: {
        connect: contents?.map((item) => ({
          id: item.id,
        })),
      },
      statusType: {
        connect: statusType?.id
          ? {
              id: statusType.id,
            }
          : undefined,
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

  async getAll() {
    const page = parseInt('0');
    const limit = parseInt('10');

    const results = await this.prismaService['contentType'].findMany({
      take: limit,
      skip: page * limit,
      include: {
        statusType: true,
      },
    });

    const count = await this.prismaService['contentType'].count();
    const totalPages = Math.ceil(count / limit) - 1;
    console.log(totalPages);
    // Aqui você pode adicionar lógica para calcular o total de páginas, etc.
    const paginationResult = {
      data: results,
      page,
      limit,
      // total, totalPages, etc.
      count,
      totalPages,
      next: totalPages > page ? page + 1 : null,
      prev: totalPages < page ? page - 1 : null,
    };

    return paginationResult;
  }
}
