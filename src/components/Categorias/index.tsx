import useListaDeCategorias from '../../state/hooks/useListaDeCategorias';
import Categoria from '../../components/Categorias/Categoria';
import styles from './Categorias.module.scss';
import { filtroDeItensState } from '../../state/atom';
import { useRecoilState } from 'recoil';

export default function Categorias() {
  const categorias = useListaDeCategorias();

  const [filtroDeItens, setSearchTerm] = useRecoilState(filtroDeItensState);

  const handleClick = (categoriaId: string) => {
    if (filtroDeItens === categoriaId) {
      setSearchTerm('');
      return;
    }
    setSearchTerm(categoriaId);
  };

  return (
    <div className={styles.container__categorias}>
      <h2 className={styles['container__categorias-text']}>Busque por categoria:</h2>
      <ul className={styles['container__categorias-list']}>
        {categorias.map((categoria, index) => (
          <li key={index} value={categoria.nome} onClick={() => handleClick(categoria.id)}>
            <Categoria id={categoria.id} nome={categoria.nome} thumbnail={categoria.thumbnail} />
          </li>
        ))}
      </ul>
    </div>
  );
}
