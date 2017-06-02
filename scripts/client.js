$(document).ready(
    function () {
        header();
        main();
        footer();
    });

function header () {
    $('header').load('./views/components/header.html');
}

function footer () {
    $('footer').load('./views/components/footer.html');
}

function main () {
    $('#main').load('./views/pages/main.html');
}