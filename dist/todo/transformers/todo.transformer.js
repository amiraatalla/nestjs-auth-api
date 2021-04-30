"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoTransformer = void 0;
const transformer_base_1 = require("../../transformer.base");
class TodoTransformer extends transformer_base_1.BaseTransformer {
    static singleTransform(element) {
        var _a;
        return {
            id: element.id,
            title: element.title,
            description: (_a = element.description) !== null && _a !== void 0 ? _a : "",
            timestamp: element.timestamp
        };
    }
}
exports.TodoTransformer = TodoTransformer;
//# sourceMappingURL=todo.transformer.js.map