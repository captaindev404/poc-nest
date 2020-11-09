import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { DatabaseModule } from '../database/database.module';
import { commentProviders } from './comment.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CommentController],
  providers: [...commentProviders, CommentService],
})

export class CommentModule {
}