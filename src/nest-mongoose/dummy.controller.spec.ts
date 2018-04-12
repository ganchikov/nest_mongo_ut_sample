import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import {getModelToken} from '@nestjs/mongoose';
import {Schema, Model} from 'mongoose';

import {Dummy} from './dummy.interface';
import {DummyModule} from './dummy.module';
import { DummyService} from './dummy.service';
import { DummyController } from './dummy.controller';

describe('DummyController', () => {

  let svc: DummyService;
  let ctrl: DummyController;

  const stubModel: Model<Dummy> = new Model({name: 'dummy'});

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      components: [DummyService,
        {provide: 'DummySchemaModel', useValue: stubModel},
      ],
      // imports: [{provide: 'DummySchemaModel', useValue: stubModel}],
      controllers: [DummyController],
    }).compile();
    ctrl = module.get<DummyController>(DummyController);
    svc = module.get<DummyService>(DummyService);
  });

  describe('test', () => {
    it('should pass', async () => {
      jest.spyOn(svc, 'findAll').mockImplementation(() => 'result');
      // expect(1).toBe(1);
      expect(await ctrl.findAll()).toBe('result');
    });
  });
});
