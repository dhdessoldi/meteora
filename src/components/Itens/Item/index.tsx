import { Modal } from 'react-bootstrap';
import { IItens } from '../../../interface/IItens';
import Button from '../../Button';
import styles from './Item.module.scss';
import { useState } from 'react';

export default function Item({ foto, titulo, descricao, preco }: IItens) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className={styles.container}>
      <img className={styles.container__foto} src={foto} alt={titulo} />
      <div className={styles.container__infos}>
        <h2 className={styles['container__infos-titulo']}>{titulo}</h2>
        <p className={styles['container__infos-descricao']}>{descricao}</p>
        <p className={styles['container__infos-preco']}>R$ {preco.toFixed(2).replace('.', ',')}</p>
        <Button onClick={handleShow}>Ver mais</Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          size="lg"
          centered
        >
          <Modal.Header closeButton closeVariant='white' style={{ backgroundColor: 'black', borderRadius: 0, color: 'white' }}>
            <Modal.Title style={{ fontFamily: 'Inter', fontSize: '20px' }}>Confira os detalhes deste produto</Modal.Title>
          </Modal.Header>
          <div className={styles['container__modal']}>
            <img className={styles.container__foto} src={foto} alt={titulo} />
            <div >
              <h2 className={styles['container__infos-titulo']}>{titulo}</h2>
              <p className={styles['container__infos-descricao']}>{descricao}</p>
              <p className={styles['container__infos-preco']}>R$ {preco.toFixed(2).replace('.', ',')}</p>
              <p className={styles['container__infos-vendido']}>Vendido e entregue pela Riachuelo.</p>
              <fieldset className={styles['container__infos-tamanho']}>
                <legend>Tamanhos:</legend>
                <section>
                  <div>
                    <input type="radio" id='pp' name='tamanho' value='pp' />
                    <label htmlFor="pp">PP</label>
                  </div>
                  <div>
                    <input type="radio" id='p' name='tamanho' value='p' />
                    <label htmlFor="p">P</label>
                  </div>
                  <div>
                    <input type="radio" id='m' name='tamanho' value='m' />
                    <label htmlFor="m">M</label>
                  </div>
                  <div>
                    <input type="radio" id='g' name='tamanho' value='g' />
                    <label htmlFor="g">G</label>
                  </div>
                  <div>
                    <input type="radio" id='gg' name='tamanho' value='gg' />
                    <label htmlFor="gg">GG</label>
                  </div>
                </section>
                <Button onClick={handleClose}>Adicionar à sacola</Button>
              </fieldset>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
