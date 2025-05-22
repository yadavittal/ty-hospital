import React, { useState } from "react";
import OurServiceCard from "./../../components/OurServiceCard/OurServiceCard";
import Physiotherapy from "../../assets/svg/Physiotherapy.svg";
import BloodBank from "../../assets/svg/BloodBank.svg";
import Pharmacy from "../../assets/svg/Pharmacy.svg";
import Laboratory from "../../assets/svg/Laboratory.svg";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import styles from "./OurServices.module.scss";

const services = [
  {
    title: "Physiotherapy",
    image: Physiotherapy,
    description:
      "The new concept of Telemedicine, bridge geographical distances and takes healthcare to the unreachable.",
  },
  {
    title: "Blood Bank",
    image: BloodBank,
    description:
      "The new concept of Telemedicine, bridge geographical distances and takes healthcare to the unreachable.",
  },
  {
    title: "Pharmacy",
    image: Pharmacy,
    description:
      "The new concept of Telemedicine, bridge geographical distances and takes healthcare to the unreachable.",
  },
  {
    title: "Laboratory",
    image: Laboratory,
    description:
      "The new concept of Telemedicine, bridge geographical distances and takes healthcare to the unreachable.",
  },
  {
    title: 'Ambulance',
    image: Physiotherapy,
    description: 'Quick emergency response services with real-time tracking and trained paramedics.'
  },
  {
    title: 'Telemedicine',
    image: BloodBank,
    description: 'Consult with doctors remotely from the comfort of your home through secure video calls.'
  },
  {
    title: 'Home Care',
    image: Pharmacy,
    description: 'Comprehensive medical and personal care services provided in the comfort of your home.'
  },
  {
    title: 'Nursing',
    image: Laboratory,
    description: 'Qualified nursing professionals for post-surgery recovery, elderly care, and chronic conditions.'
  },
];

const OurServices: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleServices = services.slice(currentIndex, currentIndex + 4);

  const handleNext = () => {
    if (currentIndex + 4 < services.length) {
      setCurrentIndex(currentIndex + 4);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 4 >= 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };

  return (
    <section className={styles.ourServices}>
      <div className="ourService-info flex items-center justify-center">
        <div className="h-25 w-100 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">We Provide More</h2>
          <h3 className={`${styles.heading} text-2xl font-bold`}>
            Our Services
          </h3>
        </div>
      </div>

      <div className={styles.mainContainer}>
        {currentIndex > 0 && (
          <button className={styles.btn} onClick={handlePrev}>
            <AiFillLeftCircle className={styles.icon} size={34} />
          </button>
        )}

        <div className={styles.cardContainer}>
          {visibleServices.map((service, idx) => (
            <OurServiceCard
              key={idx}
              title={service.title}
              image={service.image}
              description={service.description}
            />
          ))}
        </div>

        {currentIndex + 4 < services.length && (
          <button className={styles.btn} onClick={handleNext}>
            <AiFillRightCircle className={styles.icon} size={34} />
          </button>
        )}
      </div>
    </section>
  );
};

export default OurServices;
