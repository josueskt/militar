import { Test, TestingModule } from '@nestjs/testing';
import { EstanteController } from './estante.controller';

describe('EstanteController', () => {
  let controller: EstanteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstanteController],
    }).compile();

    controller = module.get<EstanteController>(EstanteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
