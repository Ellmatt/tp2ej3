import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema({
  nombreColor: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 500,
  },
  // codHexa: {
  //   type: String,
  //   required: false,
  //   minLength: 1,
  //   maxLength: 10000,
  // },
});

const Color = mongoose.model("color", colorSchema);
export default Color
