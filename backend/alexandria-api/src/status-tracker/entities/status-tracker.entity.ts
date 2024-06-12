import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';
import { ContentTypeDTO } from 'src/contenttype/contenttype.dto';

export class StatusTrackerDTO {
  @IsInt()
  @IsOptional()
  id: number;

  @IsString()
  statusHistory: string[];

  @Type(() => ContentTypeDTO)
  contentType: ContentTypeDTO;
}
