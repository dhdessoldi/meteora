import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IItens } from '../../interface/IItens';
import itensService from '../../services/itens';

const initialState: IItens[] = [];

export const carregarItens = createAction('itens/carregar');

export const buscarItens = createAsyncThunk(
  'itens/buscar',
  itensService.buscar
);

const itensSlice = createSlice({
  name: 'itens',
  initialState,
  reducers: {
    adicionarTodosOsItens: (state, { payload }) => {
      state.push({ ...payload });
    },
    filtrarItens: (state, { payload }) => {
      const verificaFiltro = state.filter(item => item.categoria !== payload);
      if (verificaFiltro.length == 0) {
        return state;
      } else {
        const itensFiltrados = initialState.filter(item => item.categoria === payload);
        return itensFiltrados;
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(
        buscarItens.fulfilled,
        (state, { payload }) => {
          return payload;
        }
      );
  }

});

export const { adicionarTodosOsItens, filtrarItens } = itensSlice.actions;
export default itensSlice.reducer;