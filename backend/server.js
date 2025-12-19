const express = require("express");
const cors = require("cors");
const careers = require("./careers");

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("Career Guidance Backend Running");
});

// Career guidance API
app.post("/guide", (req, res) => {
  const { education, interest, skill } = req.body;

  if (!education || !interest || !skill) {
    return res.status(400).json({ message: "Missing inputs" });
  }

  const match = careers.find(
    c => c.interest === interest && c.skill === skill
  );

  if (match) {
    res.json({
      education,
      interest,
      skill,
      career: match.career,
      roadmap: match.roadmap
    });
  } else {
    res.json({
      education,
      interest,
      skill,
      career: "Career Exploration Needed",
      roadmap: "Skill assessment → Counseling → Specialized learning"
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log("Backend running on port", PORT)
);