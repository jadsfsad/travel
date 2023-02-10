import styles from './Header.module.css';
import Polish from './svg/Polish';
import Arrow from './svg/Arrow';

function Header() {
  return (
    <div className="flex w-full justify-between ">
      <h1 className={styles.logo__text}>travelja</h1>
      <section className="flex space-x-10 items-center">
        <h1 className={styles.logotext}>Home</h1>
        <h1 className={styles.lol}>Discover</h1>
        <h1 className={styles.lol}>Service</h1>
        <h1 className={styles.lol}>News</h1>
        <h1 className={styles.lol}>About us</h1>
        <h1 className={styles.lol}>Contact</h1>
      </section>
      <section className="flex items-center space-x-2 ">
        <Polish />
        <h1 className={styles.lel}>ID</h1>
        <Arrow />
      </section>
    </div>
  );
}

export default Header;
