import React from "react";
import { Routes, Route } from "react-router-dom";
import AddUnit from "./pages/buildings/AddUnit";
import Units from "./pages/units/Units";
import NavBar from "./components/NavBar/NavBar";
import AddBuilding from "./pages/buildings/AddBuilding";

function MainLayoutRoutes() {
  return (
    <>
      <div className="flex mb-8 sm:mb-0 pt-2 sm:pt-0 bg-[#F8F8F9] h-[100vh]">
        <NavBar />
        <div className="relative h-[100vh] w-72 min-w-[18rem] max-w-[18rem] pt-12 px-4 hidden sm:block bg-[#F8F8F9]"></div>
        <Routes>
          <Route path="/building" element={<AddBuilding type={"edit"} />} />
          <Route path="/units" element={<Units />} />
          <Route path="/add_unit" element={<AddUnit />} />
          <Route
            path="*"
            element={
              <p className="pt-12 mx-4 w-full text-center">Coming soon.</p>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default MainLayoutRoutes;
