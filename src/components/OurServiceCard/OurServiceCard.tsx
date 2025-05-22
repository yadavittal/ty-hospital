import React from 'react';
import styles from './OurServiceCard.module.scss';
  import { AiFillRightCircle  } from 'react-icons/ai';

interface OurServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const OurServiceCard: React.FC<OurServiceCardProps> = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.iconWrapper}>
           <h2 className={styles.readMore}>Read More</h2>
           <AiFillRightCircle size={30} />
      </div>
    </div>
  );
};

export default OurServiceCard;
