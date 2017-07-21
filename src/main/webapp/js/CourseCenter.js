
$(".addbtn").click(function(){
	$("#popbg").fadeToggle("slow");
	$(".addcoursepop").fadeToggle("slow");
});
$(".close").click(function(){
	$("#popbg").fadeOut("slow");
	$(".addcoursepop").fadeOut("slow");
});
$("#popbg").click(function(){
	$("#popbg").fadeOut("slow");
	$(".addcoursepop").fadeOut("slow");
	$(".warning").fadeOut();
	$(".addsectionpop").fadeOut("slow");
	$(".addnodepop").fadeOut("slow");
	$(".addnodedetailpop").fadeOut("slow");
});
$("#del").click(function(){
	$("#popbg").fadeToggle();
	$(".warning").fadeToggle();
});
$("#cancelbtn").click(function(){
	$("#popbg").fadeToggle();
	$(".warning").fadeToggle();
});


$("#delbtn").click(function(){
	$("#popbg").fadeToggle();
	$(".warning").fadeToggle();
});