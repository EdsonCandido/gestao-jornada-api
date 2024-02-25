import { Knex } from "knex";
import { connPG } from "../../config/database";

export class LoginService {
    private repository: Knex<any, unknown[]>;

    constructor(){
        this.repository = connPG;
    }

    /**
     * Perform a login operation using the provided email and password.
     *
     * @param {string} email - the email of the user
     * @param {string} password - the password of the user
     * @return {Promise<User>} the user User if login is successful
     */
    public async handler(email: string, password: string): Promise<User> {
        const user: User = await this.repository('users')
        .select('id', 'name', 'is_admin','login','work_regime','created_at', 'updated_at')
        .where('email', email).andWhere('password', password).first();
        return user;
    }
}