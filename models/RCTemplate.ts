import mongoose from "mongoose";

const RCTemplateSchema = new mongoose.Schema(
  {
    main_group_code: {
      type: String,
      required: true,
    },

    sub_group_code: {
      type: String,
      required: true,
    },

    bcis_code: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


RCTemplateSchema.index(
  {
    main_group_code: 1,
    sub_group_code: 1,
    bcis_code: 1,
  },
  { unique: true }
);

const RCTemplate =
  mongoose.models.RCTemplate ||
  mongoose.model("RCTemplate", RCTemplateSchema);

export default RCTemplate;