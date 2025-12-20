export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { education, interest, skill } = req.body;

  if (!education || !interest || !skill) {
    return res.status(400).json({ message: "Missing inputs" });
  }

  // Simple demo logic
  let career = "General Career Path";
  let roadmap = "Improve basics → Gain experience → Apply for jobs";

  if (interest === "Management" && skill === "Data Analysis") {
    career = "Business Analyst";
    roadmap =
      "Learn Excel & SQL → Learn Power BI/Tableau → Do projects → Apply for analyst roles";
  }

  res.status(200).json({
    education,
    interest,
    skill,
    career,
    roadmap,
  });
}