import React from "react";
import styles from './DoctorProfileCard.module.scss';
import { IoStarSharp } from "react-icons/io5";
import { DOCTOR_PROFILE_CARD } from "../../../constants/UI_Constants";

type DoctorProfileCardProps = {
    cardDetails: {
        name: string;
        title: string;
        image: string;
        numberOfReviews: number;
        numberOfStars: number;
    };
    onClick?: () => void;
};

const DoctorProfileCard: React.FC<DoctorProfileCardProps> = ({
    cardDetails,
    onClick,
}) => {
    const { name, title, image, numberOfReviews, numberOfStars } = cardDetails;

    return (
        <div
            className={`${styles.profileCard} cursor-pointer`}
            onClick={onClick}
        >
            <div className={`${styles.starCard}`}>
                <IoStarSharp size={19} className="text-white inline" />
                <span className={`${styles.numberOfStars}`}>{numberOfStars.toFixed(1)}</span>
            </div>

            <div className={`${styles.flexCenter}`}>
                <img className={`${styles.image}`} src={image} alt={name} />
            </div>

            <h3 className={`${styles.name}`}>{name}</h3>
            <p className={`${styles.title}`}>{title}</p>
            <p className={`${styles.numberOfReviews}`}>
                {numberOfReviews} {DOCTOR_PROFILE_CARD.reviews}
            </p>
        </div>
    );
};

export default DoctorProfileCard;
