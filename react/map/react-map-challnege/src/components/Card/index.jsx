import styles from "./Card.module.scss";
const Card = ({ planet }) => {
  const {
    planetName,
    image,
    distanceFromSun,
    diameterInKm,
    numberOfMoons,
    lengthOfYear,
  } = planet;

  // clearer to have classname logic here, not inside jsx
  const cardStyles = `${styles.card__text} ${
    numberOfMoons === "0" ? styles.moonless : ""
    // numberOfMoons === "0" ? styles.card__black : ""
  }`;

  return (
    // <div className={styles.card} style={{ order: diameterInKm }}>
    <div className={styles.card}>
      {/* if the image is no meaning,
       * it's better to use it as background, not using img tag
       * screen reader will say "image, planetName"
       */}
      <img src={image} alt={planetName} />
      <div className={cardStyles}>
        <h3>{planetName}</h3>
        <p>Distance from the sun: {distanceFromSun}</p>
        <p>Diameter: {diameterInKm}</p>
        {/* numberOfMoons !== "0"
         * if numberOfMoons is 0, it will render 0
         */}
        {numberOfMoons > 0 && <p>Number of moons: {numberOfMoons}</p>}
        <p>Length of year: {lengthOfYear}</p>
      </div>
    </div>
  );
};

export default Card;
