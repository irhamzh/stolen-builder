import { Injectable } from '@nestjs/common';
import { CreateSkillTreeDto } from './dto/create-skill-tree.dto';
import { UpdateSkillTreeDto } from './dto/update-skill-tree.dto';

@Injectable()
export class SkillTreeService {
	create(createSkillTreeDto: CreateSkillTreeDto) {
		return 'This action adds a new skillTree';
	}

	findAll() {
		return `This action returns all skillTree`;
	}

	findOne(id: number) {
		return `This action returns a #${id} skillTree`;
	}

	update(id: number, updateSkillTreeDto: UpdateSkillTreeDto) {
		return `This action updates a #${id} skillTree`;
	}

	remove(id: number) {
		return `This action removes a #${id} skillTree`;
	}
}
