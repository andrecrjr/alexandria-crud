import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';
import { ContentTypeDTO } from 'src/contenttype/contenttype';

export class StatusContentype {
  @IsInt()
  @IsOptional()
  id: number;

  @IsString()
  name: string[];

  @Type(() => ContentTypeDTO)
  contentType: ContentTypeDTO;
}
