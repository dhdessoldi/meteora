import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IItens } from '../../interface/IItens';
import itensService from '../../services/itens';

const initialState: IItens[] = [];

export const carregarItens = createAction('itens/carregar');
export const carregarItensDeCategoria = createAction<string>('itens/carregarDeCategoria');

export const buscarItens = createAsyncThunk(
  'itens/buscar',
  itensService.buscar
);
export const buscarItensDeCategoria = createAsyncThunk(
  'itens/buscarItensDeCategoira',
  itensService.buscarDeCategorias
);

const itensSlice = createSlice({
  name: 'itens',
  initialState,
  reducers: {
    adicionarTodosOsItens: (state, { payload }) => {
      console.log(state.length);
      return payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(
        buscarItens.fulfilled,
        (state, { payload }) => {
          return payload;
        }
      )
      .addCase(
        buscarItensDeCategoria.fulfilled,
        (state, action) => {
          return action.payload;
        }
      );
  }

});

export const { adicionarTodosOsItens } = itensSlice.actions;
export default itensSlice.reducer;