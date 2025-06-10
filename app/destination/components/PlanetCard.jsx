import styles from "@/components/destination/destination.module.css";
const PlanetCard = ({ planet }) => {
  const { name, description, thumbnail, isSelected, onAddOrRemovePlanet } =
    planet;

  return (
    <div className={styles.planetCard}>
      <img
        className={styles.planetThumbnail}
        // Using the thumbnail prop to set the image source
        src={thumbnail}
        alt={`${name} thumbnail`}
      />
      <div className={styles.planetDescription}>
        <h2>
          {name.toUpperCase()} {isSelected ? "- SELECTED" : ""}
        </h2>
        <p>{description}</p>
      </div>
      <button className="roundButton" onClick={() => onAddOrRemovePlanet(name)}>
        {isSelected ? "REMOVE" : "ADD PLANET"}
      </button>
    </div>
  );
};
export default PlanetCard;
