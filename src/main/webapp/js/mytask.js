window.onload = function(){
	var flag =0;
	var lookico =  document.getElementsByClassName("traindetailico");
	for (var i = 0; i < lookico.length; i++) {
		lookico[i].onclick = function(){
			var detail = this.parentNode.parentNode.getElementsByClassName("traindetailbox")[0];
			if (flag == 0) {
				detail.style.display = "block";
				flag = 1;
			}else if(flag == 1){
				detail.style.display = "none";
				flag = 0;
			}
		}
	}
}