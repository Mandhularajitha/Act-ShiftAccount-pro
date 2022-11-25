import * as React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import StepperBar from "./StepperBar";
import { Route, Routes } from "react-router-dom";
import DetailsPage from "./DetailsPage";


export default function App() {

  return (
    <div className="App">

      <Routes>

        <Route path="/" element={<StepperBar />} />
        <Route path="/detailspage" element={<DetailsPage />} />
      </Routes>
      <StyledEngineProvider injectFirst>
        <div>
       
        </div>

      </StyledEngineProvider>

    </div>
  );
}