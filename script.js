document.getElementById("guideBtn").addEventListener("click", async () => {
  const education = document.getElementById("education").value;
  const interest = document.getElementById("interest").value;
  const skill = document.getElementById("skill").value;

  const loader = document.getElementById("loader");
  const resultDiv = document.getElementById("result");

  if (!education || !interest || !skill) {
    alert("Please select all fields");
    return;
  }

  loader.classList.remove("hidden");
  resultDiv.innerHTML = "";

  try {
    const response = await fetch(
      "https://jubilant-illumination-production-dfca.up.railway.app/guide",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ education, interest, skill })
      }
    );

    const data = await response.json();

    loader.classList.add("hidden");

    if (data.career) {
      resultDiv.innerHTML = `
        <h3>🎯 Recommended Career</h3>
        <p><b>${data.career}</b></p>
        <h3>🛣 Roadmap</h3>
        <ul>
          ${data.roadmap.map(step => <li>${step}</li>).join("")}
        </ul>
      `;
    } else {
      resultDiv.innerHTML = "<p>No matching career found.</p>";
    }

  } catch (error) {
    loader.classList.add("hidden");
    resultDiv.innerHTML = "<p style='color:red;'>Backend not reachable</p>";
  }
});