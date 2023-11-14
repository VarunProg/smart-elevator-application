import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Container, Row, Col } from 'react-bootstrap';
import { formatDate } from '../../../utils/date';
import classes from "./ElevatorChart.module.scss";


export const ElevatorChart = ({ chartData }: { chartData: any[] }) => {
  const formattedChartData = chartData.map((dataPoint) => ({
    ...dataPoint,
    time: formatDate(dataPoint.time),
  }));

  return (
    <Container className={classes.elevatorChart}>
      <Row className="justify-content-center">
      <Col className={`${classes.chartDetails} mx-auto text-center`}>
          <h3 className={classes.heading}>Door Cycle Count Over Time</h3>
          <LineChart width={800} height={400} data={formattedChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="door_cycles_count" stroke="#8884d8" />
          </LineChart>
        </Col>
      </Row>
    </Container>
  );
};

