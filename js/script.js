(function() {


    function openNav() {
        $("nav").css('width', '100%');
    }

    function closeNav() {
        $("nav").css('width', '0%');
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
