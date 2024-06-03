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

export class ProfileDTO {
  @IsInt()
  id: number;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsInt()
  age?: number;

  @IsOptional()
  @IsString()
  gender?: string;

  @IsArray()
  @IsString({ each: true })
  interests: string[];

  @ValidateNested({ each: true })
  @Type(() => CollectionDTO)
  collections: CollectionDTO[];

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsOptional()
  @IsInt()
  userId?: number;

  @IsOptional()
  user: CreateUserDTO;
}
