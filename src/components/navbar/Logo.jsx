import { Icons } from "../Icons";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

const Logo = () => {
  return (
    <>
      <Link href="/" className="flex gap-2 items-center">
        <Icons.logo />
      </Link>
    </>
  );
};

export default Logo;
