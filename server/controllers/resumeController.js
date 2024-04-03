const Resume = require("../models/resume");

exports.create = async (req, res) => {
  try {
    const userId = req.user._id;

    const newResume = new Resume({
      user: userId,
      layout: req.body.layout,
      basicDetails: req.body.basicDetails,
      education: req.body.education,
      experience: req.body.experience,
      projects: req.body.projects,
      skills: req.body.skills,
      socialProfiles: req.body.socialProfiles,
    });

    const savedResume = await newResume.save();

    res.status(201).json(savedResume);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.fetchAll = async (req, res) => {
  try {
    const user = req.user._id;

    const resumes = await Resume.find({ user });

    res.status(200).json(resumes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch resumes" });
  }
};
