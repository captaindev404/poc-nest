import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  log(message: string) {
    /* your implementation */
    console.log(message)
  }

  error(message: string, trace: string) {
    /* your implementation */
  }

  warn(message: string) {
    /* your implementation */
  }

  debug(message: string) {
    /* your implementation */
  }

  verbose(message: string) {
    /* your implementation */
  }
}
