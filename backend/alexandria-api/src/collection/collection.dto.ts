import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, IsNotEmpty } from 'class-validator';
import { ContentDTO } from 'src/content/content.dto';

export class CollectionDto {
  @IsString()
  @IsNotEmpty()
  currentStatusTrack: string;

  @IsInt()
  @IsOptional()
  page: number;

  @IsInt()
  @IsNotEmpty()
  contentId: number;

  @IsInt()
  profileId?: number;

  @Type(() => ContentDTO)
  content: ContentDTO;
}
export class CreateCollectionDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  currentStatusTrack: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  page: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  contentId: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  profileId?: number;
}

export class UpdateCollectionDto extends PartialType(CreateCollectionDto) {}
