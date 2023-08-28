import Categoria from '../../components/Categorias/Categoria';
import styles from './Categorias.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { filtrarItens } from '../../store/reducers/itens';
import { carregarCategorias } from '../../store/reducers/categorias';
import { useEffect } from 'react';

export default function Categorias() {
  const categorias = useSelector((state: RootState) => state.categorias);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(carregarCategorias());
  }, [dispatch]);

  return (
    <div className={styles.container__categorias}>
      <h2 className={styles['container__categorias-text']}>Busque por categoria:</h2>
      <ul className={styles['container__categorias-list']}>
        {categorias.map((categoria, index) => (
          <li key={index} value={categoria.nome}
            onClick={() => dispatch(filtrarItens(categoria.id))}
          >
            <Categoria id={categoria.id} nome={categoria.nome} thumbnail={categoria.thumbnail} />
          </li>
        ))}
      </ul>
    </div>
  );
}
