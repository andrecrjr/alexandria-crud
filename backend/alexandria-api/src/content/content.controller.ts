import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentDTO, UpdateContentDTO } from './content.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}
  @Get('all')
  getAllContent() {
    return this.contentService.getAllContent();
  }
  @Post()
  @UseGuards(AuthGuard)
  createContent(@Body() body: ContentDTO) {
    return this.contentService.createContent(body);
  }
  @Patch(':id')
  updateOneContent(@Param('id') id: string, @Body() data: UpdateContentDTO) {
    return this.contentService.updateContent(parseInt(id), data);
  }
}
