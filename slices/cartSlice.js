import { createSlice } from "@reduxjs/toolkit";

initialState = {
  items: [],
  removedItem: [],
  deliveryPoint: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!itemInCart) {
        state.items.push(action.payload);
      }
    },

    removeFromCart: (state, action) => {
      const removedItem = state.items.filter(
        (item) => item.id == action.payload.id
      );
      state.removedItem = removedItem;

      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    undoRemoveFromCart: (state) => {
      state.items = [...state.items, state.removedItem[0]];
      state.removedItem = [];
    },

    setDeliveryPoint: (state, action) => {
      state.deliveryPoint = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  undoRemoveFromCart,
  setDeliveryPoint,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectDeliveryPoint = (state) => state.cart.deliveryPoint;

export default cartSlice.reducer;
