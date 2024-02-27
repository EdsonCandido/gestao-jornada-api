import { Knex } from "knex";
import { connPG } from "../../config/database";

class FindAllUsersService{
    private repository: Knex<any, unknown[]>;
    constructor(){
        this.repository = connPG
    }

    public async handler(){
        const users = await this.repository('users').select('*');
        return users;
    }
}

export default FindAllUsersService;