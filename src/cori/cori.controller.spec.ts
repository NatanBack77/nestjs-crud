import { Test, TestingModule } from '@nestjs/testing';
import { CoriController } from './cori.controller';
import { CoriService } from './cori.service';

describe('CoriController', () => {
  let controller: CoriController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoriController],
      providers: [CoriService],
    }).compile();

    controller = module.get<CoriController>(CoriController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
