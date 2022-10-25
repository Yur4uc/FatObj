/* DATA FUNCTION */

function zero_first_format(value)
{
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
}

function date_time() {
    let current_datetime = new Date();

    let hours = zero_first_format(current_datetime.getHours());
    let minutes = zero_first_format(current_datetime.getMinutes());

    return hours+":"+minutes;
}

setInterval(function () {
    document.getElementById('data__time').innerHTML = date_time();
}, 1000);

//
// Progress LINE :(

let progressSection = document.querySelector('.progress-section');
let progressBar = document.querySelector('.progress-bar');



let x, y;

function updateProgressBar() {

    progressBar.style.height = `${getScroll()}%`

    requestAnimationFrame(updateProgressBar)
}


function getScroll() {
    return((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)
}

updateProgressBar()




//VALIDATIOR

const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');

const form = document.querySelector('#signup');


const checkUsername = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'email invalid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};


const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {

    const formField = input.parentElement;

    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {

    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {

    e.preventDefault();

    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail();

    let isFormValid = isUsernameValid && isEmailValid;

    if (isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};


form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
    }
}));



/*MENU*/

const nav = document.querySelector('#nav');
      navBtn = document.querySelector('#nav-btn');
      navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/close.png";
    } else {
        navBtnImg.src = "./img/free-icon-menu-2976215.png";
    }

    nav.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open')
            navBtnImg.src = "./img/free-icon-menu-2976215.png";
        })
    })

    nav.querySelectorAll('.nav__btn').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open')
            navBtnImg.src = "./img/free-icon-menu-2976215.png";
        })
    })
}
















