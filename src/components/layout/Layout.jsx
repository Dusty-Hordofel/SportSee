import Navbar from "../navbar/Navbar";
import styles from "./layout.module.scss";
const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar children={children} />
    </div>
  );
};

export default Layout;
