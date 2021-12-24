//Adding necessary padding to the content
let addedmargin = 10;
let navbarheight = jQuery('.title-sm').height();
jQuery('.content').css('margin-top', navbarheight + addedmargin + 'px');

// some vars for automatization
let dropdowns = [".dropdown-1", ".dropdown-2"];
let dropdownbuttons = [".dropdown-button1", ".dropdown-button2"];

// Adding the event listener for the small screen navbar button
document.querySelector('.display-menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('visible');
    HideAllDropdowns();
});


// Adding event listeners to all the dropdown buttons
for (let i = 0; i < dropdownbuttons.length; i++) {
    document.querySelector(dropdownbuttons[i]).addEventListener('click', () => {
        ChangeDropdownState(dropdowns[i]);
    });
}


// Some useful functions
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