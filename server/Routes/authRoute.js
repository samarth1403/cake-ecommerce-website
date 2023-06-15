import express from 'express';
import {
  createUserController,
  deleteAUserController,
  getAllUsersController,
  getAUserController,
  loginUserController,
  updateAUserController,
  blockAUserController,
  unblockAUserController,
  getRefreshTokenController,
  logoutUserController,
  changePasswordController,
} from "../Controllers/userController.js";
import {
  authMiddleware,
  isAdminMiddleware,
} from "../Middlewares/authMiddleWare.js";

const authRouter = express.Router();

authRouter.post("/register", createUserController);
authRouter.post("/login",loginUserController);
authRouter.get("/all-users",getAllUsersController);
authRouter.get("/refresh-token",getRefreshTokenController);
authRouter.get("/logout", logoutUserController);
authRouter.put('/change-password',authMiddleware, changePasswordController)
authRouter.get("/:id", authMiddleware , isAdminMiddleware ,getAUserController);
authRouter.delete("/:id",deleteAUserController);
authRouter.put("/edit-user",authMiddleware,updateAUserController);
authRouter.put("/block-user/:id", authMiddleware, isAdminMiddleware, blockAUserController);
authRouter.put("/unblock-user/:id", authMiddleware, isAdminMiddleware, unblockAUserController);

export default authRouter;