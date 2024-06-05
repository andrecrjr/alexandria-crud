import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { StatusContentypeService } from './status-contentype.service';
import { CreateStatusContentypeDto } from './dto/create-status-contentype.dto';
import { UpdateStatusContentypeDto } from './dto/update-status-contentype.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('status-contentype')
@ApiTags('Status for Content Types')
export class StatusContentypeController {
  constructor(
    private readonly statusContentypeService: StatusContentypeService,
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiBearerAuth('defaultBearerAuth')
  create(@Body() createStatusContentypeDto: CreateStatusContentypeDto) {
    return this.statusContentypeService.create(createStatusContentypeDto);
  }

  @Get()
  findAll() {
    return this.statusContentypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusContentypeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStatusContentypeDto: UpdateStatusContentypeDto,
  ) {
    return this.statusContentypeService.update(+id, updateStatusContentypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusContentypeService.remove(+id);
  }
}
