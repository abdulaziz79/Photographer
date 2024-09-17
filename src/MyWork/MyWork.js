import React, { useState } from 'react';
import styles from "./MyWork.module.css";
import iconLeft from "../Images/chevron.png";
import iconRight from "../Images/chevron.png";

// Import your image sets (for demo, I'm using placeholders)
import image1 from "../Images/hero.jpg";
import image2 from "../Images/hero.jpg";
import image3 from "../Images/hero.jpg";
import image4 from "../Images/hero.jpg";
import image5 from "../Images/hero.jpg";
import image6 from "../Images/hero.jpg";
import image7 from "../Images/hero.jpg";
import image8 from "../Images/hero.jpg";
import image9 from "../Images/hero.jpg";
// import image10 from "../Images/image10.jpg";

function MyWork() {
  // Array of image sets, each containing 8 images
  const imageSets = [
    [image1, image2, image1, image4, image5, image6, image7, image8],
    [image9, iconLeft, image2, image3, image4, image5, image6, image7],
    [image8, image9, iconRight, image2, image3, image4, image5, iconRight], 
  ];
  const infoTexts = [
    " WHETHER IT'S CAPTURING THE ESSENCE OF A CORPORATE EVENT, IMMORTALIZINNG A COUPLE SPECIAL'S DAY, OR COLLABORATING ON ARTISTIC PROJECTS",
    "ANOTHER UNIQUE COMPOSITION, THOUGHTFULLY CRAFTED...",
    "EXPLORE THE BEAUTY AND DIVERSITY OF NATURE IN EVERY SHOT..."
  ];

  const [currentImageSet, setCurrentImageSet] = useState(0);

  // Handle next set of images
  const handleNext = () => {
    setCurrentImageSet((prev) => (prev + 1) % imageSets.length);
  };

  // Handle previous set of images
  const handlePrev = () => {
    setCurrentImageSet((prev) => (prev - 1 + imageSets.length) % imageSets.length);
  };

  return (
    <main className={styles.All}>
      <div className={styles.top}>
        <div className={styles.yearScroll}>
          <p className={styles.pYear}>2023</p>
          <div style={{ display: "flex", gap: "40px" }}>
            <img className={styles.rotateIcon} src={iconLeft} onClick={handlePrev} alt="left arrow" />
            <img className={styles.rotateIcon1} src={iconRight} onClick={handleNext} alt="right arrow" />
          </div>
        </div>
        <div className={styles.text}>
          <h2 className={styles.h2}>MY WORKS</h2>
          <p className={styles.p}>{infoTexts[currentImageSet]}</p>
        </div>
      </div>

      {/* Rendering the current set of 8 images */}
      <div className={styles.bottom}>
        <div className={styles.bottomTop}>
          <div className={styles.topLeft}>
            <div className={styles.topOnce}>
              <img src={imageSets[currentImageSet][0]} className={styles.img} alt="work 1" />
            </div>
            <div className={styles.topBoth}>
              <img src={imageSets[currentImageSet][1]} className={styles.both} alt="work 2" />
              <img src={imageSets[currentImageSet][2]} className={styles.both} alt="work 3" />
            </div>
          </div>
          <img src={imageSets[currentImageSet][3]} className={styles.tall} alt="work 4" />
        </div>
        <div className={styles.bottomBottom}>
          <img src={imageSets[currentImageSet][4]} className={styles.img2} alt="work 5" />
          <div className={styles.bottomRight}>
            <div className={styles.both2}>
              <img src={imageSets[currentImageSet][5]} className={styles.rotate} alt="work 6" />
              <img src={imageSets[currentImageSet][6]} className={styles.rotate2} alt="work 7" />
            </div>
            <div className={styles.bottomOnce}>
              <img src={imageSets[currentImageSet][7]} className={styles.img} alt="work 8" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MyWork;
