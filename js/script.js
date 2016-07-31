(function() {


    function openNav() {
        $("nav").css('width', '100%');
        $('body').css('overflow', 'hidden');
    }

    function closeNav() {
        $("nav").css('width', '0%');
        $('body').css('overflow', 'auto');
    }

    /* Open when someone clicks on the Hamburger button */
    $('#hamburger').on('click', function() {
        openNav();
    });

    /* Close when someone clicks on the "x" symbol inside the mobile menu */
    $('.closebtn').on('click', function() {
        closeNav();
    });

}());
