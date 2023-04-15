import { PipeTransform } from '@nestjs/common';
import { Types } from 'mongoose';
import { CategoryService } from '../category.service';
export declare class IsCategoryExists implements PipeTransform {
    private categoryService;
    constructor(categoryService: CategoryService);
    transform(_id: Types.ObjectId): Promise<Types.ObjectId>;
}
