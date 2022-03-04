import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
/* A função Hash (Resumo) é qualquer algoritmo que mapeie dados grandes e de tamanho variável para 
pequenos dados de tamanho fixo. Por esse motivo, as funções Hash são conhecidas por resumirem o dado.  */
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {
  async execute({ name, email, admin=false, password }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    //console.log("Email", email);
    // verifica se email esta preenchido corretamente
    if (!email) {
      throw new Error("Email incorrect");
    }

    // verifica de o email existe - deve ser único
    const userAlreadyExists = await usersRepository.findOne({
      email,
    });
    if (userAlreadyExists) {
      throw new Error("User already exists");
    }
    // cria uma instancia com o objeto do user

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    });
    // salva no db o objeto
    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
