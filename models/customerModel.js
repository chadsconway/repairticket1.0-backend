import mongoose from "mongoose";
import CustomerSubdoc from "./customerSubdocModel";

const customerSchema = new mongoose.Schema(
  {
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
