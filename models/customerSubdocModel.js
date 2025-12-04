import mongoose from "mongoose";

const customerSubdocSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  custID: {
    type: String,
    required: true,
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
});

const CustomerSubdoc = mongoose.model("CustomerSubdoc", customerSubdocSchema);

export default CustomerSubdoc;
