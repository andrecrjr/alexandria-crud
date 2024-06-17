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
import { UpdateContentTypeDTO } from 'src/contenttype/contenttype.dto';
import { ApiProperty } from '@nestjs/swagger';
import { AuthorIdDTO } from 'src/author-content/entities/author-content.entity';
import { PartialType, PickType } from '@nestjs/mapped-types';

export class ContentDTO {
  @IsInt()
  @IsOptional()
  id: number;

  @IsString()
  @ApiProperty({ description: 'The title of the content.' })
  title: string;

  @IsString()
  @ApiProperty({
    description: 'A detailed description of the content.',
    required: false,
  })
  description?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'The identifier for the associated content type.',
    required: false,
  })
  typeId: string;

  @IsInt()
  @ApiProperty({ description: 'The total number of pages in the content.' })
  numberPages: number;

  @IsOptional()
  @ApiProperty({
    description: "The URL of the content's cover image.",
    required: false,
  })
  imageUrl?: string;

  @IsOptional()
  @ApiProperty({
    description: `The content type's track for this Content`,
  })
  @ValidateNested({ each: true })
  @Type(() => UpdateContentTypeDTO)
  contentType: UpdateContentTypeDTO;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'The International Standard Book Number (ISBN).',
    required: false,
  })
  isbn?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'The identifier of the user who created the content.',
    required: false,
  })
  createdById?: number;

  @IsOptional()
  @IsDate()
  createdAt: Date = new Date();

  @IsOptional()
  @IsDate()
  updatedAt: Date = new Date();

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CollectionDTO)
  @ApiProperty({
    description: 'The collections to which the content is associated.',
    type: [CollectionDTO],
    required: false,
  })
  collections: CollectionDTO[];

  @IsOptional()
  @ApiProperty({
    description: 'The authors of the content.',
    type: [AuthorIdDTO],
    required: false,
  })
  @Type(() => AuthorIdDTO)
  authors?: AuthorIdDTO[];
}

export class CreateContentDTO extends ContentDTO {
  @IsString()
  @ApiProperty({
    description: 'The International Standard Book Number (ISBN).',
    required: true,
  })
  isbn: string;
}

export class UpdateContentDTO extends PartialType(ContentDTO) {
  @ApiProperty({ description: 'The title of the content.', required: false })
  title?: string;

  @ApiProperty({
    description: 'A detailed description of the content.',
    required: false,
  })
  description?: string;

  @ApiProperty({
    description: 'The identifier for the associated content type.',
    required: false,
  })
  contentTypeId?: number;

  @ApiProperty({
    description: 'The total number of pages in the content.',
    required: false,
  })
  @IsInt()
  numberPages?: number;

  @ApiProperty({
    description: "The URL of the content's cover image.",
    required: false,
  })
  imageUrl?: string;

  @ApiProperty({
    description: 'The International Standard Book Number (ISBN).',
    required: false,
  })
  isbn?: string;

  @ApiProperty({
    description: 'The identifier of the user who created the content.',
    required: false,
  })
  createdById?: number;

  createdAt?: Date;
  updatedAt?: Date;
}

export class ContentIdDTO extends PickType(ContentDTO, ['id']) {
  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  id: number;
}
