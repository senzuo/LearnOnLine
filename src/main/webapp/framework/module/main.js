/**
 * Created by xiang on 2017/7/24.
 */
function initMenu() {
    $.ajax({
        type: "get",
        datatype: "json",
        url: "/menu/ownMenu.json",
        success: function (data) {
            var menuHtml = "";
            for (var i = 0; i < data.data.length; i++) {
                //authModule[data.result[i].moduleCode] = data.result[i];
                if (data.data[i].childMenus == undefined || data.data[i].childMenus.length == 0) {
                    menuHtml += '<li> <a href="' + data.data[i].url + '">';
                    menuHtml += '<i class="fa ';

                    if (data.data[i].icon != undefined && data.data[i].icon != "") {
                        menuHtml += data.data[i].icon + '"></i> <span>';
                    } else {
                        menuHtml += 'fa-circle-o"></i> <span>';
                    }
                    menuHtml += data.data[i].title + '</span></a></li>';

                }
                else {
                    menuHtml += '<li class="treeview">' +
                        '<a href="#"> <i class="fa ';
                            if(data.data[i].icon!=undefined&& data.data[i].icon != ""){
                                menuHtml += data.data[i].icon + '"></i>';
                            }else{
                                menuHtml+='fa-dashboard"></i>';
                            }
                       menuHtml+= '<span>' + data.data[i].title + '</span>' +
                        '<span class="pull-right-container">' +
                        '<i class="fa fa-angle-left pull-right"></i>' +
                        '</span>' +
                        '</a>' +
                        '<ul class="treeview-menu">';
                    for (var j = 0; j < data.data[i].childMenus.length; j++) {
                        console.log(data.data[i].childMenus);
                        menuHtml += '<li>' +
                            '<a href="' + data.data[i].childMenus[j].url + '">' +
                            '<i class="fa ';
                        if (data.data[i].childMenus[j].icon != undefined && data.data[i].childMenus[j].icon != "") {
                            menuHtml += data.data[i].childMenus[j].icon + '"></i> <span>';
                        } else {
                            menuHtml += 'fa-circle-o"></i> <span>';
                        }
                        menuHtml += data.data[i].childMenus[j].title + '</a></li></li>';
                    }
                    menuHtml += '</ul>' + '</li>';
                }
            }
            $("#menulist").append(menuHtml);
        }
    })
}

$(document).ready(function () {
    initMenu();
    /*var current_url = window.location.href;
     $("#menulist").find('a').filter(function () {
     return this.href
     }).parent('li').child('i').addClass('fa fa-circle-o').child('i').parent('li');*/
});