$(document).ready(
    function () {
        header();
        main();
        footer();

        $('#header-link-home').on('click', main);
        $('#header-link-about').on('click', about);
        $('#header-link-links').on('click', links);

        $('#footer-link-home').on('click', main);
    });

function header () {
    $('header').load('./views/components/header.html');
}

function footer () {
    $('footer').load('./views/components/footer.html');
}

function main () {
    $('#main').load('./views/pages/main.html');
    $('#navHome').addClass('header__nav_selected');
    $('#navAbout').removeClass('header__nav_selected');
    $('#navLinks').removeClass('header__nav_selected');
}

function about () {
    $('#main').load('./views/pages/about.html');
    $('#navAbout').addClass('header__nav_selected');
    $('#navHome').removeClass('header__nav_selected');
    $('#navLinks').removeClass('header__nav_selected');
}

function links () {
    $('#main').load('./views/pages/links.html');
    $('#navLinks').addClass('header__nav_selected');
    $('#navAbout').removeClass('header__nav_selected');
    $('#navHome').removeClass('header__nav_selected');
}