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

