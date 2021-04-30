import { Document } from 'mongoose';
export declare class Auth extends Document {
    readonly name: string;
    readonly email: string;
    password: string;
}
