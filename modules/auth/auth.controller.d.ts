import { ApiResponse } from '@common';
import { SignIn, SignUp } from './dto';
import { AccessToken } from './interfaces';
import { AuthService } from './services';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(credentials: SignUp): Promise<void>;
    signIn(credentials: SignIn): Promise<ApiResponse<AccessToken>>;
    refresh(refresh: string): Promise<ApiResponse<AccessToken>>;
}
