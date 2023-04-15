import { HashService, JwtService } from "@common";
import { UserService } from "../../user";
import { SignIn, SignUp } from "../dto";
import { AccessToken, AuthorizationTokens } from "../interfaces";
export declare class AuthService {
    private userService;
    private hashService;
    private jwtService;
    constructor(userService: UserService, hashService: HashService, jwtService: JwtService);
    signUp({ email, password }: SignUp): Promise<void>;
    signIn({ email, password }: SignIn): Promise<AuthorizationTokens>;
    refresh(token: string): Promise<AccessToken>;
}
