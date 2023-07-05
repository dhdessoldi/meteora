import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from './ModalEmail.module.scss';
import Button from '../Button';

function ModalEmail() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <div className={styles.modal__card}>
        <p className={styles['modal__card-texto']}>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</p>
        <div>
          <input placeholder='Digite seu email' type="text" />
          <Button onClick={handleShow}>Enviar</Button>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        size="lg"
        centered
      >
        <Modal.Header closeButton closeVariant='white' style={{ backgroundColor: 'black', borderRadius: 0, color: 'white' }}>
          <Modal.Title style={{ fontFamily: 'Inter', fontSize: '20px' }}>E-mail cadastrado com sucesso!</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontFamily: 'Inter' }}>
          Em breve você receberá novidades exclusivas da Meteora.
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalEmail;