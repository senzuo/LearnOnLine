flag1 = 0;
$(".guanzhu img").click(function(){
	var pre = $(this).prev();
	var prenum = parseInt(pre.text());
	if (flag1==0) {
		prenum = prenum + 1;
		$(this).attr("src","../../img/usercenter/guanzhu2.png");
		pre.css("color","red");
		pre.text(prenum);
		flag1 = 1;
	}else if(flag1 == 1){
		prenum = prenum - 1;
		$(this).attr("src","../../img/usercenter/guanzhu.png");
		pre.css("color","#fff");
		pre.text(prenum);
		flag1 = 0;
	}
})
