$( document ).ready(function() {
  // loader
  setTimeout(function(){
		$('body').addClass('loaded');
	}, 1000);
  // active nav link
  $( '.navbar-nav a' ).on( 'click', function () {
	$( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});
  // reveal
  window.sr = ScrollReveal();
      sr.reveal('.display-4', {
          duration: 2000,
          delay: 2000,
          origin: 'top',
          distance: '300px'
      });
  window.sr = ScrollReveal();
      sr.reveal('.d-flex', {
          duration: 2000,
          delay: 3000,
          origin: 'left',
          distance: '300px'
      });
});
