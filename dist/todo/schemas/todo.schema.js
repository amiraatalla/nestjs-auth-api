"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoSchema = void 0;
const mongoose = require("mongoose");
exports.TodoSchema = new mongoose.Schema({
    title: { type: String, index: true },
    description: { type: String, default: null },
    status: { type: String, default: 'TODO', index: true },
    timestamp: { type: Number, default: Date.now },
});
//# sourceMappingURL=todo.schema.js.map