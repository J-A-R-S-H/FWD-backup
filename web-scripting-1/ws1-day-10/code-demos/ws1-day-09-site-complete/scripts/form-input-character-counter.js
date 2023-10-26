// Form Validation

const $form       = $('.form-basic');
const $textArea   = $('#comments');
const $charCount  = $('.character-count');
const maxChar     = 50;
let   isFormValid = true;

$charCount.text(maxChar - $textArea.val().length);

$textArea.keypress(function(e){
	
	const text = $.trim($(this).val());
	const textLength = text.length;
	const charRemain = maxChar - textLength;

	if(charRemain >= 0){
		$charCount.text(charRemain);
	// allow delete and backspace keys...	
	}else if(e.which != 0 && e.which != 8) {
          e.preventDefault();
    }
	
});

$textArea.blur(function(){
    const text = $.trim($(this).val());
	const textLength = text.length;
    const charRemain = maxChar - textLength;
    $charCount.text(charRemain);
    if(charRemain < 0){
        isFormValid = false;
        invalidMessage($textArea, 'Too many characters');
    }else if(text === ''){
        isFormValid = false;
        invalidMessage($textArea, 'Comment required');
    }else{
        isFormValid = true;
        validMessage($textArea);
    }
});

$textArea.focus(function(){
    removeMessage($textArea);
});

$form.submit(function(e){
    if(isFormValid === false){
        e.preventDefault();
    }
});

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

