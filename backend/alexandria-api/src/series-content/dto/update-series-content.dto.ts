import { PartialType } from '@nestjs/swagger';
import { CreateSeriesContentDto } from './create-series-content.dto';

export class UpdateSeriesContentDto extends PartialType(
  CreateSeriesContentDto,
) {}
