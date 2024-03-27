import { Test, TestingModule } from '@nestjs/testing';
import { AdminLibroService } from './admin-libro.service';

describe('AdminLibroService', () => {
  let service: AdminLibroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminLibroService],
    }).compile();

    service = module.get<AdminLibroService>(AdminLibroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
