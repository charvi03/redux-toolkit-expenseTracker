import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../features/transactionSlice";

export default configureStore({
  reducer: {
    expense: transactionReducer,
  },
});
