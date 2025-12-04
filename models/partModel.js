import mongoose from "mongoose";

const partSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  partName: {
    type: String,
    required: false,
  },
  partNumber: {
    type: String,
    required: false,
  },
  vendor: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  quantity: {
    type: Number,
    required: false,
  },
  total: {
    type: Number,
    required: false,
  },
});

const Part = mongoose.model("Part", partSchema);

export default Part;
