import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import UserController from "./app/controllers/UserController";
import InstitutionController from "./app/controllers/InstitutionController";
import SessionController from "./app/controllers/SessionController";
import FileController from "./app/controllers/FileController";
import PetController from "./app/controllers/PetController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();
const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.get("/institutions", InstitutionController.index);

routes.use(authMiddleware);

routes.put("/users", UserController.update);

routes.post("/files", upload.single("file"), FileController.store);
routes.post("/pets", PetController.store);

export default routes;
