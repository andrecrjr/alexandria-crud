import { Injectable } from '@nestjs/common';
import { CreateSeriesContentDto } from './dto/create-series-content.dto';
import { UpdateSeriesContentDto } from './dto/update-series-content.dto';

@Injectable()
export class SeriesContentService {
  create(createSeriesContentDto: CreateSeriesContentDto) {
    return 'This action adds a new seriesContent';
  }

  findAll() {
    return `This action returns all seriesContent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seriesContent`;
  }

  update(id: number, updateSeriesContentDto: UpdateSeriesContentDto) {
    return `This action updates a #${id} seriesContent`;
  }

  remove(id: number) {
    return `This action removes a #${id} seriesContent`;
  }
}
