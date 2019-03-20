$(document).ready(function () {
  // making the sticky nav bar
  $('section.js--features').waypoint(function (direction) {
    if (direction === 'down') {
      $('nav').addClass('sticky-nav');
    } else {
      $('nav').removeClass('sticky-nav');
    }
  }, {
    offset: '60px'
  });

  // making the call to action buttons in header scroll effect

  // I'm hungry button
  $('div.hero-text-box #js-scroll-to-plans-navMenu').click(function () {
    $('html, body').animate({ scrollTop: $('#plans').offset().top }, 1000);
  });

  // more infroamtion button
  $('div.hero-text-box #js-scroll-to-features-navMenu').click(function () {
    $('html, body').animate({ scrollTop: $('#features').offset().top }, 1000);
  });

  // navigation links scroll effect
  $('header nav li#js-scroll-to-features-navMenu').click(function () {
    $('html, body').animate({ scrollTop: $('#features').offset().top }, 1000);
  });

  $('header nav li#js-scroll-to-plans-navMenu').click(function () {
    $('html, body').animate({ scrollTop: $('#plans').offset().top }, 1000);
  });

  $('header nav li#js-scroll-to-cities-navMenu').click(function () {
    $('html, body').animate({ scrollTop: $('#cities').offset().top }, 1000);
  });

  $('header nav li#js-scroll-to-steps-navMenu').click(function () {
    $('html, body').animate({ scrollTop: $('#steps').offset().top }, 1000);
  });

  // animations on scroll
  $('#js-animation-on-scroll-fadeIn').waypoint(function (direction) {
    $('#js-animation-on-scroll-fadeIn').addClass('animated fadeIn');
  }, {
    offset: '50%'
  }); // this was the features

  $('#js-animation-on-scroll-fadeInUp').waypoint(function (direction) {
    $('#js-animation-on-scroll-fadeInUp').addClass('animated fadeInUp');
  }, {
    offset: '50%'
  });// this was the the mobile image in the steps

  $('#js-animation-on-scroll-fadeIn-cities').waypoint(function (direction) {
    $('#js-animation-on-scroll-fadeIn-cities').addClass('animated fadeIn');
  }, {
    offset: '50%'
  }); // this was the cities row

  $('#js-animation-on-scroll-pulse').waypoint(function (direction) {
    $('#js-animation-on-scroll-pulse').addClass('animated pulse');
  }, {
    offset: '50%'
  });

  // making responsive navigation'
  $('header a.js-responsive-navigation').click(function () {
    let nav = $('.main-nav');
    let icon = $('header a.js-responsive-navigation i');
    nav.slideToggle('0.2s');

    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.removeClass('ion-close-round');
      icon.addClass('ion-navicon-round');
    }
  });
});
