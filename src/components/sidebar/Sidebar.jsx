import { Link } from "react-router-dom";
import { Icons } from "../Icons";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      {/* Ajoutez les attributs aria-label aux éléments Link contenant les icônes */}
      <div className={styles.links}>
        <Link
          to="/"
          aria-label="Cliquez sur l'icon Yoga pour avoir des informations sur vos activités de Yoga"
          tabIndex={0}
        >
          <Icons.yoga />
        </Link>
        <Link
          to="/"
          aria-label="Cliquez sur l'icon Swim pour avoir des informations sur vos activités de Swim"
          tabIndex={0}
        >
          <Icons.swim />
        </Link>
        <Link
          to="/"
          aria-label="Cliquez sur l'icon Bike pour avoir des informations sur vos activités de Bike"
          tabIndex={0}
        >
          <Icons.bike />
        </Link>
        <Link
          to="/"
          aria-label="Cliquez sur l'icon Fitness pour avoir des informations sur vos activités de Fitness"
          tabIndex={0}
        >
          <Icons.fitness />
        </Link>
      </div>
      <div className={styles.copiryght}>
        <Link>
          <p>Copiryght, SportSee 2020</p>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
