const mongoose = require("mongoose");

// schema for basic details
const basicDetailsSchema = new mongoose.Schema({
  image: String,
  name: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  pincode: String,
  intro: String,
});

// schema for experience details
const experienceSchema = new mongoose.Schema({
  organization: String,
  location: String,
  position: String,
  ctc: String,
  startDate: String,
  endDate: String,
  technologies: String,
});

// schema for project details
const projectSchema = new mongoose.Schema({
  title: String,
  teamSize: String,
  duration: String,
  technologies: String,
  description: String,
});

// schema for skill details
const skillSchema = new mongoose.Schema({
  name: String,
  percentage: String,
});

// schema for social profile details
const socialProfileSchema = new mongoose.Schema({
  platform: String,
  profileLink: String,
});

// schema for education details
const educationSchema = new mongoose.Schema({
  degreeName: String,
  institution: String,
  percentage: String,
});

// main resume schema
const resumeSchema = new mongoose.Schema(
  {
    layout: String,
    basicDetails: basicDetailsSchema,
    experience: [experienceSchema],
    projects: [projectSchema],
    skills: [skillSchema],
    socialProfiles: [socialProfileSchema],
    education: [educationSchema],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Resume = mongoose.model("Resume", resumeSchema);
module.exports = Resume;
