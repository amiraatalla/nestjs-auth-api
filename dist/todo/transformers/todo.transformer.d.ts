import { BaseTransformer } from "src/transformer.base";
export declare class TodoTransformer extends BaseTransformer {
    static singleTransform(element: any): {
        id: any;
        title: any;
        description: any;
        timestamp: any;
    };
}
