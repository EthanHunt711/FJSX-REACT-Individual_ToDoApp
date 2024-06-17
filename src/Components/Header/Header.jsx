import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={`/`}>
        <h4>The Board App</h4>
      </Link>
    </header>
  );
};

export default Header;
