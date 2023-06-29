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
  getForgotPasswordTokenController,
  resetPasswordController,
  loginAdminController,
  getWishListController,
  saveUserAddressController,
  userCartController,
  getACartController,
  emptyCartController,
  applyCouponController,
  createOrderController,
  getOrdersController,
  updateOrderStatusController,
} from "../Controllers/userController.js";
import {
  authMiddleware,
  isAdminMiddleware,
} from "../Middlewares/authMiddleWare.js";

const authRouter = express.Router();
authRouter.get("/cart/get-order", authMiddleware, getOrdersController);
authRouter.post("/register-user", createUserController);
authRouter.post("/login-user",loginUserController);
authRouter.post("/admin-login",loginAdminController);
authRouter.get("/all-users",getAllUsersController);
authRouter.get("/refresh-token",getRefreshTokenController);
authRouter.get("/wishList", authMiddleware, getWishListController);
authRouter.get("/logout", logoutUserController);
authRouter.put('/change-password',authMiddleware, changePasswordController);
authRouter.post('/forgot-password-token',getForgotPasswordTokenController);
authRouter.put('/reset-password/:token',resetPasswordController);
authRouter.get("/:id", authMiddleware , isAdminMiddleware ,getAUserController);
authRouter.delete("/:id",deleteAUserController);
authRouter.put("/edit-user",authMiddleware,updateAUserController);

authRouter.put("/block-user/:id", authMiddleware, isAdminMiddleware, blockAUserController);

authRouter.put("/unblock-user/:id", authMiddleware, isAdminMiddleware, unblockAUserController);

authRouter.get("/wishList", authMiddleware, getWishListController);
export default authRouter;

authRouter.put("/save-address",authMiddleware , saveUserAddressController);

authRouter.post("/cart/create",authMiddleware,userCartController);
authRouter.get("/cart/get",authMiddleware, getACartController);
authRouter.delete("/cart/empty",authMiddleware, emptyCartController);

authRouter.post("/cart/apply-coupon",authMiddleware , applyCouponController);

authRouter.post("/cart/create-order",authMiddleware , createOrderController);

authRouter.put("/cart/update-order/:id",authMiddleware ,isAdminMiddleware, updateOrderStatusController);