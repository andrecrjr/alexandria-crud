// ContentDTO.ts
import {
  IsInt,
  IsString,
  IsOptional,
  IsDate,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CollectionDTO } from 'src/collection/collection';
import { PartialContentTypeDTO } from 'src/contenttype/contenttype';
import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { AuthorContentDTO } from 'src/author-content/entities/author-content.entity';

export class ContentDTO {
  @IsInt()
  @IsOptional()
  id: number;

  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  description?: string;

  @IsInt()
  @IsOptional()
  @ApiProperty()
  typeId: number;

  @IsInt()
  @ApiProperty()
  numberPages: number;

  @IsOptional()
  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => PartialContentTypeDTO)
  type: PartialContentTypeDTO;

  @IsOptional()
  @IsString()
  @ApiProperty()
  isbn?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  imageUrl?: string;

  @IsOptional()
  @IsInt()
  createdById?: number;

  @IsOptional()
  @IsDate()
  createdAt: Date;

  @IsOptional()
  @IsDate()
  updatedAt: Date;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CollectionDTO)
  collections: CollectionDTO[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => AuthorContentDTO)
  authors: AuthorContentDTO[];
}

export class UpdateContentDTO extends PartialType(ContentDTO) {}
