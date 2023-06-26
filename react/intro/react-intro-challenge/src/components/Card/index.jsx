import imgUrl from "../../assets/placeholder.jpeg";
import styles from "./Card.module.scss";
const Card = () => {
  return (
    <article className={styles.card}>
      <div>
        <img className={styles.card__img} src={imgUrl} alt="placeholder" />
      </div>
      <div>
        <h3>This is a Title</h3>
        <h5>This is a Subtitle</h5>
        <p>This is a short description</p>
        <button>Click me</button>
      </div>
    </article>
  );
};

export default Card;
