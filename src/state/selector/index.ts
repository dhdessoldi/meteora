import {selector} from 'recoil';
import { ICategorias } from '../../interface/ICategorias';
import { IItens } from '../../interface/IItens';
import { buscaDeItensState, listaDeItensState } from '../atom';

export const categoriasAsync = selector({
  key:'categoriasAsync',
  get: async () => {
    const respostaHttp = await fetch('http://localhost:8000/categorias');
    const categoriasJson: ICategorias[] = await respostaHttp.json();
    return categoriasJson.map(categoria=>({
      ...categoria,
    }));
  }
});

export const itensAsync = selector({
  key:'itensAsync',
  get: async () => {
    const respostaHttp = await fetch('http://localhost:8000/itens');
    const itensJson: IItens[] = await respostaHttp.json();
    return itensJson.map(item=>({
      ...item,
    }));
  }
});


export const itensFiltradosState = selector({
  key: 'itensFiltradosState',
  get: ({get}) => {
    const buscar = get(buscaDeItensState);
    const todosOsItens = get(listaDeItensState);
    if(buscar !== ''){
      const itensFiltrados = todosOsItens.filter(item =>
        item.titulo.toLowerCase().includes(buscar.toLowerCase()));
      return itensFiltrados;
    }
    return todosOsItens;
  }
});