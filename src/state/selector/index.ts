import {selector} from 'recoil';
import { ICategorias } from '../../interface/ICategorias';
import { IItens } from '../../interface/IItens';

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