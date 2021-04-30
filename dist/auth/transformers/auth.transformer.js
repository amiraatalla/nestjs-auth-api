"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthTransformer = void 0;
const transformer_base_1 = require("../../transformer.base");
class AuthTransformer extends transformer_base_1.BaseTransformer {
    static singleTransform(element) {
        return {
            id: element.id,
            name: element.name,
            email: element.email
        };
    }
}
exports.AuthTransformer = AuthTransformer;
//# sourceMappingURL=auth.transformer.js.map