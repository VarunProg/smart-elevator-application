import mongoose, { Document, Schema } from 'mongoose';

export interface Elevator {
  _id: string;
  fabricationNumber: string;
  address: string;
  floorNumber: number;
  deviceIdentificationNumber: string;
  manufacturerName: string;
  productionYear: number;
  elevatorType: string;
  state: string;
  lastInspection?: Date;
  chart?: {
    name: string;
    data: {
      time: Date;
      door_cycles_count: number;
      door_openings_count: number;
      door_closings_count: number;
      door_closed_count: number;
      door_opened_count: number;
    }[];
  };
  warningMessage?: string;
  reason?: string;
}

export type ElevatorModel = Elevator & Document;

const doorCycleCountSchema = new Schema({
  time: { type: Date, required: true },
  door_cycles_count: { type: Number, required: true },
  door_openings_count: { type: Number, required: true },
  door_closings_count: { type: Number, required: true },
  door_closed_count: { type: Number, required: true },
  door_opened_count: { type: Number, required: true },
});

const elevatorSchema = new Schema({
  fabricationNumber: { type: String, required: true },
  address: { type: String, required: true },
  floorNumber: { type: Number, required: true },
  deviceIdentificationNumber: { type: String, required: true },
  manufacturerName: { type: String, required: true },
  productionYear: { type: Number, required: true },
  elevatorType: { type: String, required: true },
  state: { type: String, required: true },
  lastInspection: { type: Date },
  chart: {
    name: { type: String },
    data: [doorCycleCountSchema],
  },
  warningMessage: { type: String },
  reason: { type: String },
});

export default mongoose.model<ElevatorModel>('Elevator', elevatorSchema);
