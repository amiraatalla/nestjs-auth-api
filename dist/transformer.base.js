"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseTransformer = void 0;
class BaseTransformer {
    static transform(data) {
        const array = [];
        data.forEach((element) => {
            array.push(this.singleTransform(element));
        });
        return array;
    }
    static singleTransform(element) { }
}
exports.BaseTransformer = BaseTransformer;
//# sourceMappingURL=transformer.base.js.map