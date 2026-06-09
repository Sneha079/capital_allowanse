import mongoose from "mongoose";

const MainGroupSchema = new mongoose.Schema(
  {
    main_group_code: {
      type: String,
      required: true,
      unique: true,
    },

    main_group_description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const MainGroup =
  mongoose.models.MainGroup ||
  mongoose.model("MainGroup", MainGroupSchema);

export default MainGroup;