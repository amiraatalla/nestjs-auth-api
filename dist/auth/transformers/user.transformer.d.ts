import { BaseTransformer } from "src/transformer.base";
export declare class UserTransformer extends BaseTransformer {
    static singleTransform(element: any): {
        id: any;
        name: any;
        email: any;
    };
}
