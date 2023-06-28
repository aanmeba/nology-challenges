import styles from "./Header.module.scss";

const Header = ({ children }) => {
  return <header className={styles.container}>{children}</header>;
};

export default Header;
