import { createContext, Dispatch, SetStateAction } from "react";

export interface FilterData {
    name: string;
    title: string;
    image: string;
    numberOfReviews: number;
    numberOfStars: number;
}

interface DoctorFilterContextType {
    filterDoc: FilterData[];
    setFilterDoc: Dispatch<SetStateAction<FilterData[]>>;
}

export const DoctorFilterContext = createContext<DoctorFilterContextType>({
    filterDoc: [],
    setFilterDoc: () => { },
});

interface DoctorProfileContextType {
    doctor: FilterData[];
    setDoctor: Dispatch<SetStateAction<FilterData[]>>;
}

export const DoctorProfileContext = createContext<DoctorProfileContextType>({
    doctor: [],
    setDoctor: () => { },
})