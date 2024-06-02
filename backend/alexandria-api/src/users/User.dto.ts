import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, MinLength } from 'class-validator';

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
  profile: object;
}

export class AuthLoginDTO {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}
