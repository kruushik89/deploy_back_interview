export declare class HashService {
    private readonly saltOrRounds;
    hashPassword(password: string): Promise<string>;
    comparePassword(password: string, hash: string): Promise<boolean>;
}
