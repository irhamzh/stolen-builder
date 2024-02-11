import { PartialType } from '@nestjs/mapped-types';
import { CreateFortuneDto } from './create-fortune.dto';

export class UpdateFortuneDto extends PartialType(CreateFortuneDto) {}
