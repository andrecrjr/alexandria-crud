import { Module } from '@nestjs/common';
import { GenreContentService } from './genre-content.service';
import { GenreContentController } from './genre-content.controller';

@Module({
  controllers: [GenreContentController],
  providers: [GenreContentService],
})
export class GenreContentModule {}
