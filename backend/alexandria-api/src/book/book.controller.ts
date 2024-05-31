import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { BookUpdate, CreateBookDto } from './book.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Books')
@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @Get()
  findAllBooks() {
    return this.bookService.findAll();
  }

  @Post()
  create(@Body() body: CreateBookDto) {
    return this.bookService.create(body);
  }

  @Post('bulk')
  createMany(@Body() body: CreateBookDto[]) {
    return this.bookService.createBulk(body);
  }

  @Delete('bulk')
  removeMany(@Body() body: BookUpdate) {
    return this.bookService.removeBulk(body);
  }
}
