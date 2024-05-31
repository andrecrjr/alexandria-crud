import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}

export class AuthLoginDTO {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}
