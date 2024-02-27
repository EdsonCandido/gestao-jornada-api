import { Knex } from "knex";
import { connPG } from "../../config/database";
import { User } from "../../interfaces/Users";
import { compare } from "bcryptjs";

export class LoginService {
    private repository: Knex<any, unknown[]>;

    constructor(){
        this.repository = connPG;
    }

    /**
     * Perform a login operation using the provided email and password.
     *
     * @param {string} login - the email of the user
     * @param {string} password - the password of the user
     * @return {Promise<User>} the user User if login is successful
     */
    public async handler(login: string, password: string): Promise<User> {
        const user: User = await this.repository('users')
        .select('id', 'name', 'is_admin','login','work_regime','password','created_at', 'updated_at')
        .where('login', login).first();

        if(!user) throw new Error("Usuário não encontrado");
        
        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) throw new Error("Usuário ou senha incorreta");

        return user;
    }
}