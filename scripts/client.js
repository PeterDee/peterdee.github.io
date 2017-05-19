$(document).ready(
    function () {

        header();
        footer();
    });

function header () {
    $('header').load('./views/components/header.html');
}

function footer () {
    $('footer').load('./views/components/footer.html');
}