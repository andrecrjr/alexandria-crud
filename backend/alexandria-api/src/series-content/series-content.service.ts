import { Injectable } from '@nestjs/common';
import { Prisma, SeriesContent } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { CreateSeriesContentDto } from './dto/create-series-content.dto';
import { UpdateSeriesContentDto } from './dto/update-series-content.dto';
import { SeriesContentDTOForGenre } from './entities/series-content.entity';

@Injectable()
export class SeriesContentService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: CreateSeriesContentDto,
  ): Promise<SeriesContentDTOForGenre> {
    const prismaData = data as Prisma.SeriesContentCreateInput;
    return this.prisma.seriesContent.create({
      data: prismaData,
    });
  }

  async findAll(): Promise<SeriesContentDTOForGenre[]> {
    return this.prisma.seriesContent.findMany();
  }

  async findOne(id: number) {
    return this.prisma.seriesContent.findUnique({
      where: { id },
      select: {
        contents: true,
      },
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
