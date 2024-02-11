import { Module } from '@nestjs/common';
import { SkillTreeService } from './skill-tree.service';
import { SkillTreeController } from './skill-tree.controller';

@Module({
	controllers: [SkillTreeController],
	providers: [SkillTreeService]
})
export class SkillTreeModule {}
