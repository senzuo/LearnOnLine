/**
 * Created by Administrator on 7/24/2017.
 */
$.fn.sjld = function(shenfen,chengshi,quyu){
    var first = null; //存一级菜单值
    var second = null; // 二级菜单值
    var third = null; //三级菜单值

    var sfp = shenfen+' p' //选中标题
    var csp = chengshi+' p'
    var qyp = quyu+' p'

    var sfs = shenfen+' .m_zlxg2' //选中下来菜单容器
    var css = chengshi+' .m_zlxg2'
    var qys = quyu+' .m_zlxg2'

    var sfli = shenfen+' ul li'  // 选中下来菜单项目
    var csli = chengshi+' ul li'
    var qyli = quyu+' ul li'

    $('.m_zlxg').click(function(){
        $(this).find('.m_zlxg2').slideDown(200);
    })
    $('.m_zlxg').mouseleave(function(){
        $(this).find('.m_zlxg2').slideUp(200);
    })

    var sfgsmr = provinceList;
    var csgsmr = provinceList[0].cityList;
    var qygsmr = provinceList[0].cityList[0].areaList;
    var kuandu = new Array();

    //默认显示
    $(sfp).text(sfgsmr[0].name);
    first = sfgsmr[0].name;
    $(csp).text(csgsmr[0].name);
    second = csgsmr[0].name;
    $(qyp).text(qygsmr[0]);
    third = qygsmr[0];

    for(a=0;a<sfgsmr.length;a++){
        var sfmcmr = sfgsmr[a].name;
        var sfnrmr = "<li>"+sfmcmr+"</li>";
        $(shenfen).find('ul').append(sfnrmr);
    }

    for(b=0;b<csgsmr.length;b++){
        var csmcmr = csgsmr[b].name;

        var csnrmr = "<li>"+csmcmr+"</li>";
        $(chengshi).find('ul').append(csnrmr);
        kuandu[b] =csmcmr.length*14+20;
    }

    for(c=0;c<qygsmr.length;c++){
        var qymcmr = qygsmr[c];
        var qynrmr = "<li>"+qymcmr+"</li>";
        $(quyu).find('ul').append(qynrmr);
    }

    Array.max=function(array)
    {
        return Math.max.apply(Math,array);
    }
    var max_kd = Array.max(kuandu);
    if(max_kd<118){
        $(css).width('118px');
    }
    else{
        $(css).width(max_kd);
    }

    /*---------------------------------------------------------------------*/
    //点击一级菜单，根据数组中的联动构建二级和三级菜单
    $(sfli).click(function(){
        var dqsf = $(this).text();
        first = dqsf;
        $(shenfen).find('p').text(dqsf);
        $(shenfen).find('p').attr('title',dqsf);
        var sfnum = $(this).index()-1;
        var csgs = provinceList[sfnum].cityList;
        var csgs2 = provinceList[sfnum].cityList[0].areaList;
        $(chengshi).find('ul').text('');
        var kuandu = new Array();
        for(i=0;i<csgs.length;i++){
            var csmc = csgs[i].name;
            var csnr = "<li>"+csmc+"</li>";
            $(chengshi).find('ul').append(csnr);
            kuandu[i] =csmc.length*14+20;
        }
        Array.max=function(array)
        {
            return Math.max.apply(Math,array);
        }
        var max_kd = Array.max(kuandu);
        if(max_kd<91){
            $(css).width('91px');
        }
        else{
            $(css).width(max_kd);
        }

        var qygsdqmr = provinceList[sfnum].cityList[0].areaList;
        $(quyu).find('ul').text('');
        for(j=0;j<qygsdqmr.length;j++){
            var qymc = qygsdqmr[j];
            var qynr = "<li>"+qymc+"</li>";
            $(quyu).find('ul').append(qynr);
        }

        $(csp).text(csgs[0].name);
        $(qyp).text(csgs2[0]);

        $('#sfdq_num').val(sfnum);

        /*------------------*/
        // 点击二级菜单，根据数组联动关系构建三级菜单
        $(csli).click(function(){
            var dqcs = $(this).text();
            second = dqcs;
            var dqsf_num = $('#sfdq_num').val();
            if(dqsf_num==""){
                dqsf_num=0;
            }
            else{
                var dqsf_num = $('#sfdq_num').val();
            }
            $(chengshi).find('p').text(dqcs);
            $(chengshi).find('p').attr('title',dqcs);
            var csnum = $(this).index();
            var qygs = provinceList[dqsf_num].cityList[csnum].areaList;
            $(quyu).find('ul').text('');
            for(j=0;j<qygs.length;j++){
                var qymc = qygs[j];
                var qynr = "<li>"+qymc+"</li>";
                $(quyu).find('ul').append(qynr);
            }
            $(qyp).text(qygs[0]);
            $('#csdq_num').val(csnum);
            $(this).parents('.m_zlxg2').width(kuandu);
            $(qyli).click(function(){
                var dqqy = $(this).text();
                $(quyu).find('p').text(dqqy);
                $(quyu).find('p').attr('title',dqqy);
            })//区级

            $(qyli).click(function(){
                var dqqy = $(this).text();
                third = dqqy;
                $(quyu).find('p').text(dqqy);
                $(quyu).find('p').attr('title',dqqy);
            })//区级
        })	//市级
        /*------------------*/
    })//省级

    /*---------------------------------------------------------------------*/
}


var provinceList = [
    {name:'管理学院', cityList:[
        {name:'社会',
            areaList:['社会入门学1','社会入门学2','社会入门学3']},
        {name:'商业',
            areaList:['金融','服务业']}
    ]},

    {name:'IT精英', cityList:[
        {name:'前段开发',
            areaList:['HTML','CSS','JS']},
        {name:'后端开发',
            areaList:['java']},
        {name:'数据库',
            areaList:['sql']}
    ]}
];
