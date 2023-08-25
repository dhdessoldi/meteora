import { createSlice } from '@reduxjs/toolkit';
import { ICategorias } from '../../interface/ICategorias';

const initialState: ICategorias[] = [{
  'nome': 'Camisetas',
  'thumbnail': '/assets/categorias/camiseta.png',
  'id': 'camisetas'
},
{
  'nome': 'Bolsas',
  'thumbnail': '/assets/categorias/bolsa.png',
  'id': 'bolsas'
},
{
  'nome': 'Calçados',
  'thumbnail': '/assets/categorias/calcados.png',
  'id': 'calcados'
},
{
  'nome': 'Calças',
  'thumbnail': '/assets/categorias/calca.png',
  'id': 'calcas'
},
{
  'nome': 'Casacos',
  'thumbnail': '/assets/categorias/casaco.png',
  'id': 'casacos'
},
{
  'nome': 'Óculos',
  'thumbnail': '/assets/categorias/oculos.png',
  'id': 'oculos'
}];

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {

  }

});

export default categoriasSlice.reducer;