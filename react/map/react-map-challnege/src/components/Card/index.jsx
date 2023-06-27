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
  return (
    <div className={styles.card}>
      <img src={image} alt={planetName} />
      <div
        className={`${styles.card__text} ${
          numberOfMoons === "0" ? styles.card__black : ""
        }`}
      >
        <h3>{planetName}</h3>
        <p>Distance from the sun: {distanceFromSun}</p>
        <p>Diameter: {diameterInKm}</p>
        <p>Number of moons: {numberOfMoons}</p>
        <p>Length of year: {lengthOfYear}</p>
      </div>
    </div>
  );
};

export default Card;
