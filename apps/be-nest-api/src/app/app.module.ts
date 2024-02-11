import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './modules/item/item.module';
import { SkillTreeModule } from './modules/skill-tree/skill-tree.module';
import { FortuneModule } from './modules/fortune/fortune.module';
import { CharacterModule } from './modules/character/character.module';
import { SideEffectModule } from './modules/side-effect/side-effect.module';

@Module({
	imports: [
		ItemModule,
		SkillTreeModule,
		FortuneModule,
		CharacterModule,
		SideEffectModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
