import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./rootReducer";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middelwares = [];
if (process.env.NODE_ENV === "development") {
  middelwares.push(logger);
}
const store = createStore(persistedReducer, applyMiddleware(...middelwares));

export const persistor = persistStore(store);

export default store;
