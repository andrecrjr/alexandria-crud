import { Injectable } from '@nestjs/common';
import { CreateAuthorContentDto } from './dto/create-author-content.dto';
import { UpdateAuthorContentDto } from './dto/update-author-content.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { JwtDTO } from 'src/auth/jwt.dto';

@Injectable()
export class AuthorContentService {
  constructor(private readonly prismaService: PrismaService) {}

  convertAuthorPrisma(
    data: CreateAuthorContentDto,
    user: JwtDTO,
  ): Prisma.AuthorContentCreateInput {
    const { contents, ...rest } = data;
    return {
      ...rest,
      contents: contents
        ? {
            connect: contents?.map((items) => ({ id: items.id })),
          }
        : undefined,
      createdBy: user.sub
        ? {
            connect: {
              id: user.sub,
            },
          }
        : undefined,
    };
  }
  convertUpdateAuthorPrisma(
    data: UpdateAuthorContentDto,
  ): Prisma.AuthorContentUpdateInput {
    const { contents, createdById, ...rest } = data;
    return {
      ...rest,
      contents: contents
        ? {
            connect: contents?.map((items) => ({ id: items.id })),
          }
        : undefined,
      createdBy: createdById
        ? {
            connect: {
              id: createdById,
            },
          }
        : undefined,
    };
  }
  async create(createAuthorContentDto: CreateAuthorContentDto, user: JwtDTO) {
    const prismaData = this.convertAuthorPrisma(createAuthorContentDto, user);
    const data = await this.prismaService.authorContent.create({
      data: prismaData,
    });
    return data;
  }

  async findAll() {
    return await this.prismaService.authorContent.findMany({
      include: {
        createdBy: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prismaService.authorContent.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateAuthorContentDto: UpdateAuthorContentDto) {
    return await this.prismaService.authorContent.update({
      where: {
        id,
      },
      data: this.convertUpdateAuthorPrisma(updateAuthorContentDto),
    });
  }

  remove(id: number) {
    return `This action removes a #${id} authorContent`;
  }
}
