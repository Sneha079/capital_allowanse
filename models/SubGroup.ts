import mongoose from "mongoose";

const SubGroupSchema = new mongoose.Schema(
  {
    Sub_Group_Code: {
      type: String,
      required: true,
      unique :true,
    },

    Sub_Group_Description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const SubGroup =
  mongoose.models.SubGroup || mongoose.model("SubGroup", SubGroupSchema);

export default SubGroup;
