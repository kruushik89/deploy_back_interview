import { PipeTransform } from '@nestjs/common';
import { Types } from 'mongoose';
import { QuestionService } from '../question.service';
export declare class IsQuestionExists implements PipeTransform {
    private questionService;
    constructor(questionService: QuestionService);
    transform(_id: Types.ObjectId): Promise<Types.ObjectId>;
}
