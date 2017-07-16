

function logout() {
    $.ajax({
        url: "/auth/admin",
        type: "delete",
        success: function (data) {
            if (data.code != 200) {
                alert(data.msg);
                return;
            }
            location.href = "/admin/view/login";
        },
        error: function (data, status) {
            alert("退出登陆出错，请查看网络和服务器运行情况！");
        }
    });
}

//左边栏切换
function page(index) {
    $(".container-fluid").addClass("hidden");
    $("#page" + index).removeClass("hidden");
}

//获取表格中选中的ID
function getIdSelections(tableName) {
    return $.map($("#" + tableName).bootstrapTable('getSelections'), function (row) {
        return row.id
    });
}

function dateFormat(time, format) {
    var t = new Date(time);
    var tf = function (i) {
        return (i < 10 ? '0' : '') + i
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
        switch (a) {
            case 'yyyy':
                return tf(t.getFullYear());
                break;
            case 'MM':
                return tf(t.getMonth() + 1);
                break;
            case 'mm':
                return tf(t.getMinutes());
                break;
            case 'dd':
                return tf(t.getDate());
                break;
            case 'HH':
                return tf(t.getHours());
                break;
            case 'ss':
                return tf(t.getSeconds());
                break;
        }
    })
}