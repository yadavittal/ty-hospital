import React, { useContext } from "react";
import "./BookingSummary.scss";
import imagee from "../../assets/svg/DocMonitor.svg";
import cal from "../../assets/icons/calender.svg"
import tele from "../../assets/icons/telephone.svg"
import msg from "../../assets/icons/message.svg"
import Navbar from "../../pages/Navbar/Navbar";
import { DoctorProfileContext } from "../../context/DoctorFilterContext";

const BookingSummary: React.FC = () => {
    const { doctor } = useContext(DoctorProfileContext);
    const { image, name, title, } = doctor[0];

    return (
        <div className="main-wrapper w-[90%] h-[100%] ">
            <Navbar />
            <div className="profile-wrapper">
                <div className="left-wrapper">
                    <div className="img-wrapper">
                        <img src={image} alt="doctor" className="doc-img" />
                        <span className="rating">★ 5.0</span>
                    </div>
                    <div className="icon-wrapper">

                        <span>
                            <img src={cal} alt="Calendar icon" className="" />
                        </span>

                        <span>
                            <img src={tele} alt="Telephone icon" className="" />
                        </span>

                        <span>
                            <img src={msg} alt="Calendar icon" className="" />
                        </span>

                    </div>
                    <div className="price">Rs. 700 – Rs. 1000</div>
                    <div className="status">Online / Offline</div>
                    <button className="btn">Book Appointment</button>
                    <div className="tags">
                        <span>Friendly</span>
                        <span>Good Listener</span>
                        <span>Patient</span>
                    </div>
                </div>

                <div className="right-wrapper">
                    <h1>{name}</h1>
                    <p className="subtitle">
                        {title}
                    </p>
                    <div className="hospital-detailes">

                        <strong>Multi-speciality Hospitals Pvt Ltd - Bengaluru</strong>
                        <p>
                            Kwame Nkrumah Circle , Accra Ghana lorem <br /> ipsum dolor sit
                            amet,
                            <br />
                            constnene afipesing elie, sed ddelekj
                        </p>
                    </div>

                    <div className="section">
                        <h3>Specialities</h3>
                        <div className="chips">
                            <span>Oral Radiology</span>
                            <span>Implantology</span>
                            <span>Cosmetic Dentistry</span>
                        </div>
                    </div>

                    <div className="section">
                        <h3>Issues</h3>
                        <div className="chips">
                            <span>Oral Radiology</span>
                            <span>Implantology</span>
                            <span>Cosmetic Dentistry</span>
                        </div>
                    </div>

                    <div className="section">
                        <h3>Qualification</h3>
                        <p>
                            <strong>Licences:</strong> of implant and cosmetic dentistry
                        </p>
                    </div>

                    <div className="section">
                        <h3>Experience</h3>
                        <p>
                            <strong>Licences:</strong> of implant and cosmetic dentistry (
                            <span className="highlight">15 years of Experience</span>)
                        </p>
                    </div>
                </div>
            </div>

            <div className="bottom-wrapper ">
                <div className="left-wrapper">
                    <div className="inner-wrapper ">
                        <h1 className="header">Office</h1>
                        <span className="subtitle">15 Pictures</span>
                    </div>
                    <div className="image-wrapper">
                        <img src={imagee} alt="image" className="image" />
                    </div>
                </div>

                <div className="right-wrapper">
                    <h2>About</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim
                        lorem sit rhoncus ullamcorper. Dui lorem duis amet vulputate. Nunc
                        lobortis adipiscing faucibus diam amet sed. Scelerisque mattis
                        tincidunt mattis a. Risus varius nunc sed ut amet in. Ut tristique
                        vulputate ac volutpat purus scelerisque ac id. Quis quam tellus,
                        adipiscing sit diam. Nibh ipsum nibh vitae, lacus arcu metus mi at
                        ultricies. Volutpat habitasse nunc aenean risus. At suscipit
                        suscipit magna est neque aliquam facilisis eu.{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookingSummary;
