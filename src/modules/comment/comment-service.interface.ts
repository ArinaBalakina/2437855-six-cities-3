import { DocumentType } from '@typegoose/typegoose';
import { CreateCommentDto } from './dto/createComment.dto.js';
import { CommentEntity } from './comment.entity.js';
import { Types } from 'mongoose';


export interface CommentService {
  create(dto: CreateCommentDto): Promise<DocumentType<CommentEntity>>;
  findByOfferId(offerId: Types.ObjectId): Promise<DocumentType<CommentEntity>[]>;
  deleteByOfferId(offerId: Types.ObjectId): Promise<number | null>;
}
