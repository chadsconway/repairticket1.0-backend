import mongoose from "mongoose";
const laborSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  date: {
    type: Date,
    required: true,
  },
  workPerformed: {
    type: String,
    required: true,
  },
  hoursWorked: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const LaborItem = mongoose.model("Labor", laborSchema);

export default LaborItem;
