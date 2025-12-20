export default async function handler(req, res) {
  // ✅ CORS HEADERS (MOST IMPORTANT)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { education, interest, skill } = req.body;

    if (!education || !interest || !skill) {
      return res.status(400).json({ error: "Missing fields" });
    }

    // Simple logic (demo purpose)
    let career = "General Career";
    let roadmap = "Explore fundamentals and build skills.";

    if (interest.toLowerCase().includes("management")) {
      career = "Business Analyst / Management Professional";
      roadmap =
        "1. Learn basics of management\n2. Improve communication\n3. Study analytics\n4. Apply for internships";
    }

    return res.status(200).json({
      career,
      roadmap
    });

  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
}