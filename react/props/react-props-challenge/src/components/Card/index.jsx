// import imgUrl from "../../assets/elemental.jpeg";
import s from "./Card.module.scss";

const Card = ({ title, name, rating, imgUrl }) => {
  return (
    <div className={s.container}>
      {rating == 5 && (
        <div className={s.bannerContainer}>
          <div className={s.banner}>Top Rating</div>
        </div>
      )}
      <img src={imgUrl} alt="" className={s.cover} />
      <div className={s.details}>
        <p className={s.text}>{title}</p>
        <p className={s.text}>- {name}</p>
        <p className={s.text}>{rating == 5 ? "Top Rating" : rating}</p>
      </div>
    </div>
  );
};

export default Card;
