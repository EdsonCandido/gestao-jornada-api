import { Router } from "express";
import { UserController } from "../controllers/UserControllers";

const userRoutes = Router();

const userController = new UserController();
userRoutes.post('/session', userController.login);
userRoutes.post('/users/create', userController.create);
// userRoutes.put('/users/update', userController.update);   

export default userRoutes;