import { Module } from '@nestjs/common';
import { SideEffectService } from './side-effect.service';
import { SideEffectController } from './side-effect.controller';

@Module({
	controllers: [SideEffectController],
	providers: [SideEffectService]
})
export class SideEffectModule {}
