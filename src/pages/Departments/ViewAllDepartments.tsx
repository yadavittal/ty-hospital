import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./ViewAllDepartments.module.scss";
import { allDepartments } from "../../constants/viewAllDepartments";
import { useNavigate } from 'react-router';
import Navbar from '../Navbar/Navbar';
interface Department {
  name: string;
  icon: string;
}

const ViewAllDepartments: React.FC = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const filteredDepartments: Department[] = allDepartments.filter(
    (dept: Department) =>
      dept.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.all_departments_container}>
      <Navbar/>
      <div className={styles.search_container}>
        <input
          className={styles.search_text}
          type="text"
          placeholder="Search department"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={styles.search_btn}>
          <FaSearch className={styles.icon} />
          <p>Search</p>
        </button>
      </div>
      <div className={styles.all_depts}>
        {filteredDepartments.map((dept, ind) => (
          <div key={ind} className={styles.dept_card} onClick={()=>navigate(`/view-department/${dept.name}`)}>
            <img src={dept.icon} alt={dept.name} className={styles.dept_icon} />
            <p className={styles.dept_name}>{dept.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllDepartments;
