import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import deliveryReducer from "./slices/deliverySlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    delivery: deliveryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
