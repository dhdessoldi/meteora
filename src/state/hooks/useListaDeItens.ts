import { listaDeItensState } from '../atom';
import {useRecoilValue} from 'recoil';


const useListaDeItens = () => {
  return useRecoilValue(listaDeItensState);
};

export default useListaDeItens;