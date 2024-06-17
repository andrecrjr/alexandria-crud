import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenreContentService } from './genre-content.service';
import { CreateGenreContentDto } from './dto/create-genre-content.dto';
import { UpdateGenreContentDto } from './dto/update-genre-content.dto';

@Controller('genre-content')
export class GenreContentController {
  constructor(private readonly genreContentService: GenreContentService) {}

  @Post()
  create(@Body() createGenreContentDto: CreateGenreContentDto) {
    return this.genreContentService.create(createGenreContentDto);
  }

  @Get()
  findAll() {
    return this.genreContentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genreContentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenreContentDto: UpdateGenreContentDto) {
    return this.genreContentService.update(+id, updateGenreContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genreContentService.remove(+id);
  }
}
