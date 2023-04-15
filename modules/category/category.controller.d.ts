import { Types } from 'mongoose';
import { ApiResponse } from '@common';
import { CategoryService } from './category.service';
import { CreateCategory, UpdateCategory } from './dto';
import { Category } from './schemas';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    create(category: CreateCategory): Promise<ApiResponse<Category>>;
    findAll(): Promise<ApiResponse<Category[]>>;
    update(id: Types.ObjectId, category: UpdateCategory): Promise<void>;
    remove(_id: Types.ObjectId): Promise<void>;
}
