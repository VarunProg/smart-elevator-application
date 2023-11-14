import React, { FC } from "react";
import classes from "./LandingPage.module.scss";
import { Header} from "../../components";
import { Outlet } from "react-router";

interface LandingPageProps {
  children?: React.ReactNode;
}

export const LandingPage: FC<LandingPageProps> = ({ children }) => {

  return (
    <div className={classes.layout}>
      <div className={classes.wrapper}>
        <div className={classes.dashboardPanel}>
          <Header />
          <div className={classes.contentWrapper}>
            <div className={classes.content} data-testid="main-content">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
