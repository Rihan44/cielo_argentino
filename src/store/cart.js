import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exists = state.items.find((i) => i.id === item.id);

      if (exists) {
        exists.quantity += 1;
        // exists.precio += item.precio;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      // TODO ESTO SOLO SI ES 0 O MENOS
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    minusItem: (state, action) => {
      const item = action.payload;
      const exists = state.items.find((i) => i.id === item.id);

      if (exists) {
        exists.quantity -= 1;
        // exists.precio -= item.precio;
        
        if (exists.quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== item.id);
        }
      } 
    },
    clearCart: (state) => {
      state.items = [];
    }
  },
});

export const { addToCart, removeFromCart, clearCart, minusItem } = cart.actions;
export default cart.reducer;
