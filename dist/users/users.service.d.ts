import { Model } from 'mongoose';
import { RegisterDto } from 'src/dtos/register.dto';
import { User } from 'src/models/user.model';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    findOne(email: string): Promise<User | undefined>;
    insertUser(data: RegisterDto): Promise<User>;
}
