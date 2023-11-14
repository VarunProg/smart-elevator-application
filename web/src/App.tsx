import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./utils/constant";
import {
  NotFound,
  ProtectedRoute,
  LandingPage,
  LoginPage,
  Dashboard,
  ElevatorDetails,
  Elevators,
} from "./routes";
import "bootstrap/scss/bootstrap.scss";

const App: FC = () => {
  return (
    <Routes>
      {/* <Route element={<ProtectedRoute />}> */}
        <Route path={ROUTES.LANDING_PAGE} element={<LandingPage />}>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={`${ROUTES.ELEVATORS}/:state`} element={<Elevators />} />
          <Route path={`${ROUTES.ELEVATOR_DETAILS}/:deviceIdentificationNumber`} element={<ElevatorDetails />} />
        </Route>
      {/* </Route> */}
      <Route path="*" element={<NotFound />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
    </Routes>
  );
};

export default App;
