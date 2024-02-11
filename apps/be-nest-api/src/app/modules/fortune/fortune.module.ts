import { Module } from '@nestjs/common';
import { FortuneService } from './fortune.service';
import { FortuneController } from './fortune.controller';

@Module({
	controllers: [FortuneController],
	providers: [FortuneService]
})
export class FortuneModule {}
