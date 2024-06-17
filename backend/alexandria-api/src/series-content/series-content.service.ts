import { Injectable } from '@nestjs/common';
import { Prisma, SeriesContent } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { CreateSeriesContentDto } from './dto/create-series-content.dto';
import { UpdateSeriesContentDto } from './dto/update-series-content.dto';

@Injectable()
export class SeriesContentService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateSeriesContentDto): Promise<SeriesContent> {
    const prismaData = data as Prisma.SeriesContentCreateInput;
    return this.prisma.seriesContent.create({
      data: prismaData,
    });
  }

  async findAll(): Promise<SeriesContent[]> {
    return this.prisma.seriesContent.findMany();
  }

  async findOne(id: number): Promise<SeriesContent | null> {
    return this.prisma.seriesContent.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    data: UpdateSeriesContentDto,
  ): Promise<SeriesContent> {
    const prismaData = data as Prisma.SeriesContentUpdateInput;
    return this.prisma.seriesContent.update({
      where: { id },
      data: prismaData,
    });
  }

  async remove(id: number): Promise<SeriesContent> {
    return this.prisma.seriesContent.delete({
      where: { id },
    });
  }
}
