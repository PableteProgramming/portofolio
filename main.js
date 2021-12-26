window.onresize = CheckWindowWidth;

window.onload = onLoad;


//Adding necessary padding to the content
let addedmargin = 10;

// some vars for automatization
let dropdowns = [".dropdown-1", ".dropdown-2"];
let dropdownbuttons = [".dropdown-button1", ".dropdown-button2"];

function IncludeTemplates() {
    var includes = $('[data-include]');
    $.each(includes, function() {
        var file = 'templates/' + $(this).data('include') + '.html';
        $(this).load(file);
    });
}

// Adding the event listener for the small screen navbar button
function AddSmallScreensButtonListener() {
    $("body").on('click', ".display-menu-btn", () => {
        $('.nav-menu').toggleClass('visible');
        HideAllDropdowns();
    });
}

// Adding event listeners to all the dropdown buttons
function AddDropdownsListeners() {
    for (let i = 0; i < dropdownbuttons.length; i++) {
        $("body").on('click', dropdownbuttons[i], () => {
            ChangeDropdownState(dropdowns[i]);
        });
    }
}

// Some useful functions
function ChangeDropdownState(d) {
    let dropdown = d;
    if ($(dropdown).hasClass('show')) {
        // hide this one
        $(dropdown).removeClass('show');
    } else {
        // show this one and hide all the others
        $(dropdown).addClass('show');
        for (let i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i] !== dropdown) {
                $(dropdowns[i]).removeClass('show');
            }
        }
    }
}

function HideAllDropdowns() {
    for (let i = 0; i < dropdowns.length; i++) {
        $(dropdowns[i]).removeClass('show');
    }
}

function CheckWindowWidth() {
    maxwidth = $('html').css('max-width');
    if (maxwidth == '875px') {
        let navbarheight = jQuery('.title-sm').height();
        jQuery('.content').css('margin-top', navbarheight + addedmargin + 'px');
    } else {
        jQuery('.content').css('margin-top', 0);
    }
}

function onLoad() {
    IncludeTemplates();
    CheckWindowWidth();
    AddSmallScreensButtonListener();
    AddDropdownsListeners();
}