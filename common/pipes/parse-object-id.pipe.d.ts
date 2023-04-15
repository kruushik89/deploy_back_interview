import { PipeTransform } from '@nestjs/common';
import { Types } from 'mongoose';
export declare class ParseObjectId implements PipeTransform {
    transform(id: string): Types.ObjectId;
}
