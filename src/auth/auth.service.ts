import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from '../users/users.service';
import { compare } from './helpers/password';
import { PasswordMatchException } from './exceptions/PasswordMatchException';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {
  }

  async validateUser(
    email: string,
    pass: string,
  ): Promise<Omit<User, 'password'>> {
    const user = await this.usersService.findByEmail(email);

    if (user == null) {
      throw new NotFoundException(`User ${email} not found.`);
    }

    const isValid = await compare(pass, user.password);
    // pass == user.password; //  compare({ plainPassword: pass, hashPassword: user.password });
    if (isValid) {
      const { password, ...result } = user;
      return result;
    } else {
      throw new PasswordMatchException();
    }
    return null;
  }
}
