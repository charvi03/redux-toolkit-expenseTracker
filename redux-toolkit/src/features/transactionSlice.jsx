import { createSlice } from "@reduxjs/toolkit";

export const transactionSlice = createSlice({
  name: "expense",
  initialState: {
    value: 15000,
    transactions: [],
  },
  reducers: {
    add: (state, action) => {
      state.transactions.push({
        id: state.transactions.length + 1,
        type: action.payload.type,
        category: action.payload.category,
        expenses: Number(action.payload.expenses),
      });
    },
  },
});

export const { add } = transactionSlice.actions;

export default transactionSlice.reducer;
