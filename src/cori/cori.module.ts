import { Module } from '@nestjs/common';
import { CoriService } from './cori.service';
import { CoriController } from './cori.controller';

@Module({
  controllers: [CoriController],
  providers: [CoriService],
})
export class CoriModule {}
