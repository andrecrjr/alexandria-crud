import { Module } from '@nestjs/common';
import { ContenttypeController } from './contenttype.controller';
import { ContenttypeService } from './contenttype.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [ContenttypeService, PrismaService],
  controllers: [ContenttypeController],
})
export class ContenttypeModule {}
