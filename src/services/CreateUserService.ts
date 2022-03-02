import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    console.log("Email", email);
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
    const user = usersRepository.create({
      name,
      email,
      admin,
    });
    // salva no db o objeto
    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
