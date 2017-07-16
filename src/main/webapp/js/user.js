// ---------------------------用户内容开始------------------------
// 用户表格
function initUserTable(userTable, name, idCardNo, mobile) {
    var $table = $('#' + userTable);

    $table.bootstrapTable({
        showRefresh: "true",
        showColumns: "true",
        toolbar: '#userToolbar',
        pagination: "false",
        pageList: "[10, 20, 30, ALL]",
        sidePagination: "server",
        url: "/usertest",
        dataField: "entities",
        pageSize: "10",
        queryParamsType: "limit",
        queryParams: function (params) {
            params.user_id = $("#user_id").val();
            params.user_name = $("#user_name").val();
            params.radmon=Math.random();
            return params;
        },
        columns: [
            {
                field: 'state',
                checkbox: true,
                align: 'center',
                valign: 'middle'
            }, {
                field: 'stuid',
                align: 'center',
                title: '用户ID'
            }, {
                field: 'stuname',
                align: 'center',
                title: '用户姓名'
            }, {
                field: 'stupwd',
                align: 'center',
                title: '用户密码'
            }, {
                field: 'option',
                align: 'center',
                events: {
                    'click .like': function (e, value, row, index) {
                        showUpdateUserForm(row, index);
                    },
                    'click .remove': function (e, value, row, index) {
                        deleteUser(row.stuid);
                    }
                },
                formatter: function (value, row, index) {
                    return [
                        '<a class="like" href="javascript:void(0)" title="修改">',
                        '<span class="glyphicon glyphicon-pencil" aria-hidden="true" />',
                        '</a>&nbsp;&nbsp;&nbsp;',
                        '<a class="remove" href="javascript:void(0)" title="删除">',
                        '<i class="glyphicon glyphicon-remove"></i>',
                        '</a>'
                    ].join('');
                },
                title: '操作'
            }]
    });
    return $table;
}

function showAddUserForm() {
    $('#form_user_add').modal().css({
        "margin-top": function () {
            return ($(this).height() / 3);
        }
    });
}

function hideAddUserForm() {
    $('#form_user_add').modal('hide');
    $("#txt_user_name_add").val("");
    $("#txt_user_pwd_add").val("");
    $("#txt_user_mobile_add").val("");
}

//添加用户
function addUser() {
    $.post("/usertest",
        {
            name: $("#txt_user_name_add").val(),
            pwd: $("#txt_user_pwd_add").val(),
        },
        function (data, status) {
            if (status != "success") {
                toastr.error("保存失败，请检查网络和服务器运行情况！");
                return;
            }
            if (data.code != 200) {
                toastr.error(data.msg);
                return;
            }
            toastr.success(data.msg);
            hideAddUserForm();
            $("#tableUser").bootstrapTable("refresh");
        }
    );
}

//删除用户
function deleteMultiUser() {
    var ids = getIdSelections("tableUser");
    if (ids.length <= 0) {
        toastr.warning("没有勾选中用户！");
        return;
    }
    deleteUser(ids);
}


function deleteUser(userId) {
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
            url: "/usertest/" + userId,
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
                    field: 'id',
                    values: !isNaN(userId) ? [userId] : userId
                });
            },
            error: function (data, status) {
                toastr.error("删除失败，请检查网络和服务器运行情况！");
            }
        })
    });
}

function showUpdateUserForm(rowStu, index) {
    $("#txt_user_id_update").val(rowStu.stuid);
    $("#txt_user_name_update").val(rowStu.stuname);
    $("#txt_user_psw_update").val(rowStu.stupwd);
    $("#txt_user_index_update").val(index);
    $('#form_user_update').modal().css({
        "margin-top": function () {
            return ($(this).height() / 3);
        }
    });
}

function hideUpdateUserForm() {
    $('#form_user_update').modal('hide');
    $("#txt_user_index_update").val("");
    $("#txt_user_psw_update").val("");
}
//修改用户信息
function updateUser() {
    $.ajax({
        url: "/usertest/" + $("#txt_user_id_update").val(),
        type: "put",
        data: {
            stuname: $("#txt_user_name_update").val(),
            stupwd: $("#txt_user_psw_update").val()
        },
        success: function (data, status) {
            if (status != "success") {
                toastr.error("保存失败，请检查网络和服务器运行情况！");
                return;
            }
            if (data.code != 200) {
                toastr.error(data.msg);
                return;
            }
            toastr.success(data.msg);
            $("#tableUser").bootstrapTable('updateRow', {
                index: $("#txt_user_index_update").val(),
                row: {
                    stuname: $("#txt_user_name_update").val(),
                    stupwd: $("#txt_user_psw_update").val()
                }
            });
            hideUpdateUserForm();
        },
        error: function (data, status) {
            toastr.error("保存失败，请检查网络和服务器运行情况！");
        }
    });
}
//用户信息到此结束-------------------