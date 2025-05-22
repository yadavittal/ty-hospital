import { AnimatedBox } from "../Animation/Animation";
import Image from "../../assets/jpg/animetedDocter.png";
import styles from '../common/Tooltip/Tooltip.module.scss'
import img from '../../assets/svg/report.svg';
import img2 from "../../assets/svg/PlusCircle.svg";
import img3 from "../../assets/svg/Down.svg";
import img4 from "../../assets/svg/Prescription.svg";

export default function AnimatedContentLayout() {
  return (
    <div style={{ width: "750px", height: "700px" }}>
      <div className="relative w-full h-screen overflow-hidden">
        <img src={Image} className="absolute left-20 top-25 z-0" alt="Doctor" />
        <AnimatedBox
          centerX={40}
          centerY={270}
          radius={200}
          angle={-Math.PI / 2}
          delay={0.2}
        >
          <div className={`${styles.tooltip} mt-5`}>
            <img className={`${styles.image}`} src={img} alt="content" />
            <div className={`${styles.content}`}>
              <h2 className={`${styles.heading1}`}>Compassionate Approach</h2>
              <h2 className={`${styles.heading2}`}>Holistic healing experience</h2>
            </div>
          </div>
        </AnimatedBox>
        <AnimatedBox
          centerX={200}
          centerY={300}
          radius={200}
          angle={-Math.PI / 6}
          delay={0.3}
        >
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
        </AnimatedBox>
        <AnimatedBox
          centerX={200}
          centerY={630}
          radius={200}
          angle={-Math.PI / 6}
          delay={0.3}
        >
          <div className={`${styles.tooltip3}`}>
            <span className={`${styles.heading5}`}>Schedule Hospital Tour</span>
            <img className={`${styles.img3}`} src={img3} />
          </div>
        </AnimatedBox>
        <AnimatedBox
          centerX={180}
          centerY={400}
          radius={200}
          angle={7 * Math.PI / 6}
          delay={0.4}
        >
          <div className={`${styles.tooltip1}`}>
            <div className={`${styles.content1}`}>
              <h2 className={`${styles.heading3}`}>Patient-Centered Care</h2>
              <h2 className={`${styles.heading4}`}>Providing personalized care</h2>
            </div>
            <div className={`${styles.circle} inline-block`}></div>
          </div>
        </AnimatedBox>
        <AnimatedBox
          centerX={150}
          centerY={300}
          radius={200}
          angle={(3 * Math.PI) / 4}
          delay={0.5}
        >
          <div className={`${styles.tooltip2}`}>
            <div className={`${styles.content1}`}>
              <h2 className={`${styles.heading3}`}>Life-Changing Treatments</h2>
              <h2 className={`${styles.heading4}`}>Creating a crucible for new beginnings</h2>
            </div>
            <div className={`${styles.circle} inline-block`}></div>
            <img className={`${styles.plus}`} src={img2} alt="content" />
          </div>
        </AnimatedBox>
      </div>
    </div>
  );
}