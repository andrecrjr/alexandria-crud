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
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsArray()
  @Type(() => ContentTypeIDDTO)
  category: ContentTypeIDDTO[];

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @Type(() => UserIdDTO)
  createdById?: UserIdDTO;

  @ValidateNested()
  @Type(() => AuthorContentDTO) // Specify the nested DTO type
  seriesCreator?: AuthorContentDTO[];

  @IsOptional()
  createdAt?: Date; // Prisma handles default for timestamps

  @IsOptional()
  updatedAt?: Date; // Prisma handles default for timestamps

  @ValidateNested()
  @IsArray()
  @IsOptional()
  @Type(() => ContentIdDTO) // Specify the nested DTO type
  contents?: ContentIdDTO[];

  @IsArray()
  @IsOptional()
  @IsEnum(GenreContentDTO, { each: true }) // Validate each item in the array
  genres: GenreContentDTO[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true }) // Validate each item in the array
  synonyms?: string[];
}
