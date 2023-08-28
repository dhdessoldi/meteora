import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICategorias } from '../../interface/ICategorias';
import categoriasService from '../../services/categorias';

const initialState: ICategorias[] = [];

export const carregarCategorias = createAction('categorias/carregar');

export const buscarCategorias = createAsyncThunk(
  'categorias/buscar',
  categoriasService.buscar
);

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    adicionarTodasAsCategorias: (state, { payload }) => {
      return payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(
      buscarCategorias.fulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  }

});

export const { adicionarTodasAsCategorias } = categoriasSlice.actions;

export default categoriasSlice.reducer;