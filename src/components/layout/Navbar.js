import { Link } from 'react-router-dom';

import Container from './Container';
import styles from './Navbar.module.css';
import logo from '../../img/costs_logo.png'; // Alterar a logo do Navbar aqui

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.menuToggle}>
          {/* <!--
    A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
    --> */}
          <input type="checkbox" />

          {/* <!--
    Some spans to act as a hamburger.
    
    They are acting like a real hamburger,
    not that McDonalds stuff.
    --> */}
          <span></span>
          <span></span>
          <span></span>

          {/* <!--
    Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic.
    --> */}
          <ul className={styles.menu}>
          <li className={styles.item}>
            {' '}
            <Link exacted to="/">
              <img src={logo} alt="Rio Moveis logotipo" className={styles.logo} />
            </Link>
          </li>
          <li className={styles.item}>
            <Link exacted to="/">
              Home
            </Link>{' '}
          </li>{' '}
          {/* Serve como ancora */}
         
          <li className={styles.item}>
            <Link to="/dashcompradores">Eventos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/dashvendedores">Depoimentos</Link>
          </li>
          
          </ul>
        </div>

        <ul className={styles.list}>
          <li className={styles.item}>
            {' '}
            <Link exacted to="/">
              <img src={logo} alt="Pousada logotipo" className={styles.logo} />
            </Link>
          </li>
          <li className={styles.item}>
            <Link exacted to="/">
              Home
            </Link>{' '}
          </li>{' '}
          {/* Serve como ancora */}
        
          <li className={styles.item}>
            <Link to="/dashcompradores">Eventos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/dashvendedores">Depoimentos</Link>
          </li>
        </ul>
      </Container>

     
    </nav>
  );
}

export default Navbar;
