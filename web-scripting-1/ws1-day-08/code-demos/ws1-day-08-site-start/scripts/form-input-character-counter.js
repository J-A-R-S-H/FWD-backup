// Form Validation

const $form       = $('.form-basic');
const $textArea   = $('#comments');
const $charCount  = $('.character-count');
const maxChar     = 50;
let   isFormValid = true;

// Utility Functions

// Valid Message
function validMessage(el){
    el.addClass('is-valid')
      .after('<div class="valid-feedback">Looks good!</div>');
}

// Invalid Message
function invalidMessage(el, message){
    el.addClass('is-invalid')
      .after(`<div class="invalid-feedback">${message}</div>`);
}

// Remove Message
function removeMessage(el){
    if(el.next('.valid-feedback') || el.next('.invalid-feedback')){
        el.next().remove();
    }
    el.hasClass('is-valid') ? el.removeClass('is-valid') : el.removeClass('is-invalid');
}

