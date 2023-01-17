$(function(){
	
	//マウスカーソルの変更
	//=================================
	//カーソル要素
	var cursor=$("#cursor");
	//mousemoveイベントでカーソル要素を移動
	$(document).on("mousemove",function(e){
		var x=e.clientX;
		var y=e.clientY;
		cursor.css({
			"opacity":"1",
			"top":y+"px",
			"left":x+"px"
		});
	});
	
	//aタグホバー
	$("a").on({
		"mouseleave": function() {
			cursor.removeClass("active");
		}
	});
});