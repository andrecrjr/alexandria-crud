import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDTO } from './User.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  async create(@Body() data: CreateUserDTO) {
    return this.usersService.create(data.username, data.password);
  }

  // user routes protection
  @UseGuards(AuthGuard)
  @ApiBearerAuth('defaultBearerAuth')
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
