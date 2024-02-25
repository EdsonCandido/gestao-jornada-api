import { Knex } from "knex";
import { connPG } from "../../config/database";
import { JourneyPoints } from "../../interfaces/JourneyPoints";

class JourneyPointsService {
    private repository: Knex<any, unknown[]>
    constructor() {
        this.repository = connPG;
    }

    public async handler(user_id: number): Promise<JourneyPoints[]> {
        const journeyPoints = await this.repository('journey_points').select('*').where('user_id', user_id);
        return journeyPoints;
    }
}

export default JourneyPointsService;