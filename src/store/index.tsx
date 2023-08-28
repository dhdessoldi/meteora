import { configureStore } from '@reduxjs/toolkit';
import categoriasSlice from './reducers/categorias';
import itensSlice from './reducers/itens';
import { listenerCategorias } from './middlewares/categorias';

const store = configureStore({
  reducer: {
    categorias: categoriasSlice,
    itens: itensSlice
  },
  middleware:
    getDefaultMiddleware =>
      getDefaultMiddleware()
        .prepend(
          listenerCategorias.middleware,
          // listenerItens.middleware,
        )
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;