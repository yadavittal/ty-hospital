import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router";
import { RootRoutes } from "./routes/RootRoutes";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { DoctorProfileContext, FilterData } from "./context/DoctorFilterContext";

const App = () => {
  const router = createBrowserRouter([...RootRoutes]);
  const [doctor, setDoctor] = useState<FilterData[]>([]);

  const theme = createTheme({
    palette: {},
  });

  return (
    <ThemeProvider theme={theme}>
      <DoctorProfileContext.Provider value={{ doctor, setDoctor }}>
        <RouterProvider router={router} />
      </DoctorProfileContext.Provider>
    </ThemeProvider>
  );
};

export default App;