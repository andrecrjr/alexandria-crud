import { ContentType } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
  IsEnum,
} from 'class-validator';
import { AuthorContentDTO } from 'src/author-content/entities/author-content.dto';
import { ContentDTO } from 'src/content/content.dto';
import { ContentTypeDTO } from 'src/contenttype/contenttype.dto';
import { GenreContentDTO } from 'src/genre-content/dto/genre-content.dto';

export class CreateSeriesContentDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsArray()
  @IsEnum(ContentTypeDTO, { each: true })
  category: ContentType[];

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  createdBy?: number;

  @ValidateNested()
  @Type(() => AuthorContentDTO) // Specify the nested DTO type
  seriesCreator?: AuthorContentDTO[];

  @IsOptional()
  createdAt?: Date; // Prisma handles default for timestamps

  @IsOptional()
  updatedAt?: Date; // Prisma handles default for timestamps

  @ValidateNested()
  @IsArray()
  @Type(() => ContentDTO) // Specify the nested DTO type
  contents?: ContentDTO[];

  @IsArray()
  @IsEnum(GenreContentDTO, { each: true }) // Validate each item in the array
  genres: GenreContentDTO[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true }) // Validate each item in the array
  synonyms?: string[];
}
