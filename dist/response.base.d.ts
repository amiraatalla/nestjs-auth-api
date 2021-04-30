import { Response } from '@nestjs/common';
export declare class AppResponse {
    static ok(res: any, values: any, message?: String): Response;
    static badRequest(res: any, values: any, message?: String): Response;
}
