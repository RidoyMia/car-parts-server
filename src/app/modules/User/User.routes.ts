import express from "express";
import { UserController } from "./User.controller";
const userRouter = express.Router();
userRouter.post('/create',UserController.createUserController);
userRouter.post('/signin',UserController.SignInUserController)
userRouter.get('/all',UserController.getAllUsersController);
userRouter.get('/:email',UserController.IsAdingController);
export default userRouter;