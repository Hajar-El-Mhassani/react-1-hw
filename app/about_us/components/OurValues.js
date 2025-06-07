import styles from "./../page.module.css";
const OurValues = () => {
  // TASK - React 1 week 1
  const values = [
    {
      value: "Exploration",
      description:
        "We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what is possible.",
    },
    {
      value: "Innovation",
      description:
        "At Galactica, we prioritize cutting-edge technology and innovation. We are constantly evolving our spacecraft, safety protocols, and services to ensure that our travelers experience the most advanced and secure space journeys available.",
    },
    {
      value: "Sustainability",
      description:
        "We are committed to making space exploration sustainable for future generations. Our space missions are designed to minimize environmental impact, both on Earth and in space, and to foster a spirit of responsibility towards our universe.",
    },
    {
      value: "Community",
      description:
        "We believe in the power of collective exploration. Our journeys are not just about reaching new destinations; they are about building a community of space enthusiasts who share a passion for the stars.",
    },
  ];

  return (
    <>
      <div className={styles.cardContainer}>
        {values.map((value, index) => {
          return (
            <div className={styles.cardValue} key={index}>
              <h2>{value.value}</h2>
              <p className={styles.paragraph}>{value.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OurValues;
