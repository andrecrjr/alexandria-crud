import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthorDto, AuthorDtoId, CreateAuthorDto } from './author.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return this.prisma.author.findMany();
  }

  async findOne(id: string) {
    return this.prisma.author.findUnique({
      where: { id: Number(id) },
    });
  }

  private convertToPrisma(
    data: CreateAuthorDto | AuthorDto,
  ): Prisma.AuthorCreateInput {
    const { books, ...rest } = data;
    return {
      ...rest,
      books: {
        connect: books.map((book) => ({ id: book.id })),
      },
    };
  }

  async create(data: CreateAuthorDto) {
    const prisma = this.convertToPrisma(data);
    return this.prisma.author.create({ data: prisma });
  }

  async createBulk(data) {
    return this.prisma.author.createMany({ data: data });
  }

  async removeBulk(data) {
    return this.prisma.author.deleteMany({
      where: {
        id: {
          in: data,
        },
      },
    });
  }

  async update(id: string, data) {
    return this.prisma.author.update({
      where: { id: Number(id) },
      data,
    });
  }

  async remove({ id }: AuthorDtoId) {
    return this.prisma.author.delete({
      where: { id: Number(id) },
    });
  }
}
