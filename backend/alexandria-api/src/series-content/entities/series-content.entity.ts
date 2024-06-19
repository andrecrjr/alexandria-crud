import { IsInt } from 'class-validator';

export class SeriesContent {
  @IsInt()
  id: number;
}
