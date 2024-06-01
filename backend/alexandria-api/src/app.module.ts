import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';
import { PrismaService } from 'prisma/prisma.service';
import { AuthorService } from './author/author.service';
import { UsersController } from './users/users.controller';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { LocalStrategy } from './auth/local.strategy';
import { AuthorController } from './author/author.controller';

@Module({
  imports: [],
  controllers: [AppController, BookController, UsersController, AuthController, AuthorController],
  providers: [
    AppService,
    BookService,
    PrismaService,
    AuthorService,
    AuthService,
    UsersService,
    JwtService,
    LocalStrategy,
  ],
})
export class AppModule {}
