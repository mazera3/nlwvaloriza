import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();

// POST - USERS
router.post("/users", createUserController.handle);

export { router };