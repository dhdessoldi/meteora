import styles from './Footer.module.scss';
import diamond from './diamond.png';
import arrow from './arrow-repeat.png';
import flower from './flower.png';
import Button from '../Button';

export default function Footer() {
  const facilidades = [{
    image: diamond,
    title: 'PAGUE PELO PIX',
    text: 'Ganhe 5% OFF em pagamentos via PIX'
  }, {
    image: arrow,
    title: 'TROCA GRÁTIS',
    text: 'Fique livre para trocar em até 30 dias.'
  }, {
    image: flower,
    title: 'SUSTENTABILIDADE',
    text: 'Moda responsável, que respeita o meio ambiente.'
  }];
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__facilidades}>
        <h2 className={styles['footer__facilidades-titulo']}>Conheça todas nossas facilidades</h2>
        <div className={styles['footer__facilidades-container']}>
          {facilidades.map((facilidade, index) => (
            <li className={styles.footer__facilidade} key={index}>
              <img className={styles['footer__facilidade-imagem']} src={facilidade.image} alt={facilidade.title} />
              <div>
                <h3 className={styles['footer__facilidade-titulo']}>{facilidade.title}</h3>
                <p className={styles['footer__facilidade-texto']}>{facilidade.text}</p>
              </div>
            </li>
          ))}
        </div>
      </div>
      <div className={styles.footer__card}>
        <p className={styles['footer__card-texto']}>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</p>
        <div>
          <input placeholder='Digite seu email' type="text" />
          <Button>Enviar</Button>
        </div>
      </div>
      <div className={styles.footer__direitos}>
        <p>2023 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.</p>
      </div>
    </footer>
  );
}
