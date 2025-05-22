import React from 'react';
import styles from '../../common/DoctorDetailsPopup/DoctorDetailsPopup.module.scss';
import { FaRegCalendarCheck } from "react-icons/fa6";
import { BiLogoMessenger } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { VIEW_PROFILE } from '../../../constants/UI_Constants';
import { useNavigate } from 'react-router';

type DoctorDetailsPopupProps = {
    doctor: {
        name: string;
        title: string;
        image: string;
        numberOfReviews: number;
        numberOfStars: number;
    };
};

const DoctorDetailsPopup: React.FC<DoctorDetailsPopupProps> = ({ doctor }) => {
    const { name, title, image, numberOfReviews } = doctor;
    const navigate = useNavigate();

    return (
        <div className={`${styles.card} grid grid-cols-[30%_20%_50%]`}>
            <div>
                <div className={`${styles.flexCenter}`}>
                    <img className={`${styles.image}`} src={image} alt={name} />
                </div>
                <h3 className={`${styles.name}`}>{name}</h3>
                <p className={`${styles.title}`}>{title}</p>

                <div className={`${styles.icons}`}>
                    <FaRegCalendarCheck color='white' size={29} className={`${styles.icon}`} />
                    <IoPerson size={29} color='white' className={`${styles.icon}`} />
                    <BiLogoMessenger size={29} color='white' className={`${styles.icon}`} />
                </div>

                <p className={`${styles.numberOfReviews}`}>{numberOfReviews} {VIEW_PROFILE.reviews}</p>
            </div>

            <div>
                <div className={`${styles.border}`}>
                    <div className={`${styles.division}`}>
                        <h3 className={`${styles.headings}`}>{VIEW_PROFILE.degree}</h3>
                        <h3 className={`${styles.details}`}>{VIEW_PROFILE.dds}</h3>
                    </div>
                    <div className={`${styles.division}`}>
                        <h3 className={`${styles.headings}`}>{VIEW_PROFILE.speciality}</h3>
                        <h3 className={`${styles.details}`}>{title}</h3>
                    </div>
                    <div className={`${styles.division}`}>
                        <h3 className={`${styles.headings}`}>{VIEW_PROFILE.chamber}</h3>
                        <h3 className={`${styles.details}`}>{VIEW_PROFILE.lorem}</h3>
                    </div>
                </div>
            </div>

            <div>
                <button className={`${styles.button}`} onClick={(e) => {
                    e.preventDefault()
                    navigate("/booking-summary")
                }}
                >{VIEW_PROFILE.button}</button>
                <div className={`${styles.border2}`}>
                    <h3 className={`${styles.head}`}>{VIEW_PROFILE.description}</h3>
                    <h5 className={`${styles.body}`}>
                        {VIEW_PROFILE.para}
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetailsPopup;
