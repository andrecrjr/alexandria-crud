import { PickType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsOptional } from 'class-validator';

export class CreateStatusTrackDto {
  @IsInt()
  @IsOptional()
  id: number;

  @IsArray()
  @ApiProperty()
  statusHistory: string[];
}

export class StatusTrackIdDTO extends PickType(CreateStatusTrackDto, [
  'id',
] as const) {
  @ApiProperty()
  @IsInt()
  id: number;
}
