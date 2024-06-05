// ContentTypeDTO.ts
import { IsInt, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ContentDTO } from 'src/content/content.dto';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { PartialStatusSwaggerCTypeDTO } from './status-contentype/dto/create-status-contentype.dto';

export class ContentTypeDTO {
  @IsInt()
  @IsOptional()
  id: number;

  @ApiProperty()
  @IsString()
  name: string;

  @ValidateNested({ each: true })
  @Type(() => ContentDTO)
  contents: ContentDTO[];

  @ApiProperty()
  @Type(() => PartialStatusSwaggerCTypeDTO)
  statusType: PartialStatusSwaggerCTypeDTO;

  statusTypeId: number;
}

export class PartialContentTypeDTO extends PartialType(ContentTypeDTO) {}
