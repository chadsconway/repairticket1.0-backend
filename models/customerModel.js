import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    customer: {
      custID: {
        type: String,
        required: true,
        unique: true,
      },
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: false,
      },
      phone: {
        type: String,
        required: false,
      },
      streetAddress: {
        type: String,
        required: false,
      },
      unitNumber: {
        type: String,
        required: false,
      },
      city: {
        type: String,
        required: false,
      },
      state: {
        type: String,
        required: false,
      },
      zipCode: {
        type: String,
        required: false,
      },
    },
    repairTickets: [
      {
        mdbID: {
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
