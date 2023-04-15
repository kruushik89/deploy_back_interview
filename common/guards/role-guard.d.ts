import { CanActivate, Type } from '@nestjs/common';
import { UserRole } from '../enums';
export declare const RoleGuard: (role: UserRole) => Type<CanActivate>;
