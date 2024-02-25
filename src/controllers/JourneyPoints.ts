import { Request, Response } from "express";
import JourneyPointsService from "../services/JourneyPoints/JourneyPointsService";

export class JourneyPointsController {
    public async create() {}
    public async findByUser(req: Request, res: Response) {
        try {
            const { user_id } = req.params;
            const service = new JourneyPointsService();
            const result = await service.handler(Number(user_id));
            return res.status(200).json({ data: result, message: 'Ponto de jornada encontrado com sucesso!' });
        } catch (error) {
            return res.status(400).json({
                data: null, message: 'Erro ao buscar os pontos de jornada',
                stack: error, err: (error as Error).message
            });
        }
    }
}