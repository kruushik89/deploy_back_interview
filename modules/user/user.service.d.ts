import { Model } from 'mongoose';
import { ObjectMap } from '@common';
import { CreateUserDto } from './dto';
import { UserDocument } from './schemas';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(user: CreateUserDto): Promise<void>;
    findOneByEmail(email: string): Promise<UserDocument | null>;
    exists(filter: ObjectMap): Promise<boolean>;
}
