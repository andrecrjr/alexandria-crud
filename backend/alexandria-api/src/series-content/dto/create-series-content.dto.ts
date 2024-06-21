import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
  IsEnum,
} from 'class-validator';
import { AuthorContentDTO } from 'src/author-content/entities/author-content.dto';
import { ContentIdDTO } from 'src/content/content.dto';
import { ContentTypeIDDTO } from 'src/contenttype/contenttype.dto';
import { GenreContentDTO } from 'src/genre-content/dto/genre-content.dto';
import { UserIdDTO } from 'src/users/User.dto';

export class CreateSeriesContentDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsArray()
  @Type(() => ContentTypeIDDTO)
  category: ContentTypeIDDTO[];

  @ApiProperty()
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiProperty()
  @IsOptional()
  @Type(() => UserIdDTO)
  createdById?: UserIdDTO;

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  @Type(() => AuthorContentDTO) // Specify the nested DTO type
  seriesCreator?: AuthorContentDTO[];

  @IsOptional()
  createdAt?: Date; // Prisma handles default for timestamps

  @IsOptional()
  updatedAt?: Date; // Prisma handles default for timestamps

  @ApiProperty()
  @ValidateNested()
  @IsArray()
  @IsOptional()
  @Type(() => ContentIdDTO) // Specify the nested DTO type
  contents?: ContentIdDTO[];

  @ApiProperty()
  @IsArray()
  @IsOptional()
  @IsEnum(GenreContentDTO, { each: true }) // Validate each item in the array
  genres: GenreContentDTO[];

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsString({ each: true }) // Validate each item in the array
  synonyms?: string[];
}
