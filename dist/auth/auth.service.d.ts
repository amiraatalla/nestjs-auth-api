import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { userDto } from 'src/dtos/user.dto';
import { RegisterDto } from 'src/dtos/register.dto';
import { LoginDto } from 'src/dtos/auth.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    getUserInfo(email: string): Promise<userDto>;
    login(user: LoginDto): Promise<{
        access_token: string;
    }>;
    register(data: RegisterDto): Promise<userDto>;
}
