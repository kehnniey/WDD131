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
	  lastModifiedElement.textContent = `Last Updated: ${lastModifiedDate.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	  })}`;
	}
  });
  



 //Windchill
  document.addEventListener("DOMContentLoaded", () => {
    const windChillElement = document.getElementById("windchill");

    if (!windChillElement) {
        console.error("Element with id 'windchill' not found.");
        return;
    }

    // Function to calculate wind chill using Fahrenheit and mph
    const calculateWindChill = (temp, windSpeed) =>
        temp <= 50 && windSpeed > 3
            ? Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16))
            : "N/A";

    // Example values (use actual data in production)
    const temperature = 59; // Temperature in Fahrenheit
    const windSpeed = 7.5; // Wind speed in mph

    // Calculate wind chill
    const windChillFactor = calculateWindChill(temperature, windSpeed);

    // Update the DOM
    windChillElement.innerHTML = windChillFactor !== "N/A"
        ? `<strong>Wind Chill:</strong> ${windChillFactor}°F`
        : `<strong>Wind Chill:</strong> N/A`;
});

  