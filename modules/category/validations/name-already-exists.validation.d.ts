import type { ValidatorConstraintInterface } from 'class-validator';
import { CategoryService } from '../category.service';
export declare class NameAlreadyExists implements ValidatorConstraintInterface {
    private categoryService;
    constructor(categoryService: CategoryService);
    validate(name: string): Promise<boolean>;
    defaultMessage(): string;
}
