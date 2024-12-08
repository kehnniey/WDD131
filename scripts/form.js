// Footer year and last modified date
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Product Array
const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
    { id: 4, name: "Product D" },
    { id: '...', name: "Product ..." }
  ];
  
  // Populate Product Options
  document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product-name");
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  });
  
   // Update Review Counter in Local Storage
   let reviewCount = localStorage.getItem("reviewCount") || 0;
   reviewCount = parseInt(reviewCount) + 1;
   localStorage.setItem("reviewCount", reviewCount);

   // Display Review Count
   document.getElementById("review-count").textContent = reviewCount;