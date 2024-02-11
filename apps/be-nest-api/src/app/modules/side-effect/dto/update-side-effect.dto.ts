import { PartialType } from '@nestjs/mapped-types';
import { CreateSideEffectDto } from './create-side-effect.dto';

export class UpdateSideEffectDto extends PartialType(CreateSideEffectDto) {}
