define( ['assets/router'],
	function( Router ){
	var initialize = function(){
		Router.initialize();
		$('.backBtn').live( 'click', function(){
			window.history.back();
		});
	}
	return {
		initialize: initialize
	}
});	