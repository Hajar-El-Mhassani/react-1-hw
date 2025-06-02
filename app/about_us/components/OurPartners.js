import styles from "./../page.module.css";
const OurPartners = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  const descriptionPartners =
    "We collaborate with some of the most respected names in the space and technology industries to make every journey extraordinary. ";

  const picturesPartners = [
    "/business_partners/alphabet-logo.png",
    "/business_partners/amazon_logo.png",
    "/business_partners/CBC_logo_White.png",
    "/business_partners/Microsoft-Logo-White.png",
    "/business_partners/nyu-logo.png",
    "/business_partners/QueensLogo_White.png",
    "/business_partners/samsung-logo.png",
    "/business_partners/sodexo-logo.png",
  ];
  return (
    <>
      <div className={styles.partnerContainer}>
        <p className={styles.paragraph}>{descriptionPartners}</p>

        <div className={styles.partners}>
          {picturesPartners.map((picture, index) => {
            return <img src={picture} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};
export default OurPartners;
