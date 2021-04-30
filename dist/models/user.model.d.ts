import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<mongoose.Document<any, {}>, mongoose.Model<any, any>, undefined>;
export declare class User extends mongoose.Document {
    email: string;
    username: string;
    bio: string;
    image: string;
    password: string;
}
