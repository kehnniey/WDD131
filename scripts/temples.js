// Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
	const hamButton = document.querySelector("#menu");
	const navigation = document.querySelector(".navigation");
  
	if (hamButton && navigation) {
	  hamButton.addEventListener("click", () => {
		navigation.classList.toggle("open");
		hamButton.classList.toggle("open");
	  });
	}
  });
  
  // Dynamic Footer (Current Year and Last Modified Date)
  document.addEventListener("DOMContentLoaded", function () {
	const currentYearElement = document.getElementById("currentyear");
	const lastModifiedElement = document.getElementById("lastModified");
  
	if (currentYearElement) {
	  // Set current year
	  const currentYear = new Date().getFullYear();
	  currentYearElement.textContent = currentYear;
	}
  
	if (lastModifiedElement) {
	  // Set last modified date
	  const lastModifiedDate = new Date(document.lastModified);
	  lastModifiedElement.textContent = `Last updated: ${lastModifiedDate.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	  })}`;
	}
  });
  