// Form Validation

// Globals
const $form		= $('.form-basic');
const $errorBox = $('.errors');
const $name 	= $('#name');
const $email	= $('#email');
const $pw 		= $('#password');
const $pwConf 	= $('#password-confirm');

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
	positionBlank: 'Position not selected',
	
	emailInvalid: 'Email is in an incorrect format',
	
	passwordToShort: 'Password must be at least 6 characters long',
	passwordNoMatch: 'Passwords do not match'
		
};

$form.submit(function(e){
	
	let isValid = true;
	
	const errorMessageArray = [];
	let errorOutput;
	
	const nameVal   = $.trim($name.val());
	const emailVal  = $.trim($email.val());
	const pwVal     = $.trim($pw.val());
	const pwConfVal = $.trim($pwConf.val());
	const checked   = $('.form-basic input[type="checkbox"]:checked');
	
	// Validate name
	if(nameVal === ''){
		errorMessageArray.push(errorMessages.nameBlank);
		isValid = false;	
	}
	
	// Validate email
	if(emailVal === ''){
		errorMessageArray.push(errorMessages.emailBlank);
		isValid = false;	
	}else if(emailPattern.test(emailVal) === false){
		errorMessageArray.push(errorMessages.emailInvalid);
		isValid = false;	
	}
	
	// Validate password
	if(pwVal === ''){
		errorMessageArray.push(errorMessages.passwordBlank);
		isValid = false;	
	}else if(pwVal.length < 6){
		errorMessageArray.push(errorMessages.passwordToShort);
		isValid = false;	
	}else if(pwVal !== pwConfVal){
		errorMessageArray.push(errorMessages.passwordNoMatch);
		isValid = false;	
	}
	
	// Validate position
	if(checked.length === 0){
		errorMessageArray.push(errorMessages.positionBlank);
		isValid = false;	
	}
	
	if(isValid === false){
		
		e.preventDefault();
		
		const listItems = errorMessageArray.map((i) => `<li>${i}</li>`).join('');

        errorOutput = `<ul>${listItems}</ul>`;
		
		$errorBox.html(errorOutput);
		$errorBox.show();
			
	}
	
}); // end submit event handler