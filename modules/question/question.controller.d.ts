import { Types } from 'mongoose';
import { ApiResponse } from '@common';
import { CreateQuestion, QuestionQuery, QuestionWithoutAttributesQuery, UpdateQuestion } from './dto';
import { QuestionService } from './question.service';
import { Question } from './schemas';
export declare class QuestionController {
    private questionService;
    constructor(questionService: QuestionService);
    create(question: CreateQuestion): Promise<ApiResponse<Question>>;
    findAll(query: QuestionQuery): Promise<ApiResponse<Question[]>>;
    preview(query: QuestionWithoutAttributesQuery): Promise<ApiResponse<Question[]>>;
    findById(id: Types.ObjectId): Promise<ApiResponse<Question>>;
    update(id: Types.ObjectId, question: UpdateQuestion): Promise<void>;
    remove(_id: Types.ObjectId): Promise<void>;
}
