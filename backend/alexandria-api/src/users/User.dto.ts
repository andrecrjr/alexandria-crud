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
import { UpdateProfileDTO } from './profile/profile.dto';
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
  @ApiProperty({ required: false })
  @Type(() => UpdateProfileDTO)
  profile: UpdateProfileDTO;

  @IsBoolean()
  @IsOptional()
  userActive: boolean = true;
}

export class UpdateUserProfileDTO extends PartialType(CreateUserDTO) {
  @ApiProperty({ required: false })
  @IsEmail()
  @MinLength(1)
  @IsOptional()
  email: string;

  @ApiProperty({ required: false })
  @MinLength(6)
  @IsOptional()
  password: string;

  @ApiProperty({ required: false })
  @MinLength(5)
  @IsString()
  @IsOptional()
  username: string;

  @IsOptional()
  @ApiProperty({ required: false })
  @Type(() => UpdateProfileDTO)
  @IsOptional()
  profile: UpdateProfileDTO;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false })
  userActive: boolean;
}

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
