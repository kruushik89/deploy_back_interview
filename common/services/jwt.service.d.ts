import { ConfigService } from '@nestjs/config';
import { TokenPayload } from '../../modules';
import { TokenType } from '../enums';
export declare class JwtService {
    private configService;
    private readonly ACCESS_TOKEN_SECRET;
    private readonly REFRESH_TOKEN_SECRET;
    private readonly ACCESS_TOKEN_EXPIRATION;
    private readonly REFRESH_TOKEN_EXPIRATION;
    constructor(configService: ConfigService);
    generateToken(payload: TokenPayload, type: TokenType): string;
    validate(token: string, type: TokenType): TokenPayload;
    private generateIat;
    private getTokenExp;
    private getTokenSecret;
}
