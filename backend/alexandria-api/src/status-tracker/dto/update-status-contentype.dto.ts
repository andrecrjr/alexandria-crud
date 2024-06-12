import { PartialType } from '@nestjs/mapped-types';
import { CreateStatusTrackDto } from './create-status-contentype.dto';

export class UpdateStatusTrackDto extends PartialType(CreateStatusTrackDto) {}
