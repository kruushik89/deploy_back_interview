import { Types } from 'mongoose';
import { DevelopmentDirection, LevelOfPreparation } from '@common';
export declare class UpdateQuestion {
    title: string;
    body: string;
    categories: Types.ObjectId[];
    levelOfPreparation: LevelOfPreparation[];
    developmentDirection: DevelopmentDirection[];
}
