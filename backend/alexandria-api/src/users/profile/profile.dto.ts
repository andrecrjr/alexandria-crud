import {
  IsInt,
  IsOptional,
  IsString,
  IsArray,
  ValidateNested,
  IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CollectionDTO } from 'src/collection/collection';
import { CreateUserDTO } from '../User.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ProfileDTO {
  @IsInt()
  @IsOptional()
  id: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  bio?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  age?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  gender?: string;

  @ApiProperty()
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  interests: string[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => CollectionDTO)
  @IsOptional()
  collections: CollectionDTO[];

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @IsDate()
  @IsOptional()
  updatedAt: Date;

  @IsOptional()
  @IsInt()
  userId?: number;

  @IsOptional()
  @Type(() => CreateUserDTO)
  user: CreateUserDTO;
}
