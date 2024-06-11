import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsOptional, MinLength } from 'class-validator';
import { ProfileDTO } from './profile/profile.dto';
import { Type } from 'class-transformer';
export class CreateUserDTO {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @MinLength(6)
  password: string;

  @ApiProperty()
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
  @IsOptional()
  @ApiProperty()
  id: number;
}

export class AuthLoginDTO {
  @ApiProperty()
  @IsEmail()
  email: string;
  @ApiProperty()
  password: string;
}
