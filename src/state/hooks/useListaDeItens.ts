import {useRecoilValue} from 'recoil';
import { itensBuscadosState } from '../selector';


const useListaDeItens = () => {
  return useRecoilValue(itensBuscadosState);
};

export default useListaDeItens;