window.onload = function(){
	var num = document.getElementsByClassName("answnum");
	for (var i = 0; i < num.length; i++) {
		var x = parseInt(num[i].getElementsByTagName("span")[0].innerHTML);

		if(x!=0){
			num[i].className = "answnum not-zero";
		}else{
			num[i].className = "answnum";
		}
	}

	var up_down = document.getElementsByClassName("downico");

	var flag = 0;
	for (var i = 0; i < up_down.length; i++) {
		up_down[i].onclick = function(){
			var father = this.parentNode;
			var ans_box = father.getElementsByClassName("answ-box");

			if(flag == 0){
				ans_box[0].style.display = "block";
				flag = 1;
			}else if(flag == 1){
				ans_box[0].style.display = "none";
				flag = 0;
			}
		}
	}

}