/**
 * Created by niow on 16/4/5.
 */


var authModules = [];
var $roleDelete = $("#role_delete");
var $roleSave = $("#role_save");
var $authTable = $('#table_auth');


function initAuthModuleTable() {
    var $authModuleTable = $('#table_auth_module');
    $authModuleTable.bootstrapTable({
        url: "/auth/getRoleAuthModule.json?roleId=" + $("#roleId").val(),
        dataField: "data.datas",
        onClickRow: function (row, $element) {
            var m = authModules[row.moduleCode];
            $authTable = $('#table_auth').bootstrapTable("load", m.authorityList);
            if(m.authorityList == undefined) {
                m.authorityList = [];
            }
            for (var i = 0; i < m.authorityList.length; i++) {
                var row = m.authorityList[i];
                if (row.hasOwn == true) {
                    $authTable.bootstrapTable("check", i);
                }
            }

            $(".line-selected").removeClass("line-selected");
            $element.addClass("line-selected");
        },
        queryParams: function (params) {
            return params;
        },
        columns: [
            {
                field: 'description',
                align: 'center',
                class: 'col-md-1',
                valign: 'middle'
            }
        ]
        , onLoadSuccess: function (data) {
            for (var i = 0; i < data.data.length; i++) {
                authModules[data.data[i].moduleCode] = data.data[i];
                $authModuleTable.find("[data-index=" + i + "]").attr("module", data.data[i].moduleCode);
            }
            $authModuleTable.find("[data-index=0]").addClass("line-selected");
            $authTable =initAuthTable(authModules[data.data[0].moduleCode]);

            var row = data.data[0];
            var m = authModules[row.moduleCode];
            if(m == undefined) {
                return;
            }
            for (var i = 0; i < m.authorityList.length; i++) {
                var row = m.authorityList[i];
                if (row.hasOwn == true) {
                    $authTable.bootstrapTable("check", i);
                }
            }
        }
    });
    return $authModuleTable;
}

function initAuthTable(authModule) {
    // var $authTable = $('#table_auth');
    $authTable.bootstrapTable({
            pagination: "false",
            data: authModule.authorityList,
            striped: true,
            columns: [
                {
                    field: 'state',
                    checkbox: true,
                    align: 'center',
                    class: 'col-md-1',
                    valign: 'middle'
                },
                {
                    field: 'description',
                    title: '权限名称',
                    align: 'center',
                    class: 'col-md-1',
                    valign: 'middle'
                }, {
                    field: 'url',
                    title: 'URL',
                    align: 'center',
                    class: 'col-md-1',
                    valign: 'middle'
                }, {
                    field: 'authCode',
                    title: 'AuthCode',
                    align: 'center',
                    class: 'col-md-1 auth',
                    valign: 'middle'
                }
            ]
        }
    )
    return $authTable;
}

//删除选中的行
function deleteAuthority(authCode) {
    swal({
        title: "确定删除?",
        text: "用户如果删除数据将不能找回",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "确定删除",
        closeOnConfirm: true
    }, function () {
        $.ajax({
            url: "/auth/" + authCode,
            type: "delete",
            success: function (data, status) {
                if (status != "success") {
                    toastr.error("删除失败，请检查网络和服务器运行情况！");
                    return;
                }
                if (data.code != 200) {
                    toastr.error(data.msg);
                    return;
                }
                toastr.success(data.msg);
                $("#tableUser").bootstrapTable('remove', {
                    field: 'authCode',
                    values: !isNaN(authCode) ? [authCode] : authCode
                });
            },
            error: function (data, status) {
                toastr.error("删除失败，请检查网络和服务器运行情况！");
            }
        });

    });
}

//点击删除选中的所有行
$roleDelete.click(function () {
    var authCodes = getIdSelections();
    if (authCodes.length <= 0) {
        toastr.warning("没有勾选中用户！");
        return;
    }
    alert("没有调用函数");
    //deleteAuthority(authCodes);
})

//获取表格中选中的Authority实体数组
function getIdSelections() {
    return $.map($("#table_auth").bootstrapTable('getSelections'), function (row) {
        //row为Authority实体数组
        return row.authCode;
    });
}

$roleSave.click(function () {
    submit();
})


function submit() {
    var moduleCode = $('.line-selected').attr('module');//.parent
    var addAuthCode = new Array();
    var removeAuthCode = new Array();
    var authList = authModules[moduleCode].authorityList;
    $('td.auth').each(function () {
        console.log($(this).html());
        var checked = $(this).parent().hasClass("selected");
        var authCode = $(this).text();
        for (var i = 0; i < authList.length; i++) {
            var auth = authList[i];
            if (auth.authCode == authCode) {
                if (auth.hasOwn == true && checked) {
                    continue;
                }
                if (auth.hasOwn == false && !checked) {
                    continue;
                }
                if (auth.hasOwn == true && !checked) {
                    removeAuthCode.push(authCode);
                    continue;
                }
                if (auth.hasOwn == false && checked) {
                    addAuthCode.push(authCode);
                    continue;
                }
            }
        }
    });
    $.ajax({
        type: "post",
        dataType: "json",
        data: {
            roleId: $("#roleId").val(),
            addAuthCode: addAuthCode.join(","),
            removeAuthCode: removeAuthCode.join(",")
        },
        url:"/auth/editRoleAuth.json",
        success: function (data) {
            if (data.code == 200) {
                toastr.success("保存成功");
            } else {
                toastr.error(data.msg);
            }
        },
        error: function (err) {
            toastr.error("操作失败");
        }
    });
}


