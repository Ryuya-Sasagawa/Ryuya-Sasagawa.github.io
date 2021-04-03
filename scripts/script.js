'use strict';

var navPos = jQuery( '#navigator' ).offset().top; // グローバルメニューの位置
var navHeight = jQuery( '#navigator' ).outerHeight(); // グローバルメニューの高さ
jQuery( window ).on( 'scroll', function() {
  if ( jQuery( this ).scrollTop() > navPos ) {
    jQuery( '#main' ).css( 'padding-top', navHeight );
    jQuery( '#navigator' ).addClass( 'fixed' );
  } else {
    jQuery( '#main' ).css( 'padding-top', 0 );
    jQuery( '#navigator' ).removeClass( 'fixed' );
  }
});

$('a[href^="#"]').click(function(){
  // console.log('clicked')
  var speed = 400;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top - navHeight;
  $('body, html').animate({scrollTop: position}, speed, 'swing');
  return false;
});
