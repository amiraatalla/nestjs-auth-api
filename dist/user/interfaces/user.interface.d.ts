import { Document } from 'mongoose';
export declare class User extends Document {
    readonly name: string;
    readonly email: String;
    password: string;
}
