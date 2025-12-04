import mongoose from "mongoose";
import Part from "./partModel.js";
import CustomerSubdoc from "./customerSubdocModel.js";
import LaborItem from "./laborModel.js";

const repairTicketSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  dates: [
    {
      dateReceived: {
        type: Date,
        required: false,
      },
      dateInProgress: {
        type: Date,
        required: false,
      },
      dateOnHold: {
        type: Date,
        required: false,
      },
      dateCompleted: {
        type: Date,
        required: false,
      },
      dateDelivered: {
        type: Date,
        required: false,
      },
    },
  ],
  customer: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CustomerSubdoc",
      required: true,
    },
  },
  serviceTag: {
    type: String,
    required: true,
    unique: true,
  },
  product: {
    type: String,
    required: false,
  },
  yearOfProduct: {
    type: Number,
    required: false,
  },
  makeAndModel: {
    type: String,
    required: false,
  },
  serialNumber: {
    type: String,
    required: false,
  },
  issueDescription: {
    type: String,
    required: false,
  },
  issueDescriptions: {
    type: number,
  },
  dateReceived: {
    type: Date,
    required: false,
  },
  parts: [
    {
      type: Part.schema,
      required: false,
    },
  ],
  workLog: [
    {
      type: LaborItem.schema,
      required: false,
    },
  ],
  status: {
    type: String,
    required: false,
    default: "Received",
  },
});
