import { Controller, Delete, Get, Post, Request } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @Get()
  findAllBooks() {
    return this.bookService.findAll();
  }

  @Post()
  create(@Request() req) {
    return this.bookService.create(req.body);
  }

  @Post('bulk')
  createMany(@Request() req) {
    return this.bookService.createBulk(req.body);
  }

  @Delete('bulk')
  removeMany(@Request() req) {
    return this.bookService.removeBulk(req.body);
  }
}
