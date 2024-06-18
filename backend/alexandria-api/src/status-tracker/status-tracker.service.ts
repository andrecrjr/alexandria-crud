import { Injectable } from '@nestjs/common';
import { CreateStatusTrackDto } from './dto/create-status-tracker.dto';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateStatusTrackDto } from './dto/update-status-tracker.dto';

@Injectable()
export class StatusTrackerService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateStatusTrackDto) {
    this.prismaService.statusTrackUser;
    const newData = await this.prismaService.statusTrackUser.create({
      data: data,
    });
    return newData;
  }

  async findAll() {
    return await this.prismaService.statusTrackUser.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} statusContentype`;
  }

  async update(id: number, data: UpdateStatusTrackDto) {
    await this.prismaService.statusTrackUser.update({
      where: { id },
      data: data,
    });
    return true;
  }

  remove(id: number) {
    return `This action removes a #${id} statusContentype`;
  }
}
