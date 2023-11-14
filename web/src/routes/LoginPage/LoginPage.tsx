import { FC, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container, Row, Col } from "react-bootstrap";
import classes from "./LoginPage.module.scss";
import classNames from "classnames";
import { useAppDispatch } from "../../../hooks";
import { useNavigate } from "react-router";
import { ROUTES } from "../../utils/constant";

export const LoginPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loginWithRedirect, isAuthenticated, user, isLoading } = useAuth0();

  const navigateToDashboard = () => {
    navigate(ROUTES.DASHBOARD);
  };

  return (
    <Container className={classes.loginContainer}>
      <Row
        className={classNames(
          classes.loginMainContainer,
          "justify-content-center",
          "align-items-center"
        )}
      >
        <Col className={classes.loginBox}>
          <h3 className={classes.loginHeading}>Sign in to stay connected.</h3>
          <p className={classes.loginSubheading}>
            Welcome to smart elevator maintenance Application
          </p>

          {!isAuthenticated ? (
            <Button
              onClick={() => loginWithRedirect()}
              className={classes.loginButton}
            >
              Sign In
            </Button>
          ) : (
            <>
              <p className={classes.loggedInMessage}>
                You are already logged in.
              </p>
              <Button
                onClick={() => navigateToDashboard()}
                className={classes.loginButton}
              >
                Go back to Dashboard
              </Button>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};
