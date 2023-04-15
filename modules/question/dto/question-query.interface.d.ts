import { Types } from 'mongoose';
import { DevelopmentDirection, LevelOfPreparation } from '@common';
export declare class QuestionWithoutAttributesQuery {
    limit: number;
    offset: number;
    title?: string;
    categories?: Types.ObjectId[];
    levelOfPreparation?: LevelOfPreparation[];
    developmentDirection?: DevelopmentDirection[];
}
export declare class QuestionQuery extends QuestionWithoutAttributesQuery {
    attributes?: string[];
}
