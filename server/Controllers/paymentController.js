import razorpay from "razorpay";

const instance = new razorpay({
  key_id: "rzp_test_o0FyMR0OMCy1aR",
  key_secret: "ENC7E47mAyfdClYAmyfx7mWF",
});

export const checkoutController = async(req , res) => {
    const {amount} = req.body
    const option = {
        amount : amount * 100,
        currency : "INR",
    }
    const order = await instance.orders.create(option)
    res.json({order, res : {message : "Successfully" , success : true}})
}

export const paymentVerificationController = async(req , res) => {
    const {razorpayOrderId , razorpayPaymentId} = req.body;
    res.json({razorpayOrderId,razorpayPaymentId,
    });
} 