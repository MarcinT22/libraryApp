import { createSlice } from "@reduxjs/toolkit";

initialState = {
  deliveryPoint: [],
};

export const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    setDeliveryPoint: (state, action) => {
      state.deliveryPoint = action.payload;
    },
  },
});

export const { setDeliveryPoint } = deliverySlice.actions;

export const selectDeliveryPoint = (state) => state.delivery.deliveryPoint;

export default deliverySlice.reducer;
