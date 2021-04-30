"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthSchema = void 0;
const mongoose = require("mongoose");
exports.AuthSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, index: true },
    password: { type: String },
});
//# sourceMappingURL=auth.schema.js.map