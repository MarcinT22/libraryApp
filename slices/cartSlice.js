import { createSlice } from "@reduxjs/toolkit";

initialState = {
  items: [],
  removedItem: [],
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
  },
});

export const { addToCart, removeFromCart, undoRemoveFromCart } =
  cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;
