declare namespace Express {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    export interface Request {
        user: {
            id: number
            name: string,
            is_admin: number;
            login: string;
        };
    }
}