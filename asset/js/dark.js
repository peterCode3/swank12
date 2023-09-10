
$("input[id='checkbox']").change(function() {
    if ($(this).is(":checked")) {
        $('body').addClass('dark-bg');
        // Header
        $('#hedr_home').addClass('hdr-dark');
        $('#about-header').addClass('hdr-dark');
        $('.checkbox-label').addClass('bg-white');
        $('.ball').addClass('dark-bg');
        // Home
        $('.main-section').addClass('main-section-bg');
        $('.main-section').addClass('svg-bg');
        $('.main-section').addClass('white-color');
        $('.main_serv').addClass('white-color');
        $('.main_serv').addClass('img-white');
        // $('.inr_ser').addClass('drk-color');
        $('.dat_anal').addClass('drk-color-bg');
        $('.dat_analb').addClass('drk-color-bg');
        $('.flip_boxb').addClass('hover-white');
        $('.flip_boxbc').addClass('hover-white');
        $('.dat_analc').addClass('drk-color-bg');
        // Testimonial
        $('.shadow-effect').addClass('dark-bg');
        $('.shadow-effect').addClass('white-color');
        $('.shadow-effect').addClass('img-white');
        // About Us
        $('.mission-about').addClass('white-color');
        // Footer
        $('.swn_footer').addClass('dark-bg');
    } else {
        $('body').removeClass('dark-bg');
        // Header
        $('#hedr_home').removeClass('hdr-dark');
        $('#about-header').removeClass('hdr-dark');
        $('.checkbox-label').removeClass('bg-white');
        $('.ball').removeClass('dark-bg');
        // Home
        $('.main-section').removeClass('main-section-bg');
        $('.main-section').removeClass('svg-bg');
        $('.main-section').removeClass('white-color');
        // $('.inr_ser').removeClass('drk-color');
        $('.main_serv').removeClass('white-color');
        $('.main_serv').removeClass('img-white');
        $('.dat_anal').removeClass('drk-color-bg');
        $('.dat_analb').removeClass('drk-color-bg');
        $('.flip_boxb').removeClass('hover-white');
        $('.flip_boxbc').removeClass('hover-white');
        $('.dat_analc').removeClass('drk-color-bg');
        // Testomonial
        $('.shadow-effect').removeClass('dark-bg');
        $('.shadow-effect').removeClass('white-color');
        $('.shadow-effect').removeClass('img-white');
        // About us 
        $('.mission-about').removeClass('white-color');
        // Footer
        $('.swn_footer').removeClass('dark-bg');
    }
  });