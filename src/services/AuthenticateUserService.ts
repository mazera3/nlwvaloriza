import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    // Verificar se email existe
    const user = await usersRepositories.findOne({
      email,
    });

    if (!user) {
      throw new Error("Email/Password incorrect");
    }

    // verificar se senha está correta

    // 123456 / $2a$08$aZMGCjoFEOTU7QlFLIrvR.dVaGlzo828va9xKKsZVEHkt0l/Z9IY.
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    // Gerar token
    const token = sign(
      {
        email: user.email,
      },
      "d665ce14ecc982fd0529a7ce3027ac78",
      {
        subject: user.id, // id do usuario
        expiresIn: "1d", // tempo de expiração de 1 dia.
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
