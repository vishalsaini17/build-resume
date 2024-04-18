import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appReducer from './slices/appSlice';

const rootReducer = combineReducers({
  app: appReducer,
});


const persistConfig = {
  key: 'app-root',
  version: 1,
  storage,
  // You can add any other configurations here, like 'whitelist' or 'blacklist' for selective persistence.
};

const persistRootReducer = persistReducer(persistConfig, rootReducer);
export default persistRootReducer