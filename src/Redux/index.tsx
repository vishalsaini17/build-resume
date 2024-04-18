import { configureStore } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import persistRootReducer from './rootReducer';

export type RootStateProps = ReturnType<typeof persistRootReducer>;

const store = configureStore({
  reducer: persistRootReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

const persistor = persistStore(store);


type props = {
  children: ReactNode
}

const Redux: React.FC<props> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
export default Redux