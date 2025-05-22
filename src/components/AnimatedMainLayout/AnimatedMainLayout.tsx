import React from 'react'
import { AnimatedBox } from '../Animation/Animation'
import bookAppointmentImage from "../../assets/svg/bookAppointmentImage.png";
import styles from "../../components/common/Tooltip/Tooltip.module.scss"
import style from "../../pages/BookAppoinment/BookAppointment.module.scss"
import { TbReport } from 'react-icons/tb';
import { IoSearch } from 'react-icons/io5';
import { IoCall } from "react-icons/io5";


const AnimatedMainLayout: React.FC = () => {
    return (
        <div>
            <div className="relative w-full h-screen overflow-hidden">
                <img src={bookAppointmentImage} className={`${style.doctorImage} w-[65%] h-[85%] absolute left-20 bottom-38 z-0`} alt="Doctor" />
                <AnimatedBox
                    centerX={0}
                    centerY={300}
                    radius={200}
                    angle={-Math.PI / 2}
                    delay={0.2}
                >
                    <div className={`${styles.tooltip5}`}>
                        <IoSearch size={40} color='#812DA4' className={`${styles.image5}`} />
                        <div className={`${styles.content}`}>
                            <h2 className={`${styles.heading3}`}>Well Qualified Doctors</h2>
                            <h2 className={`${styles.heading4}`}>Treat with care</h2>
                        </div>
                    </div>
                </AnimatedBox>
                <AnimatedBox
                    centerX={180}
                    centerY={350}
                    radius={200}
                    angle={7 * Math.PI / 6}
                    delay={0.4}
                >
                    <div className={`${styles.tooltip5}`}>
                        <TbReport size={40} color='#812DA4' className={`${styles.image5}`} />
                        <div className={`${styles.content}`}>
                            <h2 className={`${styles.heading3}`}>Book an appointment</h2>
                            <h2 className={`${styles.heading4}`}>Online appointment</h2>
                        </div>
                    </div>
                </AnimatedBox>
                <AnimatedBox
                    centerX={450}
                    centerY={110}
                    radius={200}
                    angle={(3 * Math.PI) / 4}
                    delay={0.5}
                >
                    <div className={`${styles.tooltip6}`}>
                        <div className={`${styles.content}`}>
                            <h2 className={`${styles.heading3}`}>Contact no</h2>
                            <h2 className={`${styles.heading3}`}>+971253454944</h2>
                        </div>
                        <IoCall size={40} color='#DEDEDE' className={`${styles.image5}`} />
                    </div>
                </AnimatedBox>
            </div>
        </div>
    )
}

export default AnimatedMainLayout