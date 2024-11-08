document.addEventListener("DOMContentLoaded", function () {
    const currentYearElement = document.getElementById("currentyear");
    const lastModifiedElement = document.getElementById("lastModified");

    // Set current year
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    // Set last modified date
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.textContent = `Last updated: ${lastModifiedDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })}`;
});
