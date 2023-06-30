import { atom } from 'recoil';
import { ICategorias } from '../interface/ICategorias';
import { categoriasAsync, itensAsync } from './selector';
import { IItens } from '../interface/IItens';


export const listaDeCategoriasState = atom<ICategorias[]>({
  key: 'listaDeCategorias',
  default: categoriasAsync
});

export const listaDeItensState = atom<IItens[]>({
  key: 'listaDeItens',
  default: itensAsync
});