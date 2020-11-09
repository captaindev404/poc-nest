import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { DatabaseModule } from '../database/database.module';
import { postProviders } from './post.providers';
import { PostController } from './post.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...postProviders, PostService],
  controllers: [PostController],
})
export class PostModule {
}
