import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete
} from '@nestjs/common';
import { FortuneService } from './fortune.service';
import { CreateFortuneDto } from './dto/create-fortune.dto';
import { UpdateFortuneDto } from './dto/update-fortune.dto';

@Controller('fortune')
export class FortuneController {
	constructor(private readonly fortuneService: FortuneService) {}

	@Post()
	create(@Body() createFortuneDto: CreateFortuneDto) {
		return this.fortuneService.create(createFortuneDto);
	}

	@Get()
	findAll() {
		return this.fortuneService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.fortuneService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateFortuneDto: UpdateFortuneDto) {
		return this.fortuneService.update(+id, updateFortuneDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.fortuneService.remove(+id);
	}
}
