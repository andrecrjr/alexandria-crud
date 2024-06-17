import { Injectable } from '@nestjs/common';
import { CreateGenreContentDto } from './dto/create-genre-content.dto';
import { UpdateGenreContentDto } from './dto/update-genre-content.dto';

@Injectable()
export class GenreContentService {
  create(createGenreContentDto: CreateGenreContentDto) {
    return 'This action adds a new genreContent';
  }

  findAll() {
    return `This action returns all genreContent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} genreContent`;
  }

  update(id: number, updateGenreContentDto: UpdateGenreContentDto) {
    return `This action updates a #${id} genreContent`;
  }

  remove(id: number) {
    return `This action removes a #${id} genreContent`;
  }
}
