import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Receber o token
  const authToken = request.headers.authorization;
  //console.log(authToken);

  // Validar se token está preenchido
  if (!authToken) {
    //return response.status(401).json({message: "Token missing"});
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");
  //const token = authToken.split(" ");
  //console.log(token);
  try {
    // Validar se token é válido
    const { sub } = verify(
      //const decode = verify(
      token,
      "d665ce14ecc982fd0529a7ce3027ac78" // chave de AuthenticateUserService.ts
    ) as IPayload;
    
    // Recuperar informações do usuário
    request.user_id = sub;
    //console.log(decode);
    return next();
  } catch (err) {
    return response.status(401).end();
  }
}
