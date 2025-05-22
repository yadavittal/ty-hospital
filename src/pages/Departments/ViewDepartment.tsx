import React from 'react'
import { useParams } from 'react-router'
import { allDepartments } from '../../constants/viewAllDepartments';
import Navbar from '../Navbar/Navbar';
import styles from "./ViewDepartment.module.scss"
import img from "../../assets/jpg/departmentsImage.jpg"

const ViewDepartment: React.FC = () => {
    const { id } = useParams();

    const department = allDepartments.filter(dept => dept.name === id)

    return (
        <div className={styles.main_container}>
            <Navbar />
            <div >
                {
                    department.map((dept, ind) => (
                        <div key={ind} className={styles.top_container}>
                            <img src={dept.icon} alt="" height={"200px"} width={"200px"} />
                            <div className={styles.details}>
                                <p className={styles.title}>{dept.name} Department</p>
                                <p className={styles.content}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias optio ullam corporis voluptate repellendus. Quas alias ipsa ab? Ea culpa excepturi et voluptatum sed at fugit, quod earum pariatur. Deleniti.</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={styles.bottom_container}>
                <img src={img} alt="" height={"300px"} width={"300px"} />
                <div className={styles.about}>
                    <p className={styles.title}>Why Vadamalayan Hospitals ?</p>
                    <p className={styles.content}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, dicta voluptates pariatur architecto atque optio minima quod voluptate impedit officia praesentium itaque, porro unde provident? Fuga sapiente cumque nam quas?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sint a atque quis! Voluptas debitis adipisci eum iure et perferendis consectetur excepturi accusamus maxime ullam. Dicta commodi est esse maxime.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ViewDepartment