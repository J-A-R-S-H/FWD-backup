// JavaScript Document

// Simple Form Validator

// Code modified from code found at this blog
// post by Dave Rupert:
//
// https://daverupert.com/2017/11/happier-html5-forms/

const inputs = document.querySelectorAll("input");
let submitCounter = 0;

inputs.forEach(input => {
  
    input.addEventListener("blur", function() {
        if(submitCounter == 1){
            input.classList.remove('error');
            input.checkValidity();
        }
    });

    input.addEventListener("invalid", _ => {
      if(submitCounter == 0){
          submitCounter = 1;
      } 
      input.classList.add("error");
    });

});