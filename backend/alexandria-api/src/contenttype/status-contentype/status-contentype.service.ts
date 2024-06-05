import { Injectable } from '@nestjs/common';
import { CreateStatusContentypeDto } from './dto/create-status-contentype.dto';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateStatusContentypeDto } from './dto/update-status-contentype.dto';

@Injectable()
export class StatusContentypeService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateStatusContentypeDto) {
    const newData = await this.prismaService.statusContentypeUser.create({
      data: data,
    });
    return newData;
  }

  async findAll() {
    return await this.prismaService.statusContentypeUser.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} statusContentype`;
  }

  async update(id: number, data: UpdateStatusContentypeDto) {
    await this.prismaService.statusContentypeUser.update({
      where: { id },
      data: data,
      
    });
    return `This action updates a #${id} statusContentype`;
  }

  remove(id: number) {
    return `This action removes a #${id} statusContentype`;
  }
}
