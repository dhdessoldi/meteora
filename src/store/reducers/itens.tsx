
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IItens } from '../../interface/IItens';
import itensService from '../../services/itens';

export const buscarItens = createAsyncThunk(
  'itens/buscar',
  itensService.buscar
);

const initialState: IItens[] = [{
  'id': 1,
  'titulo': 'Camiseta Conforto',
  'descricao': 'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.',
  'foto': '/assets/itens/camiseta.png',
  'preco': 70,
  'categoria': 'camisetas'
},
{
  'id': 2,
  'titulo': 'Calça Alfaiataria',
  'descricao': 'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!',
  'foto': '/assets/itens/calca.png',
  'preco': 180,
  'categoria': 'calcas'
},
{
  'id': 3,
  'titulo': 'Tênis Chunky',
  'descricao': 'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.',
  'foto': '/assets/itens/tenis.png',
  'preco': 250,
  'categoria': 'calcados'
},
{
  'id': 4,
  'titulo': 'Jaqueta Jeans',
  'descricao': 'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!',
  'foto': '/assets/itens/jaqueta.png',
  'preco': 70,
  'categoria': 'casacos'
},
{
  'id': 5,
  'titulo': 'Óculos Redondo',
  'descricao': 'Armação metálica em grafite com lentes arredondadas. Sem erro!',
  'foto': '/assets/itens/oculos.png',
  'preco': 120,
  'categoria': 'oculos'
},
{
  'id': 6,
  'titulo': 'Bolsa Coringa',
  'descricao': 'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
  'foto': '/assets/itens/bolsa.png',
  'preco': 70,
  'categoria': 'bolsas'
}];

const itensSlice = createSlice({
  name: 'itens',
  initialState,
  reducers: {
    filtrarItens: (state, action: PayloadAction<string>) => {
      const verificaFiltro = state.filter(item => item.categoria !== action.payload);
      if (verificaFiltro.length == 0) {
        return initialState;
      } else {
        const itensFiltrados = initialState.filter(item => item.categoria === action.payload);
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

export const { filtrarItens } = itensSlice.actions;
export default itensSlice.reducer;