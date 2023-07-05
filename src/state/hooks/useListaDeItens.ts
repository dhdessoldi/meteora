import {useRecoilValue} from 'recoil';
import { itensFiltradosState } from '../selector';


const useListaDeItens = () => {
  return useRecoilValue(itensFiltradosState);
};

export default useListaDeItens;