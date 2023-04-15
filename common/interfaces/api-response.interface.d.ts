import { ObjectMap } from './object-map.interface';
export declare class ApiResponse<T> {
    data: T;
    metadata?: ObjectMap;
}
