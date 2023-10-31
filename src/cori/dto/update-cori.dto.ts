import { PartialType } from '@nestjs/mapped-types';
import { CreateCoriDto } from './create-cori.dto';

export class UpdateCoriDto extends PartialType(CreateCoriDto) {}
