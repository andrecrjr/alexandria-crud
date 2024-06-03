import { Body, Controller, Post } from '@nestjs/common';
import { ContenttypeService } from './contenttype.service';
import { ContentTypeDTO } from './contenttype';

@Controller('contenttype')
export class ContenttypeController {
  constructor(private readonly contentTypeService: ContenttypeService) {}
  @Post()
  createType(@Body() data: ContentTypeDTO) {
    return this.contentTypeService.createContentType(data);
  }
}
