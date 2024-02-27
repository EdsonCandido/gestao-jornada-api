import { Router } from "express";
import { UserController } from "../controllers/UserControllers";

const userRoutes = Router();

const userController = new UserController();
userRoutes.post('/session', userController.login);

userRoutes.get('/users/', userController.findAll);
userRoutes.post('/users/', userController.create);
// userRoutes.put('/users/update', userController.update);   

export default userRoutes;