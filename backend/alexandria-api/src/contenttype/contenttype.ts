// ContentTypeDTO.ts
import { IsInt, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ContentDTO } from 'src/content/content.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ContentTypeDTO {
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => ContentDTO)
  contents: ContentDTO[];
}
