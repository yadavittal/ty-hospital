import React from 'react';
import styles from './FindADoctor.module.scss';
import img from "../../../assets/svg/search.svg";
import { FIND_A_DOCTOR } from '../../../constants/UI_Constants';

const FindADoctor: React.FC = () => {
    return (
        <div className={`${styles.findDoctorCard}`}>
            <p className={`${styles.doctorstmt}`}>{FIND_A_DOCTOR.findADoctor}</p>
            <input className={`${styles.input}`} type="text" placeholder={FIND_A_DOCTOR.name} /><input className={`${styles.input}`} type="text" placeholder={FIND_A_DOCTOR.speciality} />
            <label className={`${styles.label}`} htmlFor="">{FIND_A_DOCTOR.availability}</label>  <label className={`${styles.switch}`}>
                <input type="checkbox" />
                <span className={`${styles.slider}`}></span>
            </label>
            <button className={`${styles.searchButton}`}><img className={`${styles.searchImage}`} src={img} alt="" />{FIND_A_DOCTOR.search}</button>
        </div>
    );
}

export default FindADoctor;
