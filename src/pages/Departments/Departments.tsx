import { useState } from 'react';
import styles from './Departments.module.scss';
import clsx from 'clsx';
import { DEPARTMENTS_DATA } from "../../constants/newItem";
import { DEPARTMENTS_PAGE_TEXT } from "../../constants/newItem";
import { useNavigate } from 'react-router';
export interface DepartmentsItem {
    id: number,
    name: string,
    description: string,
    image: string
}
const departments: DepartmentsItem[] = DEPARTMENTS_DATA;

const Departments: React.FC = () => {
    
    const [activeTab, setActiveTab] = useState(1);
    const navigate = useNavigate();
    return (
        <div className={styles.departments}>
            <h2 className={styles.title}>{DEPARTMENTS_PAGE_TEXT.title}</h2>
            <p className={styles.subtitle}>{DEPARTMENTS_PAGE_TEXT.subtitle}</p>
            <div className={styles.container}>
                {departments.map((dept) => (
                    <div
                        key={dept.id}
                        className={clsx(styles.tab, {
                            [styles.active]: activeTab === dept.id,
                        })}
                        onClick={() => setActiveTab(dept.id)}
                    >
                        <div className={styles.tabHeader}>
                            <span className={styles.tabIndex}>
                                {dept.id < 10 ? `0${dept.id}` : dept.id}
                            </span>
                            <span className={styles.tabTitle}>{dept.name}</span>
                        </div>
                        {activeTab === dept.id && (
                            <div className={styles.tabContent}>
                                <div className={styles.subContent}>
                                    <p className={styles.description}>{dept.description}</p>
                                    <button onClick={()=>navigate("/view-all-departments")} className={styles.button}>{DEPARTMENTS_PAGE_TEXT.viewAllButton}</button>
                                </div>
                                <img src={dept.image} alt={dept.name} className={styles.image} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Departments;
