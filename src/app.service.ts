import { Injectable } from '@nestjs/common';

interface AppServiceInterface {
  getBookings(): number[];
}

@Injectable()
export class AppService implements AppServiceInterface {
  getBookings(): number[] {
    return [1, 2, 3];
  }
}
