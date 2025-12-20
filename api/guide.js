const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Health check (important)
app.get("/", (req, res) => {
  res.send("Career Guidance API running");
});

// Main API endpoint
app.post("/guide", (req, res) => {
  const { education, interest, skill } = req.body;

  if (!education || !interest || !skill) {
    return res.status(400).json({
      message: "Missing input fields"
    });
  }

  // Simple logic (can be improved later)
  let career = "General Career Path";
  let roadmap = [
    "Strengthen basics",
    "Explore domains",
    "Build relevant skills",
    "Apply for internships"
  ];

  if (interest === "Technology" && skill === "Programming") {
    career = "Software Developer";
    roadmap = [
      "Learn DSA",
      "Master one programming language",
      "Build projects",
      "Apply for internships/jobs"
    ];
  } else if (interest === "Management") {
    career = "Business Analyst";
    roadmap = [
      "Learn business fundamentals",
      "Improve communication",
      "Learn data tools",
      "Apply for analyst roles"
    ];
  }

  res.json({
    education,
    interest,
    skill,
    career,
    roadmap
  });
});

module.exports = app;