import React, { useState } from 'react'
import Form from '../../components/docAppointment/Form';
import SearchFilter from '../../components/docAppointment/SearchFilter';
import DoctorProfilePage from '../../components/DoctorProfilePage/DoctorProfilePage';
import Navbar from '../Navbar/Navbar';
import { DoctorFilterContext, FilterData } from '../../context/DoctorFilterContext';

const MakeAppoinment: React.FC = () => {
  const [filterDoc, setFilterDoc] = useState<FilterData[]>([]);

  return (
    <div className='make-appointment-page-wrapper'>
      <Navbar />
      <Form />
      <div className='inner-wrapper grid grid-cols-[30%_70%] p-5'>
        <DoctorFilterContext.Provider value={{ filterDoc, setFilterDoc }}>
          <SearchFilter />
          <DoctorProfilePage />
        </DoctorFilterContext.Provider>
      </div>
    </div>
  )
}

export default MakeAppoinment;
