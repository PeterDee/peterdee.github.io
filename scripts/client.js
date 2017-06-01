$(document).ready(
    function () {
        header();
        main();
        footer();

        $('#navHome').on('click', main);
        $('#navAbout').on('click', about);
        $('#navLinks').on('click', links);

        $('#footer-link-home').on('click', about);
    });

var i = 0;

function header () {
    $('header').load('./views/components/header.html');
}

function footer () {
    $('footer').load('./views/components/footer.html');
}

function main () {
    $('#main').load('./views/pages/main.html');
    $('#navHome').addClass('header__nav_selected');
}

function about () {
    $('#main').load('./views/pages/about.html');
    $('#navAbout').addClass('.header__nav_selected');
    $('#navHome').removeClass('header__nav_selected');
    $('#navLinks').removeClass('header__nav_selected');
}

function links () {
    $('#main').html("");
}