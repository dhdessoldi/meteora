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

export const buscaDeItensState = atom<string>({
  key: 'buscaDeItens',
  default: ''
});

export const filtroDeItensState = atom<string>({
  key: 'filtroDeItens',
  default: ''
});