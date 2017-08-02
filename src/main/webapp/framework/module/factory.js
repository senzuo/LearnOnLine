/**
 * Created by 申卓 on 2017/8/2.
 */
function initFacTable() {
    var $table = $('#table_factory');
    $table.bootstrapTable({
        showRefresh: "true",
        showColumns: "true",
        pagination: "true",
        pageList: "[10, 20, 30, ALL]",
        sidePagination: "server",
        url: "/factory/page",
        toolbar: "#factoryToolbar",
        dataField: "data.entities",
        pageSize: "10",
        clickToSelect: true,
        queryParamsType: "limit",
        columns: [
            {
                checkbox: true,
            },
            {
                field: 'id',
                title: 'ID',
                align: 'center',
                class: 'col-md-3',
                valign: 'middle'
            }, {
                field: 'name',
                title: '厂商名称',
                align: 'center',
                class: 'col-md-3',
                valign: 'middle'
            }, {
                field: 'description',
                title: '描述介绍',
                align: 'center',
                class: 'col-md-4',
                valign: 'middle'
            }, {
                field: 'option',
                title: '操作',
                align: 'center',
                class: 'col-md-4',
                events: {
                    'click .like': function (e, value, row, index) {
                        showEditFactory(row);
                    },
                    'click .remove': function (e, value, row, index) {
                        editFactory(row.id);
                    }
                },
                formatter: function (value, row, index) {
                    var rs = "";
                    rs += '<a class="like" href="javascript:void(0)" title="详情编辑">' +
                        '<span class="glyphicon glyphicon-edit" aria-hidden="true" /></a>';
                    rs += '&nbsp;&nbsp;&nbsp;<a class="remove" href="javascript:void(0)" title="添加型号">' +
                        '<i class="glyphicon glyphicon-plus"></i></a>';
                    return rs;

                }
            }]
    });
    return $table;
}

// 新增user
function showAddFactoryForm() {
    $('#form_factory_add').modal().css({
        "margin-top": function () {
            return ($(this).height()/3);
        }
    });
}


//添加factory
function addNewFactory() {

    $.ajax({
        url: "/factory/create",
        type: "post",
        dataType: "json",
        data: {
            name: $("#txt_factory_name_add").val(),
            description:$("#txt_factory_desc_add").val(),
        },
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
            hideAddRUserForm();
            $("#table_factory").bootstrapTable("refresh");
            $("#table_factory").bootstrapTable('remove', {
                field: 'id',
                values: !isNaN(roleId) ? [roleId] : roleId,
            });
        },
        error: function (data, status) {
            toastr.error("删除失败，请检查网络和服务器运行情况！");
        }
    });
}

/**
 * 隐藏表单
 */
function hideAddRUserForm() {
    $('#form_factory_add').modal('hide');
    $("#txt_user_username_add").val("");
    $("#txt_user_password_add").val("");
    $("#txt_user_passwordConfirm_add").val("");
    $("#txt_user_name_add").val("");
    $("#txt_user_mobile_add").val("");
    $("#txt_user_email_add").val("");
}

// function deleteUser(userId) {
//     swal({
//             title: "确定删除?",
//             text: "用户如果删除数据将不能找回",
//             type: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#DD6B55",
//             confirmButtonText: "确定删除",
//             closeOnConfirm: true
//         }, function () {
//             $.ajax({
//                 url: "/user/" + userId + "/delete",
//                 type: "post",
//                 dataType: "json",
//                 success: function (data, status) {
//                     if (status != "success") {
//                         toastr.error("删除失败，请检查网络和服务器运行情况!!!");
//                         return;
//                     }
//                     if (data.code != 200) {
//                         toastr.error(data.msg);
//                         return;
//                     }
//                     toastr.success(data.msg);
//                     $("#table_factory").bootstrapTable("refresh");
//                     $("#table_factory").bootstrapTable('remove', {
//                         field: 'id',
//                         values: !isNaN(roleId) ? [roleId] : roleId
//                     });
//                 },
//                 error: function (data, status) {
//                     toastr.error("删除失败，请检查网络和服务器运行情况！");
//                 }
//             });
//
//         }
//     );
// }


