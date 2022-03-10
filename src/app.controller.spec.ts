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

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
  
  describe('FizzBuzz', () => {
    it('should return FizzBuzz Array of length 10 when count 10', () => {
      expect(appController.getFizzBuzz({count: 10}).length).toBe(10);
    });
    
    it('should return FizzBuzz Array of length 0 when count 0', () => {
      expect(appController.getFizzBuzz({count: 0}).length).toBe(0);
    });
    
    it('should return Fizz at 3', () => {
      const arr = appController.getFizzBuzz({count: 20});
      expect(arr[2]).toBe('Fizz');
    });
    
    it('should return FizzBuzz at 5', () => {
      const arr = appController.getFizzBuzz({count: 20});
      expect(arr[4]).toBe('Buzz');
    });
    
    it('should return FizzBuzz at 15', () => {
      const arr = appController.getFizzBuzz({count: 20});
      expect(arr[14]).toBe('FizzBuzz');
    });
    
  });
});
