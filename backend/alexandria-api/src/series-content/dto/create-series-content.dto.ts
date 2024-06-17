import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  IsEnum,
  IsArray,
} from 'class-validator';

enum ContentCategory {
  BOOK = 'BOOK',
  ANIME = 'ANIME',
  MANGA = 'MANGA',
  MOVIE = 'MOVIE',
  SERIES = 'SERIES',
  PODCAST = 'PODCAST',
  MUSIC = 'MUSIC',
  DOCUMENTARY = 'DOCUMENTARY',
  GAME = 'GAME',
  MAGAZINE = 'MAGAZINE',
  WEBTOON = 'WEBTOON',
  SHORT_FILM = 'SHORT_FILM',
  PLAY = 'PLAY',
  RADIO_SHOW = 'RADIO_SHOW',
  VIDEO_COURSE = 'VIDEO_COURSE',
}

export class CreateSeriesDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsEnum(ContentCategory)
  category: ContentCategory;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;

  @IsOptional()
  createdBy?: number; // Assuming createdBy is the ID of the User

  @IsOptional()
  @IsArray()
  authors?: number[]; // Assuming authors are represented by their IDs

  createdAt?: Date;
  updatedAt?: Date;
}
