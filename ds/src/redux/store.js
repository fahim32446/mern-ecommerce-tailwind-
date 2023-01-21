import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from './ProductSlice'
import orderReducer from "./orderSlice";
import userReducer from "./userSlice";
import categoryReducer from "./categorySlice";
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";


const persistConfig = {
  blacklist: ['orderReducer', 'products', 'category'],
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    products: productReducer,
    orderReducer: orderReducer,
    userReducer: userReducer,
    category: categoryReducer
});



const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});


export let persistor = persistStore(store);