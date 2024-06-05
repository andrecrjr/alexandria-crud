import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsOptional } from 'class-validator';

export class CreateStatusContentypeDto {
  @IsInt()
  @IsOptional()
  id: number;

  @IsArray()
  @ApiProperty()
  name: string[];
}

export class PartialStatusSwaggerCTypeDTO {
  @ApiProperty()
  @IsInt()
  id: number;
}
