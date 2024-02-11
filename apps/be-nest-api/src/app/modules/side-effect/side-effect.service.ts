import { Injectable } from '@nestjs/common';
import { CreateSideEffectDto } from './dto/create-side-effect.dto';
import { UpdateSideEffectDto } from './dto/update-side-effect.dto';

@Injectable()
export class SideEffectService {
	create(createSideEffectDto: CreateSideEffectDto) {
		return 'This action adds a new sideEffect';
	}

	findAll() {
		return `This action returns all sideEffect`;
	}

	findOne(id: number) {
		return `This action returns a #${id} sideEffect`;
	}

	update(id: number, updateSideEffectDto: UpdateSideEffectDto) {
		return `This action updates a #${id} sideEffect`;
	}

	remove(id: number) {
		return `This action removes a #${id} sideEffect`;
	}
}
