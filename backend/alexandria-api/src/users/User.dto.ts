import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { ProfileDTO } from './profile/profile.dto';
import { Type } from 'class-transformer';
export class CreateUserDTO {
  @ApiProperty()
  @IsEmail()
  @MinLength(1)
  email: string;

  @ApiProperty()
  @MinLength(6)
  password: string;

  @ApiProperty()
  @MinLength(5)
  @IsString()
  username: string;

  @IsOptional()
  @ApiProperty()
  @Type(() => ProfileDTO)
  profile: ProfileDTO;

  @IsBoolean()
  @IsOptional()
  userActive: boolean;
}

export class UpdateUserProfileDTO extends PartialType(CreateUserDTO) {}

export class UserIdDTO {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  id: number;
}

export class AuthLoginDTO {
  @ApiProperty({ required: true })
  @IsEmail()
  email: string;
  @ApiProperty({ required: true })
  password: string;
}
