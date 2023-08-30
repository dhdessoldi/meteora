import Categoria from '../../components/Categorias/Categoria';
import styles from './Categorias.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { carregarCategorias } from '../../store/reducers/categorias';
import { useEffect } from 'react';
import { carregarItens, carregarItensDeCategoria } from '../../store/reducers/itens';
import { ICategorias } from '../../interface/ICategorias';
import { IItens } from '../../interface/IItens';

export default function Categorias() {
  const categorias: ICategorias[] = useSelector((state: RootState) => state.categorias);
  const itens: IItens[] = useSelector((state: RootState) => state.itens);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(carregarCategorias());
  }, [dispatch]);

  function filtrarItens(categoriaId: string) {
    const itemFiltrado = itens.filter(item => item.categoria !== categoriaId);
    if (itemFiltrado.length === 0) {
      dispatch(carregarItens());
    } else {
      dispatch(carregarItensDeCategoria(categoriaId));
    }
  }

  return (
    <div className={styles.container__categorias}>
      <h2 className={styles['container__categorias-text']}>Busque por categoria:</h2>
      <ul className={styles['container__categorias-list']}>
        {categorias.map((categoria, index) => (
          <li key={index} value={categoria.nome}
            onClick={() => filtrarItens(categoria.id)}
          >
            <Categoria id={categoria.id} nome={categoria.nome} thumbnail={categoria.thumbnail} />
          </li>
        ))}
      </ul>
    </div>
  );
}
