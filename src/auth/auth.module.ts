import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './strategy/local.strategy';

@Module({
  imports: [PrismaModule, UsersModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {
}
