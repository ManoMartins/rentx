import { Router } from "express";
import multer from "multer";

import upload from "../config/upload";
import { ensureAuthentication } from "../middlewares/ensureAuthenticated";
import CreateUserController from "../modules/accounts/useCases/createUser/CreateUserController";
import UpdateUserAvatarController from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

const uploadAvatar = multer(upload.upload("./tmp/avatar"));

const usersRouter = Router();
const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRouter.post("/", createUserController.handle);

usersRouter.patch(
  "/avatar",
  ensureAuthentication,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

export default usersRouter;
