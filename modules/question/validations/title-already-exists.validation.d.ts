import type { ValidatorConstraintInterface } from 'class-validator';
import { QuestionService } from '../question.service';
export declare class TitleAlreadyExists implements ValidatorConstraintInterface {
    private questionService;
    constructor(questionService: QuestionService);
    validate(title: string): Promise<boolean>;
    defaultMessage(): string;
}
