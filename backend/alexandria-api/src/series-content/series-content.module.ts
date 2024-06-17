import { Module } from '@nestjs/common';
import { SeriesContentService } from './series-content.service';
import { SeriesContentController } from './series-content.controller';

@Module({
  controllers: [SeriesContentController],
  providers: [SeriesContentService],
})
export class SeriesContentModule {}
