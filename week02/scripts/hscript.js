// // Store the selected elements that we are going to use. 
// document.addEventListener('DOMContentLoaded', function() {
// const mainnav = document.querySelector('.navigation')
// const hambutton = document.querySelector('#menu');

// // Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
// hambutton.addEventListener('click', () => {
// 	mainnav.classList.toggle('show');
// 	hambutton.classList.toggle('show');
// });
// })
// /* ❔What does toggle mean?
// We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
// The CSS class rules will handle the different views, layouts, and displays.
// 🗝️ JavaScript only applies the class value or not.


// document.addEventListener('DOMContentLoaded', function() {
//     const menuIcon = document.querySelector('#menu');
//     const nav = document.querySelector('nav');

//     // Toggle 'active' class on the navigation element when the menu icon is clicked
//     menuIcon.addEventListener('click', function(event) {
//         event.preventDefault(); // Prevent default anchor behavior
//         nav.classList.toggle('active'); // Toggle 'active' class on nav
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('#menu');
    const nav = document.querySelector('nav');

    // Toggle 'active' class on the navigation element when the menu icon is clicked
    menuIcon.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        nav.classList.toggle('active'); // Toggle 'active' class on nav
    });
});
