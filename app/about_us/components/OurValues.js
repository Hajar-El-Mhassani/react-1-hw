import styles from "./../page.module.css";
const OurValues = () => {
  // TASK - React 1 week 1
  const values = ["exploration", "innovation", "sustainability", "community"];
  const descriptions = [
    "We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what is possible.",
    "At Galactica, we prioritize cutting-edge technology and innovation. We are constantly evolving our spacecraft, safety protocols, and services to ensure that our travelers experience the most advanced and secure space journeys available.",
    "We are committed to making space exploration sustainable for future generations. Our space missions are designed to minimize environmental impact, both on Earth and in space, and to foster a spirit of responsibility towards our universe.",
    "We believe in the power of collective exploration. Our journeys are not just about reaching new destinations; they are about building a community of space enthusiasts who share a passion for the stars.",
  ];

  const description1 = descriptions[0];
  const description2 = descriptions[1];
  const description3 = descriptions[2];
  const description4 = descriptions[3];

  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.cardValue}>
          <h2>{values[0]}</h2>
          <p className={styles.paragraph}>{description1}</p>
        </div>
        <div className={styles.cardValue}>
          <h2>{values[1]}</h2>
          <p className={styles.paragraph}>{description2}</p>
        </div>
        <div className={styles.cardValue}>
          <h2>{values[2]}</h2>
          <p className={styles.paragraph}>{description3}</p>
        </div>
        <div className={styles.cardValue}>
          <h2>{values[3]}</h2>
          <p className={styles.paragraph}>{description4}</p>
        </div>
      </div>
    </>
  );
};

export default OurValues;
