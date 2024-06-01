import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthorService } from './author.service';
import { AuthorDtoId, CreateAuthorDto } from './author.dto';

@Controller('author')
@ApiTags('Author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}
  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  @Post()
  create(@Body() body: CreateAuthorDto) {
    return this.authorService.create(body);
  }

  @Delete()
  delete(@Body() objectId: AuthorDtoId) {
    return this.authorService.remove(objectId);
  }
}
