import userModel from "../Models/userModel.js";
//Get a wishlist
export const getWishListController = async (req, res) => {
  const { _id } = req.user;
  try {
    const foundUser = await userModel.findById(_id).populate("wishList");
    res.json({ gotWishlistOfUser: foundUser , res : {message : "WishList Got Successfully", success : true}});
  } catch (error) {
    res.json({ res: { message: error, success: false } });
  }
};

//Add to WishList
export const addToWishListController = async (req, res) => {
  
  const { _id } = req.user;
  const { prodId } = req.body;
  console.log(req.user);
  console.log(prodId);
  try {
    const user = await userModel.findById(_id);
    const alreadyAdded = user.wishList.find((id) => id.toString() === prodId);
    if (alreadyAdded) {
      // let updatedUser = await userModel.findById(_id);
      let updatedUser = await userModel.findByIdAndUpdate(
        _id,
        {
          $pull: { wishList: prodId },
        },
        { new: true }
      );
       res.json({ updatedUser,
         res: { message: "Product is Removed from Wishlist", success: true },
       });
    } else {
      let updatedUser = await userModel.findByIdAndUpdate(
        _id,
        {
          $push: { wishList: prodId },
        },
        { new: true }
      );
      res.json({updatedUser , res : {message:"Product Added to Wishlist",success : true}});
    }
  } catch (error) {
    res.json({res:{message:error, success : false}})
  }
};
