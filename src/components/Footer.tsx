import { Link } from 'react-router-dom';
import styles from '../styles/footer.module.css';
import pokePic from '../assets/pikachu.png';
import itemsPic from '../assets/pokeball.png';
import mapPic from '../assets/pointer.png';


const Footer = () => {
    return (
    <footer className={styles.footer}>
        <Link to="pokemons" className={styles.footerLink} >
        <img src={pokePic} className={styles.footerIcon} />
        Pokemons
        </Link>

        <Link to="items" className={styles.footerLink} >
        <img src={itemsPic} className={styles.footerIcon} />
        Items
        </Link>

        <Link to="location" className={styles.footerLink} >
        <img src={mapPic} className={styles.footerIcon} />
        Location
        </Link>
    </footer>)
}

export default Footer;