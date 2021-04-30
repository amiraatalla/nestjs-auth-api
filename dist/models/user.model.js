"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    bio: {
        type: String
    },
    image: {
        type: String
    }
});
class User extends mongoose.Document {
}
exports.User = User;
//# sourceMappingURL=user.model.js.map