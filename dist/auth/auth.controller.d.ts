import { LoginDto } from 'src/dtos/auth.dto';
import { RegisterDto } from 'src/dtos/register.dto';
import { userDto } from 'src/dtos/user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(data: RegisterDto): Promise<userDto>;
    login(creds: LoginDto): Promise<{
        access_token: string;
    }>;
    test(req: any): string;
}
