import { ConnectOptions } from 'mongoose';
import elevatorModel from './model/elevatorModel';
import elevatorData from './data/elevatorData';
import mongoose from 'mongoose';

const hasElevatorsData = async () => {
  const count = await elevatorModel.countDocuments({});
  return count > 0;
};

const saveElevators = async () => {
  try {
    // Save each elevator to the database
    for (const elevator of elevatorData) {
      const elevatorInstance = new elevatorModel(elevator);
      await elevatorInstance.save();
    }

    console.log('Elevators saved successfully!');
  } catch (error) {
    console.error('Error saving elevators:', error);
  } finally {
    mongoose.disconnect();
  }
};

export const initializeApp = async () => {
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    console.error("MONGO_URI is not defined in your environment variables.");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoURI);
    // Check if data already exists before saving
    const dataExists = await hasElevatorsData();
    if (!dataExists) {
      await saveElevators();
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};
