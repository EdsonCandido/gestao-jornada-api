import { Router } from "express";
import { JourneyPointsController } from "../controllers/JourneyPoints";

const JourneyPointsRoutes = Router()
const journeyPointsController = new JourneyPointsController();

JourneyPointsRoutes.post('/', journeyPointsController.create);
JourneyPointsRoutes.get('/journey-points/:user_id', journeyPointsController.findByUser);

export default JourneyPointsRoutes;