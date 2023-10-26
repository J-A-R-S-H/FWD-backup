// JSON Introduction

// HTML Elements
const $btn = $('#btn-01');
const $out = $('#data-output-dog-api');
const className = 'dog';
const $spinner = $('<div>').addClass(className).append( $('<img>').attr({ src: 'images/spinner.gif', alt: 'Loading'}).addClass('spinner') );
const endPoint = 'https://dog.ceo/api/breed/chihuahua/images/random/12';

$btn.click(function(){

    // Remove any existing HTML on the output div
    $out.empty();
    $out.append($spinner);

    fetch(endPoint)
        .then(function(response){
            if(response.ok){
                return response.json();
            }
            throw new Error('Network response was not ok');
        })
        .then(function(data){

            makeImages(data.message, $out, 'dog');
        })
        .catch(function(error){
            $out.html(`<p>${error}. Please try again.</p>`);
        });

});

// Create Images
// - Creates an array of divs with images and appends them to a
//   containing element

// Option 1 - Removes spinner after the first image has loaded...
function makeImages(arr, container, className){
    let firstImageLoaded = false;
    arr.forEach((item, i, arr) => {
        const $div = $('<div>').addClass(className);
        const $img = $('<img>').attr({ src: item, alt: 'Chihuahua' })
        $img.on('load', function(){
            $(this).appendTo($div);
            if(!firstImageLoaded){
                firstImageLoaded = true;
                container.empty();
                container.append($div);
            }else{
                container.append($div);
            }
        });
    });
}

// Option 2 - Removes the spinner only after all of the images have loaded
/*
function makeImages(arr, container, className){
    console.log(arr);
    let images = [];
    imageCount = 1;
    arr.forEach((item, i, arr) => {
        const $div = $('<div>').addClass(className);
        const $img = $('<img>').attr({ src: item, alt: 'Chihuahua' })
        $img.on('load', function(){ 
            $(this).appendTo($div);
            images.push($div);
            console.log(imageCount, arr.length)
            if(imageCount === arr.length){
                container.empty();
                images.forEach(image => { container.append(image); });
            }else{
                imageCount++;
            } 
        });
    });
}
*/

