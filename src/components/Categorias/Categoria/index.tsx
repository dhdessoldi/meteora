import { ICategorias } from '../../../interface/ICategorias';
import styles from './Categoria.module.scss';

export default function Categoria({ id, thumbnail, nome }: ICategorias) {
  return (
    <div className={styles.categoria}>
      <img src={thumbnail} alt={nome} />
      <p className={styles.categoria__text}>{nome}</p>
    </div>
  );
}
