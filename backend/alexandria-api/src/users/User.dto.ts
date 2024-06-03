import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, MinLength } from 'class-validator';
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
  @IsOptional()
  username: string;

  @IsOptional()
  @ApiProperty()
  @Type(() => ProfileDTO)
  profile: ProfileDTO;
}

export class AuthLoginDTO {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}
