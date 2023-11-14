import React, { FC, useEffect, useState } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  selectElevatorData,
  setElevatorData,
} from "../../redux/slices/elevatorData";
import { getAllElevatorDetails } from "../../services/api";
import { formatDate } from "../../utils/date";
import { ElevatorChart } from "./CustomPieChart/ElevatorChart";
import classes from "./ElevatorDetails.module.scss";

export const ElevatorDetails: FC = () => {
  const elevatorsData = useAppSelector(selectElevatorData);
  const { deviceIdentificationNumber } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    isLoading,
    isError,
    data: refetchElevatorsData,
  } = useQuery(
    "elevatorsData",
    async () => {
      const data = await getAllElevatorDetails();
      return data;
    },
    { enabled: !elevatorsData }
  );

  useEffect(() => {
    if (refetchElevatorsData) {
      dispatch(setElevatorData(refetchElevatorsData.data));
    }
  }, [refetchElevatorsData, dispatch]);

  const filteredElevatorsList = elevatorsData?.filter(
    (elevator) =>
      elevator.deviceIdentificationNumber === deviceIdentificationNumber
  );

  return (
    <>
      <Row className="mb-2 justify-content-center">
        <Col xs={12} md={8}>
          <Button
            className={classes.backButton}
            variant="secondary"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft />
          </Button>
        </Col>
      </Row>
      <Row className="mb-4 justify-content-center">
        <Col xs={12} md={8}>
          <Card>
            <Card.Body>
              <Table className={classes.table} striped bordered hover>
                <thead>
                  <tr>
                    <th>Device Number</th>
                    <th>Last Inspection</th>
                    <th>Elevator State</th>
                    <th>Elevator Type</th>
                    <th>Production Year</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredElevatorsList?.map((elevator) => (
                    <tr key={elevator.deviceIdentificationNumber}>
                      <td>{elevator.deviceIdentificationNumber}</td>
                      <td>{formatDate(elevator.lastInspection)}</td>
                      <td>{elevator.state}</td>
                      <td>{elevator.elevatorType}</td>
                      <td>{elevator.productionYear}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4 justify-content-center">
        <Col xs={12} md={8}>
          <Card>
            <Card.Body>
              {isLoading ? (
                <p>Loading...</p>
              ) : filteredElevatorsList?.length > 0 &&
                filteredElevatorsList[0].chart?.data.length > 0 ? (
                <ElevatorChart
                  chartData={filteredElevatorsList[0].chart.data}
                />
              ) : (
                "No analytical data available for this elevator."
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
