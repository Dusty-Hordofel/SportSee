import { Icons } from "../Icons";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

const Logo = () => {
  return (
    <div
      className={styles.logo}
      aria-label="Cliquez sur le logo pour vous rendre sur la page d'accueil"
      tabIndex={0}
    >
      <Link to="/">
        <Icons.logo />
      </Link>
    </div>
  );
};

export default Logo;
