
import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {},
  reducers: {
    onContactDetailsSubmit: (state, action) => {
      state.contactInfo = action.payload;
    },
    onShippingDetailsSubmit: (state, action) => {
      state.shippingInfo = action.payload;
    },
    onSubmitTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    onPaymentInfoSubmit: (state, action) => {
      state.paymentInfo = action.payload;
    },
  },
});

export const orderReducer = orderSlice.reducer;
export const {
  onContactDetailsSubmit,
  onShippingDetailsSubmit,
  onSubmitTotalPrice,
  onPaymentInfoSubmit,
} = orderSlice.actions;