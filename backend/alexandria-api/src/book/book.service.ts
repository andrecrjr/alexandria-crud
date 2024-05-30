import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.book.findMany();
  }

  async findOne(id: string) {
    return this.prisma.book.findUnique({
      where: { id: Number(id) },
    });
  }

  async create(data) {
    return this.prisma.book.create({ data });
  }

  async createBulk(data) {
    return this.prisma.book.createMany({ data });
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
