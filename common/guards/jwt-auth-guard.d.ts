import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '../services';
export declare class JwtAuthGuard implements CanActivate {
    private jwtService;
    constructor(jwtService: JwtService);
    canActivate(ctx: ExecutionContext): boolean;
}
