import { useAuth0 } from "@auth0/auth0-react";
import classNames from "classnames";
import React, { FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Image, Nav } from "react-bootstrap";
import { ROUTES } from "../../utils/constant";
import classes from "./Header.module.scss";

export const Header: FC = () => {
  const { pathname } = useLocation();
  const {
    loginWithRedirect,
    isAuthenticated,
    user: userData,
    isLoading,
    logout: auth0Logout,
  } = useAuth0();

  const navigate = useNavigate();
  const handleLogoutClick = () => {
    auth0Logout();
    navigate(ROUTES.LOGIN);
  };

  const handleMenuItemClick = (e: React.MouseEvent, pathName: string) => {
    e.stopPropagation();
    navigate(pathName);
  };

  return (
    <>
      <header className={classes.header}>
        <div className={classes.headerMenu}>
          <div className={classes.topSection}>
            <Nav.Item
              className={classes.navItem}
              onClick={(e) => handleMenuItemClick(e, ROUTES.DASHBOARD)}
            >
              <Nav.Link
                as={Link}
                className={classes.navLink}
                href={ROUTES.DASHBOARD}
                eventKey="link-to-dashboard"
              >
                <label>Dashboard</label>
              </Nav.Link>
            </Nav.Item>
          </div>
          {isAuthenticated ? (
            <div>
              <Image
                className={classes.userProfile}
                src={userData?.picture}
                roundedCircle={true}
              />
              <label>{userData?.given_name}</label>
              <Button
                onClick={() => handleLogoutClick()}
                className={classes.logOutButton}
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <>
              {" "}
              <label>User data loading...</label>{" "}
            </>
          )}
        </div>
      </header>
    </>
  );
};
