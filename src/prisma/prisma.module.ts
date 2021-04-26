import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from './prisma.service';


@Module({
  imports: [PrismaClient],
  providers: [PrismaService],
})

export class PrismaModule {

}


