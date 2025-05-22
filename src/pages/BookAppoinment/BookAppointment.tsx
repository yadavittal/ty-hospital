import React from 'react';
import styles from "./BookAppointment.module.scss";
import FindADoctor from '../../components/common/FindADoctor/FindADoctor';
import video from '../../assets/video-icon.svg';
import { BOOK_APPOINTMENT } from '../../constants/UI_Constants';
import { useNavigate } from 'react-router';
import AnimatedMainLayout from '../../components/AnimatedMainLayout/AnimatedMainLayout';

const BookAppointment: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className='grid grid-cols-2 mt-10'>
            <div>
                <h1 className={`${styles.headings}`}>{BOOK_APPOINTMENT.headings}<span className={`${styles.speciality}`}> {BOOK_APPOINTMENT.speciality}</span></h1>
                <p className={`${styles.para}`}>{BOOK_APPOINTMENT.para}</p>
                <button className={`${styles.button}`} onClick={() => navigate('/make-appointment')}>{BOOK_APPOINTMENT.bookAppointment} <span className={`${styles.arrow}`}>&rarr;</span></button>
                <span><img className={`${styles.video}`} src={video} alt="" /><span className={`${styles.videoText}`}>{BOOK_APPOINTMENT.video}</span></span>
                <div className={`${styles.signUpText}`}>
                    <span><span className={`${styles.member}`}>{BOOK_APPOINTMENT.member}</span><span className={`${styles.signup}`}>  {BOOK_APPOINTMENT.signUp}</span></span>
                </div>
                <FindADoctor />
            </div>
            <AnimatedMainLayout/>
        </div>
    );
}

export default BookAppointment;
