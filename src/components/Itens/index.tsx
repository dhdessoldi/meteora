import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import Item from './Item';
import styles from './Itens.module.scss';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { carregarItens } from '../../store/reducers/itens';

export default function Itens() {

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(carregarItens());
  }, [dispatch]);

  const itens = useSelector((state: RootState) => state.itens);

  return (
    <div className={styles.container__itens}>
      <h2 className={styles['container__itens-text']}>Produtos que estão bombando!</h2>
      <ul className={styles['container__itens-list']}>
        {itens.map((item, index) => (
          <li key={index}>
            <Item {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
