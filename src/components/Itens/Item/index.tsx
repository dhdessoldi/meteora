import { IItens } from '../../../interface/IItens';
import Button from '../../Button';
import styles from './Item.module.scss';

export default function Item({ foto, titulo, descricao, preco }: IItens) {
  return (
    <div className={styles.container}>
      <img className={styles.container__foto} src={foto} alt={titulo} />
      <div className={styles.container__infos}>
        <h2 className={styles['container__infos-titulo']}>{titulo}</h2>
        <p className={styles['container__infos-descricao']}>{descricao}</p>
        <p className={styles['container__infos-preco']}>R$ {preco.toFixed(2).replace('.', ',')}</p>
        <Button>Ver mais</Button>
      </div>
    </div>
  );
}
