import { Type } from 'class-transformer';
import {
  IsString,
  IsOptional,
  IsUrl,
  IsArray,
  ArrayNotEmpty,
  IsInt,
} from 'class-validator';
import { ContentIdDTO } from 'src/content/content.dto';

export class CreateSeriesContentDto {
  @IsInt()
  id: number;

  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  category?: string[];

  @IsOptional()
  @IsUrl()
  imageUrl?: string;

  @IsOptional()
  createdBy?: string;

  @IsOptional()
  seriesCreator?: string[];

  @IsOptional()
  createdById?: string;

  @IsOptional()
  @Type(() => ContentIdDTO)
  contents?: ContentIdDTO[];

  @IsOptional()
  genres?: string[];
}
