var flag1 = 1;
$(document).on('click','#section',function(){
	// $(".control").toggle();
	if(flag1 == 1){
		$(".vedio").animate({width:'80%'});
		$(".control").animate({width:'20%'});
		flag1 = 0;
	}else if(flag1==0){
		$(".vedio").animate({width:'100%'});
		$(".control").animate({width:'0'});
		flag1 = 1;
	}
});
// $(document).on('click','.vedio',function(){
// 	var myVideo = $(".vedio");
// 	if (myVideo.paused) 
// 	  myVideo.play(); 
// 	else 
// 	  myVideo.pause(); 
// })
$(document).on('click','.close',function(){
	$(".popbox").hide();
	$(".popbox").hide();
});
$(document).on('click','.opennote',function(){
	$(".popbox").show();
});

$(document).on('click','.openquestion',function(){
	$(".popbox").show();
});

var video=$(".myvideo");
$("i.play-and-pause").click(function(){
	if(video[0].paused){
		video[0].play();
	}
	else{
		video[0].play();
	}
});
//我们需要使用loadedmetadata事件来确保视频元数据已经加载，否则将会获取不到视频时长，可能会显示为NaN
video.on('loadedmetadata', function() {
	var durationTime=video[0].duration;
	var MM=parseInt(durationTime/60);
	var SS=parseInt(durationTime%60);
	if(SS<10){
		SS = "0" + SS;
		}
	$('span.total-time').text(MM + ":" + SS); //在视频播放之前即可得知视频时长
});
//使用timeupdate来保证播放时间的更新
video.on('timeupdate', function() {
	var currTime=video[0].currentTime; //当前播放时间
	var MM=parseInt(currentTime/60);
	var SS=parseInt(currentTime%60);
	if(SS<10){
		SS = "0" + SS;
		}
	$('span.now-time').text(video[0].currentTime);
	//控制进度条长度按播放进度呈百分比显示
	var totalTime=video[0].duration;
	var percent=currTime/totalTime *100;
	$(".current-time").css("width",percent + "%"); 
});
$("i.full-screen").click(function(){
	//For Webkit
	video[0].webkitEnterFullscreen();
	//For Firefox
	video[0].mozRequestFullScreen();
	return false;
});

$(document).on('click','.reply',function(){
	$(".replybox").slideToggle();
});


var comlist = document.getElementById('commentnum');
var list = comlist.children;
alert(list.length)
$(document).on('click','.reply',function(){
	
});

