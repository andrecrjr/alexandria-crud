import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateCollectionDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  type: string;

  @IsInt()
  @ApiProperty()
  page: number;

  @IsInt()
  @IsOptional()
  @ApiProperty()
  userId: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  contentId: number;

  @IsInt()
  @IsOptional()
  @ApiProperty()
  profileId?: number;
}

export class UpdateCollectionDto extends PartialType(CreateCollectionDto) {}
