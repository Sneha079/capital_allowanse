import mongoose from "mongoose";

const BSCIMasterSchema = new mongoose.Schema(
  {
    BCIS_Code: {
      type: String,
      required: true,
      unique:true,
    },

    BCIS_Description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const  BCISMaster=
  mongoose.models.BCISMaster || mongoose.model("BCISMaster", BSCIMasterSchema);

export default BCISMaster;
