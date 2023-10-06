// Events

// Mouse Smiley with Mouse Movements
// HTML Elements
const $container = $('#box-container-01');
const $smiley = $('#smiley-face');


$container.mousemove(function(e){
    let mx = e.offsetX;
    let my = e.offsetY;
    console.log('mx:', mx);
    console.log('my:', my);
    if(mx > $container.width() - $smiley.width()){
        mx = $container.width() - $smiley.width();
    }else if(mx < 1){
        mx = 0;
    }
    if(my > $container.height() - $smiley.height()){
        my = $container.height() - $smiley.height();
    }else if(my < 1){
        my = 0;
    }

    $smiley.css({
        'top': my,
        'left': mx
    });

});

// Preventing Default
// Kitten Gallery
// ver 1 - Using preventDefault()
/*
const slide  = document.getElementById('slide');
const thumbs = document.querySelectorAll('.thumbs a');
// Add click event handler to each event a
thumbs.forEach(function(thumb){
    thumb.addEventListener('click', changeSlide);
});

// Function to change slide
function changeSlide(e){
    e.preventDefault();

    
    const src = this.getAttribute('href');
    const alt = this.getAttribute('alt');
    slide.src = src;
    slide.setAttribute('alt', alt);
}
*/
// Kitten Gallery
// ver 2 - Using event filtering and multiple events
// Tip: Set "pointer-events" to "none" in the CSS
// on the thumb "img" elements to prevent them from registering
// as the target element
const $slide  = $('#slide');
// Grab the thumbs container
const $thumbs = $('#thumbs');
// Add click, mouseenter and focus events handler to the thumbs
$thumbs.on('click mouseenter focus', 'a' , changeSlide);


// Function to change slide
function changeSlide(e){

    e.preventDefault();

    const src = $(this).attr('href');
    const alt = $(this).attr('alt');
    $slide.attr({
        'src': src,
        'alt': alt
    });

}
