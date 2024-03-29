import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { env } from "../env";

interface ITokenPayload {
    iat: number;
    exp: number;
    sub: string;
    id: number
    login: string,
    name: string,
    is_admin: number;
}

export default function IsAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
): void {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) throw new Error("JWT token is missing");

        const [, jwt] = authHeader.split(" ");

        const decoded = verify(jwt, env.JWT_PASSWORD);

        const { id, is_admin, name, login } = decoded as ITokenPayload;

        req.user = {
            id, is_admin, name, login,
        }

        return next();
    } catch (error) {
        // throw new Error("Invalid JWT token");
        res.status(401).json({ message: "Unauthorized" });
    }
}