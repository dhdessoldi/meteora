import { listaDeCategoriasState } from '../atom';
import {useRecoilValue} from 'recoil';


const useListaDeCategorias = () => {
  return useRecoilValue(listaDeCategoriasState);
};

export default useListaDeCategorias;