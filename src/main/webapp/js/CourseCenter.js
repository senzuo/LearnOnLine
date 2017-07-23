
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
	$(".sectionwarning").fadeOut("slow");
    $(".nodewarning").fadeOut("slow");
	$(".addsectionpop").fadeOut("slow");
	$(".addnodepop").fadeOut("slow");
    $(".editnodepop").fadeOut("slow");
	$(".addnodedetailpop").fadeOut("slow");
    $(".editnodedetailpop").fadeOut("slow");

    $(".warning").fadeOut("slow");
});


$("#del").click(function(){
	alert("fffff");
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