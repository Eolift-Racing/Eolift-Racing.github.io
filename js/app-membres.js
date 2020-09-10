$(document).ready(function() {

	$('.menus h2').on('click', function(e) {
		$(this).next('ul').toggleClass('open');
		e.preventDefault(); 
		return false;
	});
	
	$('.menus h3').on('click', function(e) {
		$(this).next('ul').toggleClass('open');
		e.preventDefault(); 
		return false;
	});

	$('.membre2').hover(

		function() {
		var memberId;
		memberId = $(this).attr('id');
		$('#photo2').attr('hidden',false);
		$('#photo2').attr('src','images/voile/membres/'+memberId+'.jpg');
		

	}, function() {
		$('#photo2').attr('hidden', true);
	});

		$('.membre2').on('click', function(e) {
		$(this).next('ul').toggleClass('open');
		e.preventDefault(); 
		return false;
	});

});
