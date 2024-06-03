// CollectionDTO.ts
import { IsInt, IsString, IsDate, IsOptional } from 'class-validator';

export class CollectionDTO {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsInt()
  page: number;

  @IsInt()
  userId: number;

  @IsInt()
  contentId: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsOptional()
  @IsInt()
  profileId?: number;
}
