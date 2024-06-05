// ContentTypeDTO.ts
import { IsInt, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ContentDTO } from 'src/content/content.dto';
import { ApiProperty } from '@nestjs/swagger';
import { CreateStatusContentypeDto } from './status-contentype/dto/create-status-contentype.dto';

export class ContentTypeDTO {
  @IsInt()
  @IsOptional()
  id: number;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => ContentDTO)
  contents: ContentDTO[];

  @ApiProperty()
  @Type(() => CreateStatusContentypeDto)
  statusType: CreateStatusContentypeDto;

  statusTypeId: number;
}

export class PartialContentTypeDTO {
  @IsInt()
  @IsOptional()
  id: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ContentDTO)
  contents: ContentDTO[];

  @ApiProperty()
  @IsOptional()
  @Type(() => CreateStatusContentypeDto)
  statusType: CreateStatusContentypeDto;

  statusTypeId: number;
}
