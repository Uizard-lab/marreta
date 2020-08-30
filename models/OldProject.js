const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  publisher: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
  },
  resume: {
    type: String,
    required: true,
  },
  areaOfIntervention: {
    type: String,
    required: true
  },
  audience: {
    type: String,
    required: true
  },
  objectives: {
    type: String,
    required: false,
  },
  activityDescription: {
    type: String,
    required: true
  },
  specificFormationRequired: {
    type: Boolean,
    required: true
  },
  schedule: {
    type: String,
    required: true
  },
  specialArea: [String],
  entitiesInvolved: [String],
  specialNotes: {
    type: String,
    required: true
  },
  rgpd: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Project", ProjectSchema);
