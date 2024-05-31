// src/authors/dto/author.dto.ts

import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { BookDto } from 'src/book/book.dto';

export class CreateAuthorDto {
  @IsString()
  name: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BookDto)
  books: BookDto[];
}

export class UpdateAuthorDto {
  @IsString()
  name?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BookDto)
  books?: BookDto[];
}

export class AuthorDto {
  id: number;
  name: string;
  books: BookDto[];
}
