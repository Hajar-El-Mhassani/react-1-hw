import { position } from "@chakra-ui/react";
import styles from "./../page.module.css";
const OurCrew = () => {
  const decsriptionCrew =
    "Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space explorers, engineers, and visionaries who are united by a common goal: to make space travel accessible and exciting for all.";
  const crew = [
    {
      name: "Sarah Vega",
      position: "Captain",
      description:
        "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
      image: "/crew/image-anousheh-ansari.png",
    },
    {
      name: "Leo Redding",
      position: "Chief Astrophysicist",
      description:
        "Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
      image: "/crew/image-douglas-hurley.png",
    },
    {
      name: " Hana Lee",
      position: "Chief Engineer",
      description:
        " With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands",
      image: "/crew/image-mark-shuttleworth.png",
    },
    {
      name: " Alex Santos",
      position: "Mission Specialist",
      description:
        " As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers",
      image: "/crew/image-victor-glover.png",
    },
  ];

  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <>
      <p className={styles.paragraph}>{decsriptionCrew}</p>
      <div className={styles.crewContainer}>
        {crew.map((crewMember, index) => {
          return (
            <div className={styles.cardCrew} key={index}>
              <div className={styles.imageCrew}>
                <img src={crewMember.image} alt="crew member" />
              </div>
              <div className={styles.contentCrew}>
                <h3>{crewMember.name}</h3>
                <p>{crewMember.position}</p>
                <p className={styles.paragraph}>{crewMember.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OurCrew;
