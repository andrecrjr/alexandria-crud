import { Module } from '@nestjs/common';
import { ContenttypeController } from './contenttype.controller';
import { ContenttypeService } from './contenttype.service';
import { PrismaService } from 'prisma/prisma.service';
import { StatusContentypeModule } from '../status-tracker/status-contentype.module';

@Module({
  providers: [ContenttypeService, PrismaService],
  controllers: [ContenttypeController],
  imports: [StatusContentypeModule],
})
export class ContenttypeModule {}
