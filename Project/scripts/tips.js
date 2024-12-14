
        // Select the elements
        const addTipForm = document.getElementById("add-tip-form");
        const tipInput = document.getElementById("tip");
        const tipsList = document.getElementById("tips-list");
        const clearTipsButton = document.getElementById("clear-tips");

        // Add a new tip to the list
        addTipForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Prevent form submission

            const tipText = tipInput.value.trim();
            if (tipText) {
                const listItem = document.createElement("li");
                listItem.textContent = tipText;

                // Create a remove button for each tip
                const removeButton = document.createElement("button");
                removeButton.textContent = "Remove";
                removeButton.classList.add("remove-tip");
                removeButton.onclick = function() {
                    listItem.remove(); // Remove the tip from the list
                };

                listItem.appendChild(removeButton);
                tipsList.appendChild(listItem);
                tipInput.value = ""; // Clear the input field after adding a tip
            }
        });

        // Clear all tips from the list
        clearTipsButton.addEventListener("click", function() {
            tipsList.innerHTML = ""; // Clear the tips list
        });
   