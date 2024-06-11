import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentDTO, UpdateContentDTO } from './content.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { IRequestJWT } from 'src/auth/jwt.dto';
import { ApiCookieAuth, ApiTags } from '@nestjs/swagger';

@Controller('content')
@ApiTags('Content Creation')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}
  @Get('all')
  getAllContent() {
    return this.contentService.getAllContent();
  }

  @Get(':id')
  getUnique(@Param('id') id: string) {
    return this.contentService.getUniqueContent(parseInt(id));
  }
  @ApiCookieAuth('accessToken')
  @Post()
  @UseGuards(AuthGuard)
  createContent(@Body() body: ContentDTO, @Request() req: IRequestJWT) {
    return this.contentService.createContent(body, req.user);
  }
  @ApiCookieAuth('accessToken')
  @Patch(':id')
  @UseGuards(AuthGuard)
  updateOneContent(@Param('id') id: string, @Body() data: UpdateContentDTO) {
    return this.contentService.updateContent(parseInt(id), data);
  }

  @ApiCookieAuth('accessToken')
  @Get('search')
  @UseGuards(AuthGuard)
  searchContentByTitle(@Query('q') query) {
    return this.contentService.searchInsideCollectionByContentName(query);
  }
}
