import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { AppService } from '../src/app.service';
import { mockFizzBuzz, mockFizzBuzzInvalidNumber } from '../mock/fizzbuzz.mock';
import { HomeHTML } from '../mock/home.mock';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let appService: AppService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [AppService],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    appService = app.get<AppService>(AppService);
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer()).get('/').expect(200).expect(HomeHTML);
  });

  it('/10 (GET)', () => {
    return request(app.getHttpServer())
      .get('/10')
      .expect(200)
      .expect(mockFizzBuzz);
  });

  it('/abcd (GET)', () => {
    return (
      request(app.getHttpServer())
        .get('/abcd')
        .expect(400)
        .expect(mockFizzBuzzInvalidNumber)
    );
  });
});
