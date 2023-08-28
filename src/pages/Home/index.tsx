import styles from './Home.module.scss';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Categorias from '../../components/Categorias';
import Itens from '../../components/Itens';

export default function Home() {

  return (
    <main className={styles.container}>
      <Navbar />
      <Banner />
      <Categorias />
      <Itens />
      <Footer />
    </main>
  );
}
