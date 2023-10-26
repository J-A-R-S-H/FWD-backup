// Form Validation - Inline

// Globals
const $form		= $('.form-basic');
const $name 	= $('#name');
const $email	= $('#email');
const $pw 		= $('#password');
const $pwConf 	= $('#password-confirm');
let   pwVal       = null;
const $inputs   = $(':input');

// The following pattern from:
// Murach's JavaScript and jQuery
// by: Zak Ruvalcaba and Mike Murach
// pg. 299
const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;

// Error Messages Object
const errorMessages = {
	
	nameBlank: 'Name not filled in',
	emailBlank: 'Email not filled in',
	passwordBlank: 'Password not filled in',
	emailInvalid: 'Email is in an incorrect format',
	passwordToShort: 'Password must be at least 6 characters long',
	passwordNoMatch: 'Passwords do not match'		
};

$name.blur(function(){
    
    if($.trim($name.val()) === ''){
		invalidMessage($name, errorMessages.nameBlank);	
	}else{
        validMessage($name);
    }
});

$email.blur(function(){
    const emailVal = $.trim($email.val());
    if(emailVal === ''){
		invalidMessage($email, errorMessages.emailBlank);	
	}else if(emailPattern.test(emailVal) === false){
        invalidMessage($email, errorMessages.emailInvalid);	
	}else{
        validMessage($email);
    }
});

$pw.blur(function(){
    pwVal = $.trim($pw.val())
    if(pwVal === ''){
		invalidMessage($pw, errorMessages.passwordBlank);	
	}else if(pwVal.length < 6){
		invalidMessage($pw, errorMessages.passwordToShort);	
	}else{
        validMessage($pw);
    }
});

$pwConf.blur(function(){
    console.log(typeof pwVal);
    if(($.trim($pwConf.val()) !== pwVal) && pwVal !== null){
		invalidMessage($pwConf, errorMessages.passwordNoMatch);	
	}else if(pwVal !== '' && pwVal !== null){
        console.log(`pwVal = ${pwVal}`);
        console.log('Hello from hear');
        console.log(pwVal);
        validMessage($pwConf);
    }
});

$inputs.focus(function(){
    removeMessage($(this));
});

$form.submit(function(e){

    if($form.find('.is-invalid').length > 0){
        e.preventDefault();
    }

});

// Utility Functions

// Valid Message
function validMessage(el){
    console.log(pwVal);
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
