// ContentTypeDTO.ts
import { IsInt, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ContentDTO } from 'src/content/content.dto';
import { ApiProperty } from '@nestjs/swagger';

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
}

export class PartialContentTypeDTO {
  @IsInt()
  @IsOptional()
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
}
