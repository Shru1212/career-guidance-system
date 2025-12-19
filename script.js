// ================= CAREER GUIDANCE FRONTEND =================

// Backend API URL (local for now; change after Railway deploy)
const API_URL = "http://localhost:3000/guide";

// Main function called on button click
async function getCareer() {
  const education = document.getElementById("education").value;
  const interest = document.getElementById("interest").value;
  const skill = document.getElementById("skill").value;

  // Validation
  if (!education || !interest || !skill) {
    alert("Please fill all fields");
    return;
  }

  try {
    // Call backend API
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        education: education,
        interest: interest,
        skill: skill
      })
    });

    if (!response.ok) {
      throw new Error("Server error");
    }

    const data = await response.json();

    // Display result
    document.getElementById("result").innerHTML = `
      <div class="career-card">
        <h3>Recommended Career: ${data.career}</h3>
        <p><strong>Education Level:</strong> ${data.education}</p>
        <p><strong>Interest Area:</strong> ${data.interest}</p>
        <p><strong>Key Skill:</strong> ${data.skill}</p>
        <p><strong>Career Roadmap:</strong> ${data.roadmap}</p>
      </div>
    `;
  } catch (error) {
    alert("Backend not reachable. Please start the server.");
    console.error("Career guidance error:", error);
  }
}