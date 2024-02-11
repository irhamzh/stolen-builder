import { PartialType } from '@nestjs/mapped-types';
import { CreateSkillTreeDto } from './create-skill-tree.dto';

export class UpdateSkillTreeDto extends PartialType(CreateSkillTreeDto) {}
