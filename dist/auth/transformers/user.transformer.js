"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTransformer = void 0;
const transformer_base_1 = require("../../transformer.base");
class UserTransformer extends transformer_base_1.BaseTransformer {
    static singleTransform(element) {
        return {
            id: element.id,
            name: element.name,
            email: element.email
        };
    }
}
exports.UserTransformer = UserTransformer;
//# sourceMappingURL=user.transformer.js.map