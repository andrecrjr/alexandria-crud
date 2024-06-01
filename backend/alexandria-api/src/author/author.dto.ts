// src/authors/dto/author.dto.ts

import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { BookDto } from 'src/book/book.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthorDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
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

export class AuthorDtoId {
  @ApiProperty()
  id: number;
}
