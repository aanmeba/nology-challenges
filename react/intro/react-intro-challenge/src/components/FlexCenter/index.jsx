/* eslint-disable react/prop-types */
import s from "./FlexCenter.module.scss";

const FlexCenter = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default FlexCenter;
