import { createSlice } from "@reduxjs/toolkit";

initialState = {
  items: [
    {
      id: 1,
      imgUrl:
        "https://ecsmedia.pl/c/harry-potter-i-zakon-feniksa-tom-5-w-iext123071903.jpg",
      title: "Harry Potter i Zakon Feniksa",
      author: "J.K. Rowling",
      category: "Fantastyka",
      description:
        "Harry znów spędza nudne, samotne wakacje w domu Dursleyów. Czeka go piąty rok nauki w Hogwarcie i chciałby jak najszybciej spotkać się ze swoimi najlepszymi przyjaciółmi, Ronem i Hermioną. Ci jednak wyraźnie go zaniedbują. Gdy Harry ma już dość wszystkiego i postanawia zmienić swoją nieznośną sytuację, sprawy przyjmują całkiem nieoczekiwany obrót. Wygląda na to, że nowy rok nauki w Hogwarcie będzie bardzo dramatyczny. Po raz pierwszy w życiu Harry poczuje się tam nie jak w domu, tylko… więzieniu, i to nie za sprawą przywróconego do życia Lorda Voldemorta. ",
    },
  ],
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
      state.deliveryPoint = JSON.stringify(action.payload);
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

export default cartSlice.reducer;
