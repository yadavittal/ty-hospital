import React from 'react';
import styles from '../DoctorDetails/DoctorDetails.module.scss';
import { PiArrowBendDownRight } from "react-icons/pi";
import { DOCTOR_DETAILS } from '../../../constants/UI_Constants';
import AnimatedContentLayout from '../../AnimatedComponent/AnimatedContentLayout';

const DoctorDetails: React.FC = () => {
    return (
        <div className={`grid grid-cols-[60%_40%] ${styles.doctorDetailsContainer}`}>
            <div className={styles.imageContainer}>
                <AnimatedContentLayout/>
            </div>
            <div className={`${styles.secondContainer}`}>
                <div className={styles.heading}>
                    <h1 className={`${styles.whoWeAre}`}>Who We Are</h1>
                    <h1 className={`${styles.vHospital}`}>Multi-speciality Hospitals</h1>
                </div>
                <p className={`${styles.details}`}>{DOCTOR_DETAILS.details}</p>
                <ul>
                    <li className={`${styles.listItem}`}>
                        <PiArrowBendDownRight size={25} className={`${styles.bendRightArrow}`} />
                        <span className={`${styles.text}`}>{DOCTOR_DETAILS.text1}</span>
                    </li>
                    <li className={`${styles.listItem}`}>
                        <PiArrowBendDownRight size={25} className={`${styles.bendRightArrow}`} />
                        <span className={`${styles.text}`}>{DOCTOR_DETAILS.text2}</span>
                    </li>
                    <li className={`${styles.listItem}`}>
                        <PiArrowBendDownRight size={25} className={`${styles.bendRightArrow}`} />
                        <span className={`${styles.text}`}>{DOCTOR_DETAILS.text3}</span>
                    </li>
                    <li className={`${styles.listItem}`}>
                        <PiArrowBendDownRight size={25} className={`${styles.bendRightArrow}`} />
                        <span className={`${styles.text}`}>{DOCTOR_DETAILS.text4}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DoctorDetails;
