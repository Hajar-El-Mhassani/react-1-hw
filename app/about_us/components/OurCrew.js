import styles from "./../page.module.css";
const OurCrew = () => {
  const decsriptionCrew =
    "Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space explorers, engineers, and visionaries who are united by a common goal: to make space travel accessible and exciting for all.";
  const crewMembers = [
    "Sarah Vega",
    "Leo Redding",
    "Engineer Hana Lee",
    "Specialist Alex Santos",
  ];
  const positionsCrew = [
    "Captain",
    "Chief Astrophysicist",
    "Chief Engineer",
    "Mission Specialist",
    "Crew Member",
  ];
  const descriptionsCrew = [
    "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
    "Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
    " With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands",
    " As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers",
  ];
  const picturesCrew = [
    "/crew/image-anousheh-ansari.png",
    "/crew/image-douglas-hurley.png",
    "/crew/image-mark-shuttleworth.png",
    "/crew/image-victor-glover.png",
  ];
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <>
      <div>
        <p>{decsriptionCrew}</p>
        <div className={styles.crewContainer}>
          <div className={styles.cardCrew}>
            <div className={styles.imageCrew}>
              <img src={picturesCrew[0]} alt="crew member" />
            </div>
            <div className={styles.contentCrew}>
              <h3>{crewMembers[0]}</h3>
              <p>{positionsCrew[0]}</p>
              <p className={styles.paragraph}>{descriptionsCrew[0]}</p>
            </div>
          </div>
          <div className={styles.cardCrew}>
            <div className={styles.imageCrew}>
              <img src={picturesCrew[1]} alt="crew member" />
            </div>
            <div className={styles.contentCrew}>
              <h3>{crewMembers[1]}</h3>
              <p>{positionsCrew[1]}</p>
              <p className={styles.paragraph}>{descriptionsCrew[1]}</p>
            </div>
          </div>
          <div className={styles.cardCrew}>
            <div className={styles.imageCrew}>
              <img src={picturesCrew[2]} alt="crew member" />
            </div>
            <div className={styles.contentCrew}>
              <h3>{crewMembers[2]}</h3>
              <p>{positionsCrew[2]}</p>
              <p className={styles.paragraph}>{descriptionsCrew[2]}</p>
            </div>
          </div>
          <div className={styles.cardCrew}>
            <div className={styles.imageCrew}>
              <img src={picturesCrew[3]} alt="crew member" />
            </div>
            <div className={styles.contentCrew}>
              <h3>{crewMembers[3]}</h3>
              <p>{positionsCrew[3]}</p>
              <p className={styles.paragraph}>{descriptionsCrew[3]}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCrew;
