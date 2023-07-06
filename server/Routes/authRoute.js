import express from 'express';
import { checkoutController, paymentVerificationController } from '../Controllers/paymentController.js';
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
  saveUserAddressController,
  userCartController,
  getACartController,
  emptyCartController,
  applyCouponController,
  createOrderController,
  updateOrderStatusController,
  deleteProductFromCartController,
  updateQuantityFromCartController,
  getMyOrdersController,
} from "../Controllers/userController.js";
import { getWishListController } from '../Controllers/wishlistController.js';
import {
  authMiddleware,
  isAdminMiddleware,
} from "../Middlewares/authMiddleWare.js";

const authRouter = express.Router();
authRouter.post("/register-user", createUserController);
authRouter.post("/login-user",loginUserController);
authRouter.post("/admin-login",loginAdminController);
authRouter.get("/all-users",authMiddleware,isAdminMiddleware,getAllUsersController);
authRouter.get("/refresh-token",getRefreshTokenController);
authRouter.put("/update-user-profile", authMiddleware, updateAUserController);
authRouter.get("/logout", logoutUserController);
authRouter.put('/change-password',authMiddleware, changePasswordController);
authRouter.post('/forgot-password-token',getForgotPasswordTokenController);
authRouter.put('/reset-password/:token',resetPasswordController);
authRouter.get("/:id", authMiddleware , isAdminMiddleware ,getAUserController);
authRouter.delete("/:id",deleteAUserController);


authRouter.put("/block-user/:id", authMiddleware, isAdminMiddleware, blockAUserController);

authRouter.put("/unblock-user/:id", authMiddleware, isAdminMiddleware, unblockAUserController);

authRouter.put("/save-address",authMiddleware , saveUserAddressController);



authRouter.delete("/cart/empty",authMiddleware, emptyCartController);

authRouter.post("/cart/apply-coupon",authMiddleware , applyCouponController);



authRouter.put("/cart/update-order/:id",authMiddleware ,isAdminMiddleware, updateOrderStatusController);

//Wishlist Rotes
authRouter.get("/wishlist/get", authMiddleware, getWishListController);

authRouter.post("/cart/create", authMiddleware, userCartController);
authRouter.delete("/cart/create", authMiddleware, emptyCartController);
authRouter.get("/cart/get", authMiddleware, getACartController);
authRouter.delete(
  "/cart/delete-product/:cartProductId",
  authMiddleware,
  deleteProductFromCartController
);
authRouter.put("/cart/update-cart/:cartProductId/:quantityFromCart",authMiddleware,updateQuantityFromCartController);

//Order Routes
authRouter.post("/cart/create-order", authMiddleware, createOrderController);

//Payment Routes

authRouter.post("/order/payment-verification",authMiddleware,paymentVerificationController);
authRouter.post("/order/checkout", authMiddleware, checkoutController);
authRouter.get("/order/get-my-orders",authMiddleware,getMyOrdersController)


export default authRouter;