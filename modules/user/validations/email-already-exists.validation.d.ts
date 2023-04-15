import type { ValidatorConstraintInterface } from 'class-validator';
import { UserService } from '../user.service';
export declare class EmailAlreadyExists implements ValidatorConstraintInterface {
    private userService;
    constructor(userService: UserService);
    validate(email: string): Promise<boolean>;
    defaultMessage(): string;
}
