import React, { useContext, useState } from "react";
import DoctorProfileCard from "../common/DoctorProfileCard/DoctorProfileCard";
import { profileCardDetails } from "../../constants/ProfileCardItems";
import DoctorDetailsPopup from "../common/DoctorDetailsPopup/DoctorDetailsPopup";
import { DoctorFilterContext, DoctorProfileContext } from "../../context/DoctorFilterContext";

const DoctorProfilePage: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<(typeof profileCardDetails)[0] | null>(profileCardDetails[0]); // Default to the first doctor
  const { filterDoc } = useContext(DoctorFilterContext);
  const { setDoctor } = useContext(DoctorProfileContext)

  const handleCardClick = (cardDetails: (typeof profileCardDetails)[0]) => {
    setSelectedDoctor(cardDetails);
    setDoctor([cardDetails])
  };

  return (
    <div>
      {selectedDoctor && <DoctorDetailsPopup doctor={selectedDoctor} />}

      <div className="mt-5 w-full flex gap-4 justify-content-center flex-wrap h-[1050px] overflow-y-auto">
        {filterDoc.map((card, id) => (
          <DoctorProfileCard
            key={id}
            cardDetails={card}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorProfilePage;
