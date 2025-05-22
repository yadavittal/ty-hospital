import React from 'react';
import styles from './Tooltip.module.scss'
import img from '../../../assets/svg/report.svg';
import img2 from "../../../assets/svg/PlusCircle.svg";
import img3 from "../../../assets/svg/Down.svg";
import img4 from "../../../assets/svg/Prescription.svg";
import { IoCallOutline, IoSearch } from 'react-icons/io5';
import { TbReport } from "react-icons/tb";

const Tooltip: React.FC = () => {
    return (
        <div className='flex flex-col gap-5 pb-5'>

            <div className={`${styles.tooltip} mt-5`}>
                <img className={`${styles.image}`} src={img} alt="content" />
                <div className={`${styles.content}`}>
                    <h2 className={`${styles.heading1}`}>Compassionate Approach</h2>
                    <h2 className={`${styles.heading2}`}>Holistic healing experience</h2>
                </div>
            </div>

            <div className={`${styles.tooltip1}`}>
                <div className={`${styles.content1}`}>
                    <h2 className={`${styles.heading3}`}>Patient-Centered Care</h2>
                    <h2 className={`${styles.heading4}`}>Providing personalized care</h2>
                </div>
                <div className={`${styles.circle} inline-block`}></div>
            </div>

            <div className={`${styles.tooltip2}`}>
                <div className={`${styles.content1}`}>
                    <h2 className={`${styles.heading3}`}>Life-Changing Treatments</h2>
                    <h2 className={`${styles.heading4}`}>Creating a crucible for new beginnings</h2>
                </div>
                <div className={`${styles.circle} inline-block`}></div>
                <img className={`${styles.plus}`} src={img2} alt="content" />
            </div>

            <div className={`${styles.tooltip3}`}>
                <span className={`${styles.heading5}`}>Schedule Hospital Tour</span>
                <img className={`${styles.img3}`} src={img3} />
            </div>

            <div className={styles.tooltip4}>
                <div className={styles.topContent}>
                    <img className={styles.image4} src={img4} alt="content" />
                    <div className={styles.content4}>
                        <h2 className={styles.heading3}>Guiding You to Better Health</h2>
                        <h2 className={styles.heading4}>Trusted Medical Care</h2>
                    </div>
                </div>
                <div className={styles.last}>
                    <h1>Building Healthier Futures Together</h1>
                </div>
            </div>

            <div className={`${styles.tooltip5}`}>
                <IoSearch size={40} color='#812DA4' className={`${styles.image5}`} />
                <div className={`${styles.content}`}>
                    <h2 className={`${styles.heading3}`}>Well Qualified Doctors</h2>
                    <h2 className={`${styles.heading4}`}>Treat with care</h2>
                </div>
            </div>

            <div className={`${styles.tooltip5}`}>
                <TbReport size={40} color='#812DA4' className={`${styles.image5}`} />
                <div className={`${styles.content}`}>
                    <h2 className={`${styles.heading3}`}>Book an appointment</h2>
                    <h2 className={`${styles.heading4}`}>Online appointment</h2>
                </div>
            </div>

            <div className={`${styles.tooltip6}`}>
                <div className={`${styles.content}`}>
                    <h2 className={`${styles.heading3}`}>Contact no</h2>
                    <h2 className={`${styles.heading3}`}>+971253454944</h2>
                </div>
                <IoCallOutline size={40} color='#DEDEDE' className={`${styles.image5}`} />
            </div>
        </div>
    );
}

export default Tooltip;
