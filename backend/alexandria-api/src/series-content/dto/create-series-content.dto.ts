import {
  IsString,
  IsOptional,
  IsUrl,
  IsUUID,
  IsArray,
  ArrayNotEmpty,
} from 'class-validator';

class CreateSeriesContentDto {
  @IsUUID()
  id: string;

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

export default CreateSeriesContentDto;
