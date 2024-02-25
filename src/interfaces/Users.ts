export type User = {
    id: number;
    name: string;
    is_admin: number;
    login: string;
    password?: string;
    work_regime: number;
    created_at?: Date;
    updated_at?: Date;
};