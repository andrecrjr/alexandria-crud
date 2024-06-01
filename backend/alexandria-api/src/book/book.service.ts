import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { BookDto, CreateBookDto } from './book.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  private convertToPrisma(
    data: CreateBookDto | BookDto,
  ): Prisma.BookCreateInput {
    const { authors, ...rest } = data;
    return {
      ...rest,
      authors: {
        connect: authors.map((author) => ({ id: author.id })),
      },
    };
  }

  async findAll() {
    return this.prisma.book.findMany({
      include: {
        authors: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.book.findUnique({
      where: { id: Number(id) },
    });
  }

  async create(data: CreateBookDto) {
    const prisma = this.convertToPrisma(data);
    return this.prisma.book.create({ data: prisma });
  }

  async createBulk(data: CreateBookDto[]) {
    const prismaData = data.map(this.convertToPrisma);
    return this.prisma.book.createMany({ data: prismaData });
  }

  async removeBulk(data) {
    return this.prisma.book.deleteMany({
      where: {
        id: {
          in: data,
        },
      },
    });
  }

  async update(id: string, data) {
    return this.prisma.book.update({
      where: { id: Number(id) },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.book.delete({
      where: { id: Number(id) },
    });
  }
}
