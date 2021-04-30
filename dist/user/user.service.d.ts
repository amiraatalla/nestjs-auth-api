import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';
import { UserTransformer } from './transformers/user.transformer';
export declare class UserService {
    private UserModel;
    constructor(UserModel: Model<User>);
    create(createUserDto: CreateUserDto): Promise<UserTransformer>;
    findAll(): string;
    findOne(id: number): string;
    findOneByEmail(email: string): Promise<UserTransformer>;
    findOneByEmailObject(email: string): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
