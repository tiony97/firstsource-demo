$(document).ready(function() {
    /* Nav dropdowns */
    // Dropdown 1 
    $('.dropdown-btn-1').click(function() {
        $('.dropdown-1').toggleClass('navActive');
        $(this).toggleClass('active-btn');

        //remove .navActive class from other dropdowns and dropdown buttons
        $('.dropdown').not('.dropdown-1').removeClass('navActive');
        $('.dropdown-btn').not(this).removeClass('active-btn');

        //Hide current dropdown when hovering over other links
        $('.dropdown-btn').not(this).hover(function(){
            $('.dropdown-1').removeClass('navActive');
            $('.dropdown-btn-1').removeClass('active-btn');
        });
    });

    // Dropdown 2 
    $('.dropdown-btn-2').click(function() {
        $('.dropdown-2').toggleClass('navActive');
        $(this).toggleClass('active-btn');

        //remove .navActive class from other dropdowns and dropdown buttons
        $('.dropdown').not('.dropdown-2').removeClass('navActive');
        $('.dropdown-btn').not(this).removeClass('active-btn');

        //Hide current dropdown when hovering over other links
        $('.dropdown-btn').not(this).hover(function(){
            $('.dropdown-2').removeClass('navActive');
            $('.dropdown-btn-2').removeClass('active-btn');
        });
    });

    // Dropdown 3 
    $('.dropdown-btn-3').click(function() {
        $('.dropdown-3').toggleClass('navActive');
        $(this).toggleClass('active-btn');

        //remove .navActive class from other dropdowns and dropdown buttons
        $('.dropdown').not('.dropdown-3').removeClass('navActive');
        $('.dropdown-btn').not(this).removeClass('active-btn');

        //Hide current dropdown when hovering over other links
        $('.dropdown-btn').not(this).hover(function(){
            $('.dropdown-3').removeClass('navActive');
            $('.dropdown-btn-3').removeClass('active-btn');
        });
    });

    // Dropdown 4 
    $('.dropdown-btn-4').click(function() {
        $('.dropdown-4').toggleClass('navActive');
        $(this).toggleClass('active-btn');

        //remove .navActive class from other dropdowns and dropdown buttons
        $('.dropdown').not('.dropdown-4').removeClass('navActive');
        $('.dropdown-btn').not(this).removeClass('active-btn');

        //Hide current dropdown when hovering over other links
        $('.dropdown-btn').not(this).hover(function(){
            $('.dropdown-4').removeClass('navActive');
            $('.dropdown-btn-4').removeClass('active-btn');
        });
    });

    // Dropdown 5 
    $('.dropdown-btn-5').click(function() {
        $('.dropdown-5').toggleClass('navActive');
        $(this).toggleClass('active-btn');

        //remove .navActive class from other dropdowns and dropdown buttons
        $('.dropdown').not('.dropdown-5').removeClass('navActive');
        $('.dropdown-btn').not(this).removeClass('active-btn');

        //Hide current dropdown when hovering over other links
        $('.dropdown-btn').not(this).hover(function(){
            $('.dropdown-5').removeClass('navActive');
            $('.dropdown-btn-5').removeClass('active-btn');
        });
    });
});