import { BadRequestException, HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

export class PasswordMatchException extends HttpException {
  constructor() {
    super('Password does not match', HttpStatus.UNAUTHORIZED);
  }
}
