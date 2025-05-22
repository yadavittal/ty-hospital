import React from "react";
import  videoUrl  from "../../assets/videos/contactUs.mp4";
import styles from "./HealthCare.module.scss";
import { MEDICAL_HERO_TEXT } from "../../constants/UI_Constants";

const MedicalHero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <video className={styles.backgroundVideo} autoPlay loop muted>
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className={styles.heroOverlay}>
        <p className={styles.getIn}>{MEDICAL_HERO_TEXT.getInTouch}</p>
        <h1 className={styles.heading}>
          {MEDICAL_HERO_TEXT.headingLine1}
          <br />
          {MEDICAL_HERO_TEXT.headingLine2}
        </h1>
        <button className={styles.contactBtn}>{MEDICAL_HERO_TEXT.contactButton}</button>
      </div>
    </section>
  );
};

export default MedicalHero;
