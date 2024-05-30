import { Controller, Get, Post, Request } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @Get()
  findAllBooks() {
    return this.bookService.getAll();
  }

  @Post()
  create(@Request() req) {
    return this.bookService.create(req.body);
  }
}
