import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete
} from '@nestjs/common';
import { SkillTreeService } from './skill-tree.service';
import { CreateSkillTreeDto } from './dto/create-skill-tree.dto';
import { UpdateSkillTreeDto } from './dto/update-skill-tree.dto';

@Controller({ version: '1', path: 'skill-tree' })
export class SkillTreeController {
	constructor(private readonly skillTreeService: SkillTreeService) {}

	@Post()
	create(@Body() createSkillTreeDto: CreateSkillTreeDto) {
		return this.skillTreeService.create(createSkillTreeDto);
	}

	@Get()
	findAll() {
		return this.skillTreeService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.skillTreeService.findOne(+id);
	}

	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updateSkillTreeDto: UpdateSkillTreeDto
	) {
		return this.skillTreeService.update(+id, updateSkillTreeDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.skillTreeService.remove(+id);
	}
}
