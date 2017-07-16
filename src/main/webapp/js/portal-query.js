/**
 * Created by langqi.ni on 2016/3/18.
 */
    //初始化弹出提示框
toastr.options = {
    closeButton: false,
    debug: false,
    progressBar: false,
    positionClass: "toast-center-center",
    onclick: null,
    showDuration: "300",
    hideDuration: "800",
    timeOut: "3000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut"
};
$(document).ready(function () {
    $.ajax({
        url: "/users/" + $("#userId").val() + "/houses",
        //url: "/users/3/houses",
        type: "get",
        success: function (data, status) {
            if (status != "success") {
                toastr.error("操作失败，请检查网络！");
                $("#show").html('<div class="list-state"><div class="xxx">我们正在马不停蹄的办理房产证过程中，最新状态请留意我们公众号推送信息，谢谢！</div></div>');
                return;
            }
            if (data.code != 200) {
                toastr.error(data.msg);
                $("#show").html('<div class="list-state"><div class="xxx">我们正在马不停蹄的办理房产证过程中，最新状态请留意我们公众号推送信息，谢谢！</div></div>');
                return;
            }
            var html = ""
            if (data.entities.length > 0) {
                for (n = 0; n < data.entities.length; n++) {
                    var house = data.entities[n];
                    html += '<div class="list-state">';
                    html += '<div class="tabs bg-white horizontal cell2"><div class=" item current">' + house.unit + '</div></div>';
                    html += '<ul class="desc-list ok">';

                    for (m = 0; m < house.nodeRecordList.length; m++) {
                        var record = house.nodeRecordList[m];
                        html += '<li class="flex-box row"><div class="after"><div></div></div><div class="cont flex1"><div class="clearfix"><div class="row">';
                        html += '<span class="title">' + record.node.name + '</span><span class="leader">'
                        if (record.nextNode != undefined) {
                            html += "办理中，下一步:" + record.nextNode.name;
                        }
                        html += '</span>';
                        html += '</div></div>';
                        html += '<div class="description">';
                        if (record.description != undefined) {
                            var ps = record.description.split(";");
                            for (i = 0; i < ps.length; i++) {
                                html += '<p>' + ps[i] + '</p>';
                            }
                        }
                        html += '<p>' + dateFormat(record.creationTime, "yyyy-MM-dd") + '</p>';
                        html += ' </div>';
                    }
                    html += '</div> </li> </ul> </div>';
                }
            }else{
                html = '<div class="list-state"><div class="xxx">我们正在马不停蹄的办理房产证过程中，最新状态请留意我们公众号推送信息，谢谢！</div></div>';
            }
            $("#show").html(html);

        },
        error: function (data, status) {
            $("#show").html('<div class="list-state"><div class="xxx">我们正在马不停蹄的办理房产证过程中，最新状态请留意我们公众号推送信息，谢谢！</div></div>');
            toastr.error("操作失败，请检查网络！");
        }
    });
});