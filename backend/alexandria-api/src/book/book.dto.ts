// src/books/dto/book.dto.ts

import {
  IsString,
  IsDate,
  IsOptional,
  IsNumber,
  IsArray,
  ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';
import { AuthorDto } from 'src/author/author.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  publishedAt: Date;

  @ApiProperty()
  @IsString()
  editorialForm: string;

  @ApiProperty()
  @IsString()
  content: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  isbn?: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AuthorDto)
  authors: AuthorDto[];
}

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  publishedAt?: Date;

  @IsOptional()
  @IsString()
  editorialForm?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsString()
  isbn?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AuthorDto)
  authors?: AuthorDto[];
}

export class BookDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  publishedAt: Date;
  @ApiProperty()
  editorialForm: string;
  @ApiProperty()
  content: string;
  @ApiProperty()
  isbn?: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  authors: AuthorDto[];
}

export class BookUpdate {
  @ApiProperty()
  @IsNumber()
  @IsArray()
  id: number;
}
