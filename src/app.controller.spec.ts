import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('hbs', () => {
    it('should contains hello world message', () => {
      const root = appController.root();
      expect(root.message).not.toContain('Hello world from template');
    });
  });

  describe('bookings', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getBookings()).toStrictEqual([1,2,3]);
    });
  });
});
