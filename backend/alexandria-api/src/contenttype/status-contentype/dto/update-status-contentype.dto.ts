import { PartialType } from '@nestjs/mapped-types';
import { CreateStatusContentypeDto } from './create-status-contentype.dto';

export class UpdateStatusContentypeDto extends PartialType(
  CreateStatusContentypeDto,
) {}
