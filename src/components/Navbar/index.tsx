import { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';
import navbarIcon from './navbarIcon.png';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { mudarBusca, resetarBusca } from '../../store/reducers/busca';
import { RootState } from '../../store';

export default function Navbar() {

  const routes = [{
    label: 'Home',
    to: '/',
    testid: 'navbar-home'
  },
  {
    label: 'Nossas lojas',
    to: '/',
    testid: 'navbar-lojas'
  },
  {
    label: 'Novidades',
    to: '/',
    testid: 'navbar-novidades'
  },
  {
    label: 'Promoções',
    to: '/',
    testid: 'navbar-promocoes'
  }];

  const [show, setShow] = useState(false);
  const location = useLocation();
  const busca = useSelector((state: RootState) => state.busca);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetarBusca());
  }, [location.pathname, dispatch]);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo} role='img' aria-label="Logo do meteora" />
        <div>
          <img
            className={styles.header__icon}
            src={navbarIcon}
            alt="Ícone de menu hamburguer"
            onClick={() => setShow(!show)}
          />
          <nav id="navbar" className={[styles.header__navbar, (show ? styles['header__navbar-show'] : '')].join(' ')}>
            {routes.map((route, index) => (
              <Link
                key={index}
                onClick={() => setShow(!show)}
                to={route.to}
                data-testid={route.testid}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className={styles.header__search}>
        <input
          className={styles.header__input}
          type="text"
          placeholder='Digite o produto para buscar'
          value={busca}
          onChange={event => dispatch(mudarBusca(event.target.value))}
        />
      </div>
    </header>
  );
}
