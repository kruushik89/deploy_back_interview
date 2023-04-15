import { Aggregate, Model, Types } from 'mongoose';
import { ObjectMap } from '@common';
import { CreateQuestion, QuestionQuery, UpdateQuestion } from './dto';
import { Question, QuestionDocument } from './schemas';
type AggregateWithTotal = {
    data: Question[];
    total: number;
};
export declare class QuestionService {
    private questionModel;
    constructor(questionModel: Model<QuestionDocument>);
    create(question: CreateQuestion): Promise<QuestionDocument>;
    update(_id: Types.ObjectId, valuesToUpdate: UpdateQuestion): Promise<void>;
    findAll(query: QuestionQuery): Promise<AggregateWithTotal>;
    findOneById(_id: Types.ObjectId): Promise<Aggregate<QuestionDocument | null>>;
    exists(filter: ObjectMap): Promise<boolean>;
    remove(filter: ObjectMap): Promise<void>;
}
export {};
