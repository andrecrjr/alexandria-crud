import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CreateCollectionDto, UpdateCollectionDto } from './collection.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('User Pagination and Content Update')
@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @ApiBearerAuth('defaultBearerAuth')
  @Post('page')
  @UseGuards(AuthGuard)
  createUserWithContent(@Request() req, @Body() data: CreateCollectionDto) {
    return this.collectionService.createUserWithContent(req.user, data);
  }

  @UseGuards(AuthGuard)
  @Get('')
  @ApiBearerAuth('defaultBearerAuth')
  getUserWithContent(@Request() req) {
    return this.collectionService.getCollectionByUser(req.user);
  }

  @ApiBearerAuth('defaultBearerAuth')
  @Patch('page')
  @UseGuards(AuthGuard)
  updateUserPaginationWithContent(
    @Request() req,
    @Body() data: UpdateCollectionDto,
  ) {
    return this.collectionService.updateCollectionContentAndUser(
      req.user,
      data,
    );
  }
}
