import { Module } from '@nestjs/common';
import { StatusContentypeService } from './status-contentype.service';
import { StatusContentypeController } from './status-contentype.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [StatusContentypeController],
  providers: [StatusContentypeService, PrismaService],
})
export class StatusContentypeModule {}
