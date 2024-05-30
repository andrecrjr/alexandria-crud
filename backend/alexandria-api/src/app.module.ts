import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';
import { PrismaService } from 'prisma/prisma.service';
import { AuthorService } from './author/author.service';

@Module({
  imports: [],
  controllers: [AppController, BookController],
  providers: [AppService, BookService, PrismaService, AuthorService],
})
export class AppModule {}
