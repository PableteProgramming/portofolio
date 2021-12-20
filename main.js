let dropdowns = [".dropdown-1", ".dropdown-2"];

document.querySelector('.display-menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('visible');
});

document.querySelector('.dropdown-button1').addEventListener('click', () => {
    ChangeDropdownState(".dropdown-1");
});

document.querySelector('.dropdown-button2').addEventListener('click', () => {
    ChangeDropdownState(".dropdown-2");
});

function ChangeDropdownState(d) {
    let dropdown = d;
    if (document.querySelector(dropdown).classList.contains('show')) {
        // hide this one
        document.querySelector(dropdown).classList.remove('show');
    } else {
        // show this one and hide all the others
        document.querySelector(dropdown).classList.add('show');
        for (let i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i] !== dropdown) {
                document.querySelector(dropdowns[i]).classList.remove('show');
            }
        }
    }
}

function HideAllDropdowns() {
    for (let i = 0; i < dropdowns.length; i++) {
        document.querySelector(dropdowns[i]).classList.remove('show');
    }
}

function HideMenuBtn() {
    document.querySelector('.nav-menu').classList.remove('visible');
}