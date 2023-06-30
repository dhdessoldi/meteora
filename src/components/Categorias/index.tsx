import useListaDeCategorias from '../../state/hooks/useListaDeCategorias';
import Categoria from '../../components/Categorias/Categoria';
import styles from './Categorias.module.scss';

export default function Categorias() {
  const categorias = useListaDeCategorias();
  return (
    <div className={styles.container__categorias}>
      <h2 className={styles['container__categorias-text']}>Busque por categoria:</h2>
      <ul className={styles['container__categorias-list']}>
        {categorias.map((categoria, index) => (
          <li key={index}>
            <Categoria nome={categoria.nome} thumbnail={categoria.thumbnail} />
          </li>
        ))}
      </ul>
    </div>
  );
}
