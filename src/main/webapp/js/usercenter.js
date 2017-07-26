var list = null;



window.onload = function(){
	var flag = 0;
	var updown = document.getElementsByClassName("up-down");
	for (var i = 0; i < updown.length; i++) {
		updown[i].onclick = function(){
			if(flag==0){
				var op = this.parentNode.getElementsByClassName("operate")[0];
				op.style.display = "block";
				flag = 1;
			}else if(flag == 1){
				var op = this.parentNode.getElementsByClassName("operate")[0];
				op.style.display = "none";
				flag = 0;
			}	
		}
	}
}

//获取点击按钮对应的课程名称
$.fn.return = function(operate,ico){
	var n = $(operate);
	var hide = n.parent().parent();
	var i = hide .parent().children("img");
	hide.mouseleave(function(){
		$(this).hide(); 
	});
	n.click(function(){
		var father = $(this).parent().parent().parent().parent();
		var x = father.children("div."+ico);
		list = x.children("h3");
		alert(list.text());
	})
}
$(".learning-course-list").return(".del-learning-course img","learning-course-info");
$(".learning-course-list").return(".collect-learning-course img","learning-course-info");

$(".history-course-list").return(".del-history-course img","history-course-info");
$(".history-course-list").return(".collect-history-course img","history-course-info");

$(".collect-course-list").return(".del-collect-course img","collect-course-info");
$(".collect-course-list").return(".collect-collect-course img","collect-course-info");
