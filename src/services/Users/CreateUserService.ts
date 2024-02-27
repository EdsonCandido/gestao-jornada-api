import { Knex } from "knex";
import { connPG } from "../../config/database";
import { User } from "../../interfaces/Users";
import { hash } from "bcryptjs";

class CreateUserService{
    private repository: Knex<any, unknown[]>;

    constructor(){
        this.repository = connPG;
    }
    /**
     * Handles the input to create a new user, then returns the new user.
     *
     * @param {Omit<User, 'id'>} name - The name of the user
     * @param {Omit<User, 'id'>} login - The login of the user
     * @param {Omit<User, 'id'>} password - The password of the user
     * @param {Omit<User, 'id'>} work_regime - The work regime of the user
     * @param {Omit<User, 'id'>} is_admin - Whether the user is an admin or not
     * @return {Promise<Omit<User, 'password'>>} The new user without the password
     */
    public async handler({name, login, password, work_regime, is_admin }: Omit<User, 'id'>): Promise<Omit<User, 'password'>>{
        const created_at = new Date();
        const updated_at = created_at;
        const hashPassword = await hash(password, 8)
        const user:any[] | User[] = await this.repository('users')
        .insert({name, login, password: hashPassword, work_regime, is_admin,
             created_at, updated_at}).returning('*');

             if(user.length < 1) throw new Error("Erro ao criar o usuário");
             
             delete user[0].password
        return user[0];
        
    }
    
}

export default CreateUserService;