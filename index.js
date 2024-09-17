var toggleButton = document.getElementById("toggle-button");
var skillsDiv = document.getElementById("skills");
toggleButton.addEventListener("click", function () {
  if (skillsDiv.style.display === "none") {
    skillsDiv.style.display = "block";
  } else {
    skillsDiv.style.display = "none";
  }
});
