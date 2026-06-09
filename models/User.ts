import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema(
  {
    company_id: {
      type: "String",
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    company_number: {
      type: String,
      required: true,
    },

    contact_email: {
      type: String,
      required: true,
    },

    contact_phone: {
      type: String,
      required: true,
    },
    address1: {
      type: String,
      required: true,
    },

    address2: {
      type: String,
    },

    county: {
      type: String,
      required: true,
    },

    postcode: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
const Client = mongoose.models.Client || mongoose.model("Client", ClientSchema);

export default Client;