/**
 * 显示更改用户信息
 * @param row
 * @param index
 */
function showEditFactory(row) {
    $("#txt_factory_id_update").val(row.id);
    $("#txt_factory_name_update").val(row.name);
    $("#txt_factory_desc_update").val(row.description);
    $('#form_factory_update').modal().css({
        "margin-top": function () {
            return ($(this).height() / 3);
        }
    });
}


/**
 * 修改用户信息
 */
function editFactory() {

    $.ajax({
        url: "/factory/update",
        type: "post",
        dataType:"json",
        data: {
            id : $("#txt_factory_id_update").val(),
            name: $("#txt_factory_name_update").val(),
            description: $("#txt_factory_desc_update").val(),
        },
        success: function (data) {
            if (data.code != 200) {
                toastr.error(data.msg);
                return;
            }
            toastr.success(data.msg);
            // $("#table_factory").bootstrapTable('updateRow', {
            //     index: $("#txt_user_id_update").val(),
            //     row: {
            //         name: $("#txt_user_name_update").val()
            //     }
            // });
            hideUpdateFactoryForm();
            $("#table_factory").bootstrapTable("refresh");
        },
        error: function (data, status) {
            toastr.error("保存失败，请检查网络和服务器运行情况！");
        }
    });
}


/**
 * 隐藏用户更新表
 */
function hideUpdateFactoryForm() {
    $('#form_factory_update').modal('hide');
    $("#txt_factory_id_update").val("");
    $("#txt_factory_name_update").val("");
    $("#txt_factory_desc_update").val("");
}


/**
 * 显示更改密码信息
 * @param row
 * @param index
 */
function showUpdatePasswordForm(row, index) {
    $("#txt_userPassword_id_update").val(row.id);
    $('#form_password_update').modal().css({
        "margin-top": function () {
            return ($(this).height() / 3);
        }
    });
}

/**
 * 修改密码信息
 */
function updatePassword() {

    if ($("#txt_password_newPassword_update").val() != $("#txt_password_newPasswordConfirm_update").val()) {
        toastr.error("两次密码不相同!");
        return;
    }

    $.ajax({
        url: "/user/" + $("#txt_userPassword_id_update").val() + "/update",
        type: "post",
        dataType:"json",
        data: {
            oldPassword:$("#txt_password_oldPassword_update").val(),
            newPassword:$("#txt_password_newPassword_update").val(),
        },
        success: function (data) {
            if (data.code != 200) {
                toastr.error(data.msg);
                return;
            }
            toastr.success(data.msg);
            // $("#table_factory").bootstrapTable('updateRow', {
            //     index: $("#txt_user_id_update").val(),
            //     row: {
            //         name: $("#txt_user_name_update").val()
            //     }
            // });
            hideUpdatePasswordForm();
            $("#table_factory").bootstrapTable("refresh");
        },
        error: function (data, status) {
            toastr.error("保存失败，请检查网络和服务器运行情况！");
        }
    });
}

/**
 * 隐藏密码更新表
 */
function hideUpdatePasswordForm() {
    $('#form_password_update').modal('hide');
    $("#txt_password_oldPassword_update").val("");
    $("#txt_password_newPassword_update").val("");
    $("#txt_password_newPasswordConfirm_update").val("");
}


//获取表格中选中的ID
function getIdSelections(tableName) {
    return $.map($("#" + tableName).bootstrapTable('getSelections'), function (row) {
        return row.id
    });
}


//删除勾选的多个用户
function deleteMultiUser() {
    var ids = getIdSelections("table_factory");
    if (ids.length <= 0) {
        toastr.warning("没有勾选中用户！");
        return;
    }
    deleteUser(ids);
}

