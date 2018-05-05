/* Trigger when page is ready */
$(document).ready(function(){

	// Your functions go here

	

	$(".registration-unit-input-wrap input").on("change",function(){
		if($(this).val()!=''){
			$(this).parents(".registration-unit-input-wrap").addClass("filled");
		} else{
			$(this).parents(".registration-unit-input-wrap").removeClass("filled");
		}
	})
	$(".search-unit-input-wrap input").on("change",function(){
		if($(this).val()!=''){
			$(this).parents(".search-unit-input-wrap").addClass("filled");
		} else{
			$(this).parents(".search-unit-input-wrap").removeClass("filled");
		}
		
	})

});


/* Optional triggers

$(window).load(function() {
	
});

$(window).resize(function() { 
	
});

*/