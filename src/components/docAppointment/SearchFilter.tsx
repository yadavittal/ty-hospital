import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./SearchFilter.scss";
import { Slider } from "@mui/material";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { hospitals, specialties } from "../../constants/filterConstants";
import { GrFilter } from "react-icons/gr";
import { profileCardDetails } from "../../constants/ProfileCardItems";
import { DoctorProfileContext, FilterData } from "../../context/DoctorFilterContext";
import { useContext } from "react";
import { DoctorFilterContext } from "../../context/DoctorFilterContext";

const SearchFilter: React.FC = () => {
    const [input, setInput] = useState("");
    const { setFilterDoc } = useContext(DoctorFilterContext);
    const { setDoctor } = useContext(DoctorProfileContext)

    const handleFilter = () => {
        const filterData: FilterData[] = profileCardDetails?.filter((ele) =>
            ele.name.toLowerCase().includes(input.toLowerCase())
        );
        setFilterDoc(filterData);
        setDoctor(filterData)
    };

    useEffect(() => {
        handleFilter();
    }, [input]);

    return (
        <div className="searchfilter-wrapper">
            <form className="search-form">
                <label className="field-label" htmlFor="search">
                    Search
                </label>
                <div className="input-group">
                    <input
                        id="search"
                        type="text"
                        placeholder="Search doctor"
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                    />
                    <button type="button" className="icon-btn" aria-label="search">
                        <CiSearch size={20} color="white" />
                    </button>
                </div>

                <div className="hospital-wrapper">
                    <label className="field-label" htmlFor="hospital">
                        Select hospital
                    </label>
                    <div className="inner-wrapper relative flex items-center">
                        <select id="hospital" className="dropdowncommon">
                            {hospitals.map((data) => (
                                <option value="{data.name}">{data.name}</option>
                            ))}
                        </select>
                        <IoIosArrowDown
                            size={18}
                            color="#8E44AD"
                            className="arrow-down absolute right-5 pointer-events-none"
                        />
                    </div>
                </div>
                <div className="country-wrapper">
                    <label className="field-label" htmlFor="country">
                        Country
                    </label>
                    <div className="inner-wrapper relative flex items-center">
                        <select id="country" className="dropdowncommon">
                            {hospitals.map((data) => (
                                <option value="data.country">{data.country}</option>
                            ))}
                        </select>
                        <IoIosArrowDown
                            size={18}
                            color="#8E44AD"
                            className="arrow-down absolute right-5 pointer-events-none"
                        />
                    </div>
                </div>
                <div className="dist-wrapper">
                    <label className="field-label" htmlFor="district">
                        District or State
                    </label>
                    <div className="inner-wrapper flex items-center relative">
                        <select id="district" className="dropdowncommon">
                            {hospitals.map((data) => (
                                <option value="{data.state}">{data.state}</option>
                            ))}
                        </select>
                        <IoIosArrowDown
                            size={18}
                            color="#8E44AD"
                            className="arrow-down absolute right-5 pointer-events-none"
                        />
                    </div>
                </div>

                <div className="filters-wrapper">
                    <label className="field-label" htmlFor="search">
                        Filters
                    </label>
                    <div className="input-group">
                        <input
                            id="search"
                            type="text"
                            placeholder="filter departments/hospitals"
                        />
                        <button type="button" className="icon-btn" aria-label="search">
                            <GrFilter size={20} color="white" />
                        </button>
                    </div>
                </div>

                <label className="field-label">Gender of doctor</label>
                <div className="radio-group">
                    <label htmlFor="male" className="radio-label">
                        <input type="radio" id="male" name="gender" value="Male" />
                        <span>Male</span>
                    </label>
                    <label htmlFor="female" className="radio-label">
                        <input type="radio" id="female" name="gender" value="Female" />
                        <span>Female</span>
                    </label>
                </div>

                <div className="speciality-block">
                    <div className="spec-header">
                        <label className="field-label">Speciality</label>
                        <div className="arrow-wrapper relative flex items-center">
                            <input type="text" placeholder="Search specialities" />
                            <IoIosArrowUp
                                size={18}
                                color="#8E44AD"
                                className="uparrow-icon absolute right-5 cursor-pointer pointer-events-none"
                            />
                        </div>
                    </div>
                    <div className="spec-dropdown">
                        <ul className="list-wrapper">
                            {specialties.map((specialty, index) => {
                                const id = `specialty-${index}`;
                                return (
                                    <li className="list-drop" key={id}>
                                        <input type="checkbox" id={id} />
                                        <label htmlFor={id}>{specialty}</label>
                                    </li>
                                );
                            })}
                        </ul>
                        <button type="button" className="load-more">
                            Load More
                        </button>
                    </div>
                </div>

                <div className="exp-wrapper">
                    <label className="field-label" htmlFor="experience">
                        Experience: <span className="highlight">from 10 years</span>
                    </label>
                    <br />
                    <Slider
                        className="custom-slider"
                        defaultValue={30}
                        style={{ color: "#8e44ad" }}
                    />
                </div>

                <div className="btn-wrapper">
                    <button type="submit" className="submit-btn">
                        Show Doctors
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchFilter;
