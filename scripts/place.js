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
  


// Function to calculate windchill
function calculateWindChill(temperature, windSpeed, isCelsius = true) {
    // Check if the conditions for calculating wind chill are met (either metric or imperial units)
    if ((isCelsius && temperature <= 10 && windSpeed > 4.8) || (!isCelsius && temperature <= 50 && windSpeed > 3)) {
        // If using Celsius
        if (isCelsius) {
            // Apply wind chill formula for Celsius
            return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
        } else {
            // If using Fahrenheit, convert the formula to Fahrenheit
            return Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
        }
    }
    return "N/A"; // If the conditions are not met
}

// Simulated temperature (°C) and wind speed (km/h)
const temperature = 5;  // Example: 5°C
const windSpeed = 10;   // Example: 10 km/h

// Determine if using Celsius or Fahrenheit (default is Celsius)
const isCelsius = true; // Change this to false for Fahrenheit

// Calculate the wind chill factor
const windChillFactor = calculateWindChill(temperature, windSpeed, isCelsius);

// Function to update the weather information on the page
document.addEventListener("DOMContentLoaded", () => {
    // Update windchill text
    const windChillElement = document.getElementById("windchill");
    if (windChillElement) {
        windChillElement.textContent = windChillFactor !== "N/A" ? `Windchill: ${windChillFactor}°C` : "Windchill: N/A";
    }
});
