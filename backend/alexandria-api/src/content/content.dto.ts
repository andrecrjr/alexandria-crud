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
import {
  ContentTypeDTO,
  PartialContentTypeDTO,
} from 'src/contenttype/contenttype';

export class ContentDTO {
  @IsInt()
  @IsOptional()
  id: number;

  @IsString()
  title: string;

  @IsString()
  description?: string;

  @IsInt()
  @IsOptional()
  typeId: number;

  @IsInt()
  numberPages: number;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ContentTypeDTO)
  type: ContentTypeDTO;

  @IsOptional()
  @IsString()
  isbn?: string;

  @IsOptional()
  @IsString()
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
}

export class UpdateContentDTO {
  @IsInt()
  @IsOptional()
  id: number;

  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsInt()
  @IsOptional()
  typeId: number;

  @IsInt()
  @IsOptional()
  numberPages: number;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => PartialContentTypeDTO)
  type: PartialContentTypeDTO;

  @IsOptional()
  @IsString()
  isbn?: string;

  @IsOptional()
  @IsString()
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
}
