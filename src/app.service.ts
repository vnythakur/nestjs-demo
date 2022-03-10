import { Injectable } from '@nestjs/common';
import { HomeHTML } from '../mock/home.mock';

@Injectable()
export class AppService {
  getHello(): string {
    return HomeHTML;
  }

  getFizzBuzz(count: number) {
    const arr = [];

    for (let i = 1; i <= count; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        arr.push('FizzBuzz');
      } else if (i % 3 == 0) {
        arr.push('Fizz');
      } else if (i % 5 == 0) {
        arr.push('Buzz');
      } else {
        arr.push(i);
      }
    }
    return arr;
  }
}
