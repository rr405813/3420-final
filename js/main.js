//ROGALA FINAL--JS Doc for All Dogs Listing


//hover over doggies
$(document).ready( function() {

	$('.gallery-item').hover( function() {
		$(this).find('.img-title').fadeIn(300);
		$('.gallery-item p').hide();
	}, function() {
		$(this).find('.img-title').fadeOut(300);
		$('.gallery-item p').hide();
	});
	
});

//click on doggies for bio
$(document).ready(function(){
		$('.gallery-item').click(function(){
			$('.gallery-item h5').hide();
			$('.gallery-item p').show();
	});
});
