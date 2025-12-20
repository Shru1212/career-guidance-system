document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("careerBtn");

  button.addEventListener("click", async () => {
    const education = document.getElementById("education").value;
    const interest = document.getElementById("interest").value;
    const skill = document.getElementById("skill").value;

    try {
      const response = await fetch("https://jubilant-illumination-production-dfca.up.railway.app/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          education,
          interest,
          skill
        })
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();

      document.getElementById("result").innerHTML = `
        <h3>Suggested Career</h3>
        <p><strong>${data.career}</strong></p>
        <p>${data.roadmap}</p>
      `;
    } catch (err) {
      alert("Backend not reachable");
      console.error(err);
    }
  });
});