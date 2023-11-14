import React, { FC, useEffect, useState } from "react";
import classes from "./Dashboard.module.scss";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { useQuery } from "react-query";
import { getAllElevatorDetails } from "../../services/api";
import { useNavigate } from "react-router";
import { ROUTES } from "../../utils/constant";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks";
import { setElevatorData } from "../../redux/slices/elevatorData";
import { formatDate } from "../../utils/date";

export const Dashboard: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    isLoading,
    isError,
    data: elevatorsData,
    error: elevatorDataError,
  } = useQuery("elevatorsData", async () => {
    const data = await getAllElevatorDetails();
    return data;
  });

  useEffect(() => {
    elevatorsData && dispatch(setElevatorData(elevatorsData.data));
  }, []);

  // Calculate counts
  const operationalCount =
    elevatorsData?.data.filter((elevator) => elevator.state === "operational")
      .length || 0;
  const warningCount =
    elevatorsData?.data.filter((elevator) => elevator.state === "warning")
      .length || 0;
  const outOfServiceCount =
    elevatorsData?.data.filter((elevator) => elevator.state === "out-of-order")
      .length || 0;

  return (
    <div className={classes.dashboardContainer}>
      <Container>
        <Row className="mb-4 justify-content-center">
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <h5>Overview</h5>
                <Row>
                  <Col>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>State</th>
                          <th>Count</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Operational</td>
                          <td>
                            <Link to={`${ROUTES.ELEVATORS}/operational`}>
                              {" "}
                              {operationalCount}
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Warning</td>
                          <td>
                            <Link to={`${ROUTES.ELEVATORS}/warning`}>
                              {" "}
                              {warningCount}
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Out of order</td>
                          <td>
                            <Link to={`${ROUTES.ELEVATORS}/out-of-order`}>
                              {" "}
                              {outOfServiceCount}
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Total</td>
                          <td>
                            <Link to={`${ROUTES.ELEVATORS}/all`}>
                              {" "}
                              {operationalCount +
                                warningCount +
                                outOfServiceCount}
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4 justify-content-center">
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <h5>Recently Visited Elevators</h5>
                <Row>
                  <Col>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Fabrication Number</th>
                          <th>Last Inspection</th>
                        </tr>
                      </thead>
                      <tbody>
                        {elevatorsData.data.map((elevator) => (
                          <tr key={elevator.fabricationNumber}>
                            <td> {elevator.fabricationNumber}</td>
                            <td>{formatDate(elevator.lastInspection)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
