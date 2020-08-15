const root = document.documentElement;

const setLightTheme = () => {
    console.log('setting light theme');
    root.style.setProperty('--bgcolor', 'white');
    root.style.setProperty('--textcolor', '#212121');
    root.style.setProperty('--border-color', '#212121');
    sun.style.color = 'orange';
    moon.style.color = '#ccc';
    localStorage.setItem('darktheme', 0);
};

const setDarkTheme = () => {
    console.log('setting dark theme');
    root.style.setProperty('--bgcolor', '#212121');
    root.style.setProperty('--textcolor', 'white');
    root.style.setProperty('--border-color', 'white');

    moon.style.color = 'yellow';
    sun.style.color = '#ccc';
    localStorage.setItem('darktheme', 1);
};

document.querySelector('.slider').addEventListener('click', () => {
    darkTheme = localStorage.getItem('darktheme');
    console.log({ darkTheme });
    if (darkTheme === '0') {
        setDarkTheme();
    } else {
        setLightTheme();
    }
});

(() => {
    let darkTheme = localStorage.getItem('darktheme');
    console.log({ darkTheme });
    if (darkTheme === '1') {
        console.dir(document.querySelector('#theme-switch'));
        document.querySelector('#theme-switch').checked = true;
        moon.style.color = 'yellow';
        sun.style.color = '#ccc';
    } else {
        setLightTheme();
    }
})();

// EMAILJS Code
(() => {
    emailjs.init('user_KMuhfKBnW7Kz0SaqB530v');
})();

window.onload = function () {
    document
        .getElementById('contact-form')
        .addEventListener('submit', function (event) {
            event.preventDefault();
            // generate the contact number value
            this.contact_number.value = (Math.random() * 100000) | 0;
            emailjs.sendForm('gmail', 'contact_form', this);
        });
};

(() => {
    /**
     * Autoresize textarea based on input
     * code from https://stephanwagner.me/auto-resizing-textarea-with-vanilla-javascript
     */
    document.querySelectorAll('[data-autoresize]').forEach((element) => {
        element.style.boxSizing = 'border-box';
        const offset = element.offsetHeight - element.clientHeight;
        element.addEventListener('input', (event) => {
            event.target.style.height = 'auto';
            event.target.style.height =
                event.target.scrollHeight + offset + 'px';
        });
        element.removeAttribute('data-autoresize');
    });
})();

(() => {
    /**
     * Keep the label hovering above input when there is input in the formfield.
     */
    labels = document.querySelectorAll('.form-label');
    labels.forEach((label) => {
        inputField = document.querySelector(
            `.form-input[name="${label.htmlFor}"]`
        );
        inputField.addEventListener('change', (event) => {
            console.dir(event);
            event.target.value.length !== 0
                ? label.classList.add('shrink')
                : label.classList.remove('shrink');
        });
    });
})();
