import mongoose from "mongoose";
import CustomerSubdoc from "./customerSubdocModel.js";

const customerSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      auto: true,
    },
    customer: {
      type: CustomerSubdoc.schema,
      required: true,
    },
    repairTickets: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "RepairTicket",
          required: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
