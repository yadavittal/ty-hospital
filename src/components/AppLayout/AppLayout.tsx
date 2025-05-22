import { Outlet } from "react-router";
import "./AppLayout.scss";
import Navbar from "../../pages/Navbar/Navbar";
import MedicalHero from "../healthcareSection/HealthCare";
import NewsFeed from "../healthcareSection/NewsFeed";
import BookAppointment from "../../pages/BookAppoinment/BookAppointment";
import Departments from "../../pages/Departments/Departments";
import Footer from "../Footer/Footer";
import OurServices from "../../pages/OurServices/OurServices";
import DoctorDetails from "../common/DoctorDetails/DoctorDetails";
import { Element } from "react-scroll";

const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen items-center overflow-x-hidden overflow-y-hidden w-full">
      <Navbar />
      <Element name="book-appointment">
        <BookAppointment />
      </Element>
      <Element name="about-us">
        <DoctorDetails />
      </Element>
      <Element name="departments">
        <Departments />
      </Element>
      <Element name="services">
        <OurServices />
      </Element>
      <Element name="contact-us">
        <MedicalHero />
      </Element>
      <Element name="news-feed">
        <NewsFeed />
      </Element>
      <div className="content-section w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
