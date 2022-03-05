import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const listUserSendComplimentsController =  new ListUserSendComplimentsController();
const listUserReceiveComplimentsController =  new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUsersController = new ListUsersController();

// POST - USERS
router.post("/users", createUserController.handle);
// GET - users
router.get("/users", ensureAuthenticated, listUsersController.handle);

// POST - TAGS
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
// GET - Tags
router.get("/tags", ensureAuthenticated, listTagsController.handle);

// POST - LOGIN
router.post("/login", authenticateUserController.handle);

// POST - Elogios
router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);

// GET Listar Envio de Elogios
router.get(
  "/users/compliments/send",
  ensureAuthenticated,
  listUserSendComplimentsController.handle
);
// GET Listar Recebimento de Elogios
router.get(
  "/users/compliments/receive",
  ensureAuthenticated,
  listUserReceiveComplimentsController.handle
);

export { router };
