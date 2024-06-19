import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateGenreContentDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}

export class GenreContentId {
  @IsInt()
  @ApiProperty()
  id: number;
}
