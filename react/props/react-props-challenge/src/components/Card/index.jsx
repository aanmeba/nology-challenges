// import imgUrl from "../../assets/elemental.jpeg";
import Banner from "../Banner";
import s from "./Card.module.scss";

const Card = ({ title, name, rating, imgUrl }) => {
  return (
    <div className={s.container}>
      {rating == 5 && <Banner />}
      <img src={imgUrl} alt="" className={s.cover} />
      <div className={s.details}>
        <p className={s.text}>{title}</p>
        <p className={s.text}>- {name}</p>
        {}
        <p className={s.text}>{ratingStarts(rating)}</p>
      </div>
    </div>
  );
};

const ratingStarts = (rating) => {
  let stars = "";
  for (let i = 0; i < +rating; i++) {
    stars += "⭐️";
  }
  return stars;
};

export default Card;
