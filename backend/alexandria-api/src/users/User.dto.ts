import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, MinLength } from 'class-validator';
import { Prisma } from '@prisma/client';

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
  profile: Prisma.ProfileCreateWithoutUserInput;

  // @IsOptional()
  // profileId: number;
}

export class AuthLoginDTO {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}
