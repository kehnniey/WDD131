// Function to dynamically update the footer year and last modified date
document.addEventListener("DOMContentLoaded", () => {
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
