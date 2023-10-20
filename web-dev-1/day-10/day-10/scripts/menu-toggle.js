// Main Navigation Toggle
const button = document.getElementById( 'main-nav-button' );
const links  = document.getElementById( 'main-nav-list' );

button.addEventListener( 'click', function() {
    links.classList.toggle( 'toggled' );
} );


// Thumb Navigation Toggle
const thumbButton = document.getElementById( 'thumb-nav-button' );
const thumbLinks  = document.getElementById( 'thumb-nav-secondary' );

thumbButton.addEventListener( 'click', function() {
    thumbLinks.classList.toggle( 'toggled' );
} );