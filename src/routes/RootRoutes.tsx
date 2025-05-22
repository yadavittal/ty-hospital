import { Navigate, RouteObject } from "react-router";
import AppLayout from "../components/AppLayout/AppLayout";
import HomePage from "../pages/Home/HomePage";
import Departments from "../pages/Departments/Departments";
import OurServices from "../pages/OurServices/OurServices";
import MedicalHero from "../components/healthcareSection/HealthCare";
import DoctorDetails from "../components/common/DoctorDetails/DoctorDetails";
import MakeAppointment from "../pages/MakeAppointment/MakeAppointment";
import BookingSummary from "../components/bookingsummary/BookingSummary";
import ViewAllDepartments from "../pages/Departments/ViewAllDepartments"
import ViewDepartment from "../pages/Departments/ViewDepartment";

export const RootRoutes: RouteObject[] = [
  {
    path: "",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",
        element: <HomePage />,
      }
    ],
  },
  {
    path : "about-us",
    element : <DoctorDetails/>
  },
  {
    path : "departments",
    element : <Departments/>
  },
  {
    path:"services",
    element : <OurServices/>
  },
  {
    path : "contact-us",
    element : <MedicalHero/>
  },
  {
    path : "make-appointment",
    element : <MakeAppointment/>
  },
  {
    path : "booking-summary",
    element : <BookingSummary/>
  },
  {
    path : "view-all-departments",
    element :<ViewAllDepartments />
  },
  {
    path : "view-department/:id",
    element : <ViewDepartment/>
  }
];
