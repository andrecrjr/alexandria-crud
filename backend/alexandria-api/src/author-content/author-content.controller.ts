import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
} from '@nestjs/common';
import { AuthorContentService } from './author-content.service';
import { CreateAuthorContentDto } from './dto/create-author-content.dto';
import { UpdateAuthorContentDto } from './dto/update-author-content.dto';

@Controller('author-content')
export class AuthorContentController {
  constructor(private readonly authorContentService: AuthorContentService) {}

  @Post()
  create(
    @Body() createAuthorContentDto: CreateAuthorContentDto,
    @Request() req,
  ) {
    return this.authorContentService.create(createAuthorContentDto, req);
  }

  @Get()
  findAll() {
    return this.authorContentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorContentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAuthorContentDto: UpdateAuthorContentDto,
  ) {
    return this.authorContentService.update(+id, updateAuthorContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorContentService.remove(+id);
  }
}
