/**
 * Created by 申卓 on 2017/8/2.
 */
function initDriverTable() {
    var $table = $('#table_driver');
    $table.bootstrapTable({
        showRefresh: "true",
        showColumns: "true",
        pagination: "true",
        pageList: "[10, 20, 30, ALL]",
        sidePagination: "server",
        url: "/driver/page",
        toolbar: "#driverToolbar",
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
                class: 'col-md-1',
                valign: 'middle'
            }, {
                field: 'jobNum',
                title: '工号',
                align: 'center',
                class: 'col-md-1',
                valign: 'middle'
            }, {
                field: 'name',
                title: '姓名',
                align: 'center',
                class: 'col-md-1',
                valign: 'middle'
            },{
                field: 'age',
                title: '年龄',
                align: 'center',
                class: 'col-md-1',
                valign: 'middle'
            }, {
                field: 'gender',
                title: '性别',
                align: 'center',
                class: 'col-md-1',
                formatter: function (value, row, index) {
                    if (value == 1) return "男";
                    else if (value == 0) return "女";
                    else return value;
                },
                valign: 'middle'
            },{
                field: 'idCart',
                title: '身份证号',
                align: 'center',
                class: 'col-md-1',
                valign: 'middle'
            },{
                field: 'mobile',
                title: '联系电话',
                align: 'center',
                class: 'col-md-1',
                valign: 'middle'
            },{
                field: 'licenseType',
                title: '驾照类型',
                align: 'center',
                class: 'col-md-1',
                valign: 'middle'
            },{
                field: 'licenseTime',
                title: '初次领驾照时间',
                align: 'center',
                class: 'col-md-1',
                valign: 'middle'
            },  {
                field: 'option',
                title: '操作',
                align: 'center',
                class: 'col-md-3',
                events: {
                    'click .like': function (e, value, row, index) {
                        showUpdateDriverForm(row, index);
                    },
                    'click .remove': function (e, value, row, index) {
                        deleteDriver(row.id);
                    }
                },
                formatter: function (value, row, index) {
                    var rs = "";
                    rs += '<a class="like" href="javascript:void(0)" title="详情编辑">' +
                        '<span class="fa fa-user" aria-hidden="true" /></a>';
                    rs += '&nbsp;&nbsp;&nbsp;<a class="remove" href="javascript:void(0)" title="删除">' +
                        '<i class="glyphicon glyphicon-remove"></i></a>';
                    return rs;

                }
            }]
    });
    return $table;
}

// 新增driver
function showAddDriverForm() {
    $('#form_driver_add').modal().css({
        "margin-top": function () {
            return ($(this).height()/5);
        }
    });
}


//添加driver
function addNewDriver() {

    $.ajax({
        url: "/driver/create",
        type: "post",
        dataType: "json",
        data: {
            jobNum: $("#txt_dirver_job_num_add").val(),
            name:$("#txt_driver_name_add").val(),
            age:$("#txt_driver_age_add").val(),
            gender:$("#txt_driver_gender_add").val(),
            idCart:$("#txt_driver_idcard_add").val(),
            mobile:$("#txt_driver_mobile_add").val(),
            licenseType: $("#txt_driver_type_add").val(),
            licenseTime: $("#txt_driver_licence_time_add").val()
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
            hideAddRDriverForm();
            $("#table_driver").bootstrapTable("refresh");
            $("#table_driver").bootstrapTable('remove', {
                field: 'id',
                values: !isNaN(roleId) ? [roleId] : roleId,
            });
        },
        error: function (data, status) {
            toastr.error("添加失败，请检查网络和服务器运行情况！");
        }
    });
}

/**
 * 隐藏表单
 */
function hideAddRDriverForm() {
    $('#form_driver_add').modal('hide');
    $("#txt_dirver_job_num_add").val("");
    $("#txt_driver_name_add").val("");
    $("#txt_driver_age_add").val("");
    $("#txt_driver_idcard_add").val("");
    $("#txt_driver_mobile_add").val("");
    $("#txt_driver_type_add").val("");
    $("#txt_driver_licence_time_add").val("");
}

function deleteDriver(driverid) {
    swal({
            title: "确定删除?",
            text: "如果删除数据将不能找回",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "确定删除",
            closeOnConfirm: true
        }, function () {
            $.ajax({
                url: "/driver/" + driverid + "/delete",
                type: "post",
                dataType: "json",
                success: function (data, status) {
                    if (status != "success") {
                        toastr.error("删除失败，请检查网络和服务器运行情况!!!");
                        return;
                    }
                    if (data.code != 200) {
                        toastr.error(data.msg);
                        return;
                    }
                    toastr.success(data.msg);
                    $("#table_driver").bootstrapTable("refresh");
                    $("#table_driver").bootstrapTable('remove', {
                        field: 'id',
                        values: !isNaN(roleId) ? [roleId] : roleId
                    });
                },
                error: function (data, status) {
                    toastr.error("删除失败，请检查网络和服务器运行情况！");
                }
            });

        }
    );
}


/**
 * 显示更改司机信息
 * @param row
 * @param index
 */
function showUpdateDriverForm(row, index) {
    $("#txt_driver_id_update").val(row.id);
    $("#txt_dirver_job_num_update").val(row.jobNum);
    $("#txt_driver_name_update").val(row.name);
    $('#txt_driver_age_update').val(row.age);
    $("#txt_driver_gender_update").val(row.gender);
    $("#txt_driver_idcard_update").val(row.idCart);
    $("#txt_driver_mobile_update").val(row.mobile);
    $("#txt_driver_license_type_update").val(row.licenseType);
    $("#txt_driver_license_time_update").val(row.licenseTime);
    $('#form_driver_update').modal().css({
        "margin-top": function () {
            return ($(this).height() / 3);
        }
    });
}


/**
 * 修改司机信息
 */
function updateDriver() {
    $.ajax({
        url: "/driver/" + $("#txt_driver_id_update").val() + "/update",
        type: "post",
        dataType:"json",
        data: {
            jobNum: $("#txt_dirver_job_num_update").val(),
            name: $("#txt_driver_name_update").val(),
            age: $("#txt_driver_age_update").val(),
            gender: $("#txt_driver_gender_update").val(),
            idCart: $("#txt_driver_idcard_update").val(),
            mobile: $("#txt_driver_mobile_update").val(),
            licenseType: $("#txt_driver_license_type_update").val(),
        },
        success: function (data) {
            if (data.code != 200) {
                toastr.error(data.msg);
                return;
            }
            toastr.success(data.msg);
            hideUpdateDriverForm();
            $("#table_driver").bootstrapTable("refresh");
        },
        error: function (data, status) {
            toastr.error("保存失败，请检查网络和服务器运行情况！");
        }
    });
}


/**
 * 隐藏用户更新表
 */
function hideUpdateDriverForm() {
    $('#form_driver_update').modal('hide');
    $("#txt_user_username_add").val("");
    $("#txt_user_password_add").val("");
    $("#txt_user_passwordConfirm_add").val("");
    $("#txt_user_name_add").val("");
    $("#txt_user_mobile_add").val("");
    $("#txt_user_email_add").val("");
}






//获取表格中选中的ID
function getIdSelections(tableName) {
    return $.map($("#" + tableName).bootstrapTable('getSelections'), function (row) {
        return row.id
    });
}


//删除勾选的多个用户
function deleteMultiDriver() {
    var ids = getIdSelections("table_driver");
    if (ids.length <= 0) {
        toastr.warning("没有勾选中用户！");
        return;
    }
    deleteDriver(ids);
}

