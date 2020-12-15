import { Controller, Request, Get, Post, Render, UseGuards } from '@nestjs/common';
import { UserCreateArgs } from '@prisma/client';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { LocalAuthGuard } from './auth/guard/local-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    protected readonly prisma: PrismaService,
  ) {
  }

  @Get('bookings')
  getBookings(): number[] {
    return this.appService.getBookings();
  }

  @Get('prisma')
  createUser() {
    const user: UserCreateArgs = {
      data: {
        name: 'toto',
        email: 'totdo@lol.com',
      },
    };
    return this.prisma.user.create(user);
  }

  @Get('users')
  getUsers() {
    return this.prisma.user.findMany();
  }

  @Get()
  @Render('index')
  root(): { message: string } {
    return { message: 'Hello world from template' };
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}
