$(".addsection").click(function(){
	$(".addsectionpop").fadeToggle("slow");
	$("#popbg").fadeToggle("slow");
});
$(".close").click(function(){
	$(".addsectionpop").fadeOut("slow");
	$(".addnodepop").fadeOut("slow");
});
$(".sectadd").click(function(){
	$(".addnodepop").fadeToggle("slow");
	$("#popbg").fadeToggle("slow");
});
$(".nodeadd").click(function(){
	$(".addnodedetailpop").fadeToggle("slow");
	$("#popbg").fadeToggle("slow");
});
$(".close").click(function(){
	$("#popbg").fadeOut("slow");
	$(".addnodedetailpop").fadeOut("slow");
});

$(".sectionedit").click(function(){
	$(".addnodepop").fadeToggle("slow");
	$("#popbg").fadeToggle("slow");
});

$(".nodeedit").click(function(){
	$(".addnodedetailpop").fadeToggle("slow");
	$("#popbg").fadeToggle("slow");
});