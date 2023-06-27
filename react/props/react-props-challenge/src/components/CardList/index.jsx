import s from "./CardList.module.scss";

const CardList = ({ children }) => {
  return <section className={s.container}>{children}</section>;
};

export default CardList;
