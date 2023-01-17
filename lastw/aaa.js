$(function(){
	
	var cursor=$("#cursor");
	$(document).on("mousemove",function(e){
		var x=e.clientX;
		var y=e.clientY;
		cursor.css({
			"opacity":"1",
			"top":y+"px",
			"left":x+"px"
		});
	});
	
	$("a").on({
		"mouseleave": function() {
			cursor.removeClass("active");
		}
	});
});