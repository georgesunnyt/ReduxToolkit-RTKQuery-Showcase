import { configureStore} from "@reduxjs/toolkit";
import selectionReducer from "./features/selectionSlice";
import { placeOrderApi } from "./features/SaveOrder/saveOrderSlice";

export default configureStore({
    reducer: {
        selection: selectionReducer,
        [placeOrderApi.reducerPath]: placeOrderApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(placeOrderApi.middleware)
})