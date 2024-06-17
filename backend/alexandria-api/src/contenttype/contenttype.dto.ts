// ContentTypeDTO.ts
import {
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ContentIdDTO } from 'src/content/content.dto';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { StatusTrackIdDTO } from '../status-tracker/dto/create-status-tracker.dto';

export class ContentTypeDTO {
  @IsString()
  @IsOptional()
  id: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @ValidateNested({ each: true })
  @Type(() => ContentIdDTO)
  contents: ContentIdDTO[];

  @Type(() => StatusTrackIdDTO)
  statusTracker: StatusTrackIdDTO;

  statusTrackerId: number;
}

export class CreateContentTypeDTO extends ContentTypeDTO {
  @IsString()
  @IsOptional()
  id: string;

  @ApiProperty()
  @IsString()
  @MinLength(0)
  title: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MinLength(10)
  description: string;

  @ApiProperty({ required: false })
  @ValidateNested({ each: true })
  @Type(() => ContentIdDTO)
  contents: ContentIdDTO[];

  @ApiProperty({ required: true })
  @Type(() => StatusTrackIdDTO)
  statusTracker: StatusTrackIdDTO;

  statusTrackerId: number;
}

export class UpdateContentTypeDTO extends PartialType(ContentTypeDTO) {}
