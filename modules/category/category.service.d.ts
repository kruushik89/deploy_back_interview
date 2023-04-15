import { Model, Types } from 'mongoose';
import { ObjectMap } from '@common';
import { CreateCategory, UpdateCategory } from './dto';
import { Category, CategoryDocument } from './schemas';
export declare class CategoryService {
    private categoryModel;
    constructor(categoryModel: Model<CategoryDocument>);
    create(category: CreateCategory): Promise<CategoryDocument>;
    update(_id: Types.ObjectId, valuesToUpdate: UpdateCategory): Promise<void>;
    findAll(): Promise<Category[]>;
    findOneById(id: Types.ObjectId): Promise<CategoryDocument | null>;
    exists(filter: ObjectMap): Promise<boolean>;
    remove(filter: ObjectMap): Promise<void>;
}
