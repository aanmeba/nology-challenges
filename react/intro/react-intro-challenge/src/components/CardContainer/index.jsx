import styles from "./CardContainer.module.scss";

/* eslint-disable react/prop-types */
const CardContainer = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};

export default CardContainer;
