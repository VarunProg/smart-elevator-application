import express, { Request, Response } from "express";
import elevatorModel from "../model/elevatorModel";


// retrieve and return all elevator
export const getAllElevatorDetails = (req: Request, res: Response) => {
  elevatorModel
    .find()
    .then((elevators) => {
      res.json(elevators);
    })
    .catch((err) => {
      res
        .status(500)
        .json(
          `${err.message} : An error occurred while retreiving the elevator information`
        );
    });
};

// Get elevator details by ID
export const getAllElevatorDetailId = (req: Request, res: Response) => {
  const elevatorsId = req.params.id;
  elevatorModel
    .findById(elevatorsId)
    .then((elevator) => {
      if (!elevator) {
        return res.status(404).json({ error: "elevator not found" });
      }

      return res.json(elevator);
    })
    .catch((error) => {
      return res.status(500).json({ error: "Server error" });
    });
};
