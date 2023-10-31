import { Test, TestingModule } from '@nestjs/testing';
import { CoriService } from './cori.service';

describe('CoriService', () => {
  let service: CoriService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoriService],
    }).compile();

    service = module.get<CoriService>(CoriService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
