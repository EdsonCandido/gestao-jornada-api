import { Router } from "express";
import userRoutes from "./user.routes";
import JourneyPointsRoutes from "./JourneyPoint.routes";

const routes = Router();

routes.use(userRoutes);
routes.use(JourneyPointsRoutes);

export default routes;