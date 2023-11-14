import React, { FC, useEffect } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { selectElevatorData, setElevatorData } from "../../redux/slices/elevatorData";
import { getAllElevatorDetails } from "../../services/api";
import { ROUTES } from "../../utils/constant";
import { formatDate } from "../../utils/date";
import { ArrowLeft } from "react-bootstrap-icons";
import classes from "./Elevators.module.scss";

export const Elevators: FC = () => {
  const elevatorsData = useAppSelector(selectElevatorData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { state } = useParams();

  const {
    isLoading,
    isError,
    data: refetchElevatorsData,
  } = useQuery("elevatorsData", async () => {
    const data = await getAllElevatorDetails();
    return data;
  }, { enabled: !elevatorsData });

  useEffect(() => {
    refetchElevatorsData && dispatch(setElevatorData(refetchElevatorsData.data));
  }, [refetchElevatorsData, dispatch]);

  const getFilteredElevators = () => {
    const elevatorState = state;
    return elevatorState !== "all"
      ? elevatorsData?.filter((elevator) => elevator.state === elevatorState)
      : elevatorsData;
  };

  const getPagaeTitle = () => {
    const elevatorState = state;
    return `${elevatorState?.charAt(0).toUpperCase() + elevatorState?.substring(1, elevatorState?.length)} elevators`;
  };

  return (
    <>
      <Row className="mb-2 justify-content-center">
        <Col xs={12} md={8}>
          <Button className={classes.backButton} variant="secondary" onClick={() => navigate(-1)}><ArrowLeft /></Button>
        </Col>
      </Row>
      <Row className="mb-4 justify-content-center">
        <Col xs={12} md={8}>
          <Card>
            <Card.Body>
              <h5>{getPagaeTitle()}</h5>
              <Row>
                <Col>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Device Identification Number</th>
                        <th>Last Inspection</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getFilteredElevators()?.map((elevator) => (
                        <tr key={elevator.deviceIdentificationNumber}>
                          <td> <Link to={`${ROUTES.ELEVATOR_DETAILS}/${elevator.deviceIdentificationNumber}`}>{elevator.deviceIdentificationNumber}</Link> </td>
                          <td> {formatDate(elevator.lastInspection)}</td>
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
    </>
  );
};

