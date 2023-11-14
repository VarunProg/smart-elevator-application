import express from "express";
import { getAllElevatorDetails, getAllElevatorDetailId } from "../controller/controller"

const router = express.Router();

router.get('/getElevatorData', getAllElevatorDetails);
router.get('/getElevatorData/:id', getAllElevatorDetailId);

export default router;