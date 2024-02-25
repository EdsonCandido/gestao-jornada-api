import { Request, Response } from "express";
import { LoginService } from "../services/Users/LoginService";
import CreateUserService from "../services/Users/CreateUserService";

export class UserController {
    public async login(req: Request, res: Response) {
        try {
            const { login, password } = req.body;

            const service = new LoginService();

            const result = await service.handler(login, password);

            return res.status(200).json({ data: result, message: 'Login realizado com sucesso!' });
        } catch (error) {
            return res.status(400).json({
                data: null, message: 'Usuário ou senha incorretos',
                stack: error, err: (error as Error).message
            });
        }
    }
    public async create(req: Request, res: Response) {
        try {
            const { name, login, password, work_regime, is_admin } = req.body;
            const service = new CreateUserService();
            const result = await service.handler({ name, login, password, work_regime: Number(work_regime), is_admin: Number(is_admin) });
            return res.status(200).json({ data: result, message: 'Usuário criado com sucesso!' });
        } catch (error) {
            return res.status(400).json({
                data: null, message: 'Erro ao criar o usuário',
                stack: error, err: (error as Error).message
            });
        }
    }
    public async update(req: Request, res: Response) {

    }
} 