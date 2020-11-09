import { Inject, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(@Inject('COMMENT_REPOSITORY') private commentRepository: Repository<Comment>) {
  }

  create(createCommentDto: CreateCommentDto) {

    this.commentRepository.create(createCommentDto);
    const comment = new Comment();
    comment.text = createCommentDto.text;
    return this.commentRepository.save<Comment>(comment);
  }

  findAll() {
    return this.commentRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
