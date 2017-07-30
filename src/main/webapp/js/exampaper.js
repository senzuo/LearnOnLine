$(".addexamitem").click(function(){
	$(".addpaperpop").fadeToggle("slow");
	$(".bg").fadeToggle("slow");
});
$(".bg").click(function(){
	$(".addpaperpop").fadeOut("slow");
	$(".bg").fadeOut("slow");
})
$(".closebtn img").click(function(){
	$(".addpaperpop").fadeOut("slow");
	$(".bg").fadeOut("slow");
})

