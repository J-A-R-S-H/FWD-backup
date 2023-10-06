// Window Confirm Method v1.0
// by: Michael Whyte
// c. 2019

// Grab the button
const btn = document.getElementById('btn');
// Grab the output paragraph
const out = document.getElementById('p-01');


// Note: The below script is not complete and is for 
// demonstration purposes. It is nowhere near a complete
// login or logout system...
btn.addEventListener('click', function(){
    
    // window.confirm() or just confirm() works as well
    // - Store the returned value from the confirm() method in the 
    //   logout variable
    // - The confirm method will return a boolean value of either
    //   true or false
    const logout = confirm('Are you sure you want to log out?');

    // Output a different message depending if the user clicked
    // Ok (true) or Cancel (false) or pressed the "Esc" key (false)
    if(logout == true){
        loggedIn = false;
        out.innerHTML = 'You have been logged out.';
        // Hide and disable the button
        btn.style.display = 'none';
        btn.setAttribute('disabled', 'disabled')
    }else {
        out.innerHTML = 'You cancelled the log out, so you are still logged in.';
    }

});