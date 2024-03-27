import { Test, TestingModule } from '@nestjs/testing';
import { AdminLibroController } from './admin-libro.controller';

describe('AdminLibroController', () => {
  let controller: AdminLibroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminLibroController],
    }).compile();

    controller = module.get<AdminLibroController>(AdminLibroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
