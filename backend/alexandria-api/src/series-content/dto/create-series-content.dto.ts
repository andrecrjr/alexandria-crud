import {
  IsString,
  IsOptional,
  IsUrl,
  IsArray,
  ArrayNotEmpty,
  IsInt,
} from 'class-validator';

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
  contents?: string[];

  @IsOptional()
  genres?: string[];
}
