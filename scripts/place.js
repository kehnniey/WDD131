// Function to calculate windchill
function calculateWindChill(temperature, windSpeed) {
    // Check if the conditions for calculating wind chill are met
    // Imperial (°F and mph) or Metric (°C and km/h)
    if ((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)) {
        // Using the wind chill formula for Fahrenheit
        // Windchill formula: TWC = 35.74 + 0.6215*T - 35.75*(V^0.16) + 0.4275*T*(V^0.16)
        // Where T = temperature in Fahrenheit, V = wind speed in miles per hour
        // If using Celsius, we would need to adjust the formula to account for °C

        // Convert temperature from Celsius to Fahrenheit if necessary
        if (temperature <= 10) {
            // Apply wind chill formula for Celsius
            return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
        } else {
            return "N/A"; // If the windchill calculation isn't applicable
        }
    }
    return "N/A"; // If the conditions are not met
}

// Simulated temperature (°C) and wind speed (km/h)
const temperature = 5;  // Example: 5°C
const windSpeed = 10;   // Example: 10 km/h

// Calculate the wind chill factor
const windChillFactor = calculateWindChill(temperature, windSpeed);

// Function to update the weather information on the page
document.addEventListener("DOMContentLoaded", () => {
    // Update windchill text
    const windChillElement = document.getElementById("windchill");
    if (windChillElement) {
        windChillElement.textContent = windChillFactor !== "N/A" ? `Windchill: ${windChillFactor}°C` : "Windchill: N/A";
    }

    // Update the current year
    const lastModifiedElement = document.getElementById("last-modified");
    if (lastModifiedElement) {
        const lastModified = new Date(document.lastModified).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        lastModifiedElement.textContent = lastModified;
    }
});
