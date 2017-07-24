/**
 * Created by 申卓 on 2017/7/24.
 */
$(".modulelist a").click(function(){
    $(this).parent().siblings().children().removeClass("on");
    $(this).addClass ("on");
})
$(".directionlist a").click(function(){
    $(this).parent().siblings().children().removeClass("on");
    $(this).addClass ("on");
})
$(".classifylist a").click(function(){
    $(this).parent().siblings().children().removeClass("on");
    $(this).addClass ("on");
})
$(".timelist a").click(function(){
    $(this).parent().siblings().children().removeClass("on");
    $(this).addClass ("on");
});
$(".headwords a").click(function(){
    $(this).siblings().removeClass("active");
    $(this).addClass (" active");
})