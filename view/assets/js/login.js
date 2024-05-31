const password= document.querySelector('#password');
const showHidePassword= document.querySelector('.password-hide');

showHidePassword.addEventListener('click', function(){
    this.classList.toggle('bx-show')
    if(password.type==='password'){
        password.type='text'
    }else{
        password.type='password'
    }
})

const users = {
    client: {
        email: '12230054.gcit@example.com',
        password: 'tenze21'
    },
    talent: {
        email: '12230044.gcit@example.com',
        password: 'chophel12'
    },
    admin:{
        email: '12230050.gcit@example.com',
        password: 'admin12'
    }
};

document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let loggedIn = false;

    for (const userType in users) {
        if (users[userType].email === email && users[userType].password === password) {
            loggedIn = true;
            if(userType=="talent"){
                window.location.href = 'Talent_Module/search.html';
            }else if(userType=="client"){
                window.location.href = 'client_Module/talents.html';
            }else{
                window.location.href = 'admin_module/talent.html';
            }
        }
    }

    if (!loggedIn) {
        alert('Invalid email or password');
    }
});