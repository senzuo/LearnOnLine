/**
 * Created by Administrator on 2016/3/10.
 */




//房屋信息开始-----------------------
function initHouseTable() {
    var $table = $('#tableHouse');
    $table.bootstrapTable({
        showRefresh: "true",
        showColumns: "true",
        toolbar: '#tableToolbar',
        pagination: "false",
        pageList: "[10, 20, 30, ALL]",
        sidePagination: "server",
        url: "/houses/records",
        dataField: "entities",
        pageSize: "10",
        queryParamsType: "limit",
        queryParams: function (params) {
            params.unit = $("#house_unit").val();
            params.name = $("#house_user_name").val();
            params.idCardNo = $("#house_user_idCardNo").val();
            params.mobile = $("#house_user_mobile").val();
            params.nodeId = $("#select_query").val();
            params.radmon = Math.random();
            params.sort = "creationTime,desc";
            return params;
        },
        columns: [
            {
                field: 'state',
                checkbox: true,
                align: 'center',
                valign: 'middle'
            }, {
                field: 'id',
                align: 'center',
                valign: 'middle',
                title: '房产ID'
            }, {
                field: 'unit',
                align: 'center',
                valign: 'middle',
                title: '房产名'
            }, {
                field: 'user.name',
                align: 'center',
                valign: 'middle',
                title: '用户姓名',
                formatter: function (value, row, index) {
                    var names = "";
                    for (i = 0; i < row.users.length; i++) {
                        names += '<div>' + row.users[i].name + '</div>';
                    }
                    return names == "" ? "-" : names;
                }
            }, {
                field: 'user.idCardNo',
                align: 'center',
                valign: 'middle',
                title: '身份证号',
                formatter: function (value, row, index) {
                    var names = "";
                    for (i = 0; i < row.users.length; i++) {
                        names += '<div>' + row.users[i].idCardNo + '</div>';
                    }
                    return names == "" ? "-" : names;
                }
            }, {
                field: 'user.mobile',
                align: 'center',
                valign: 'middle',
                title: '电话',
                formatter: function (value, row, index) {
                    var names = "";
                    for (i = 0; i < row.users.length; i++) {
                        names += '<div>' + row.users[i].mobile + '</div>';
                    }
                    return names == "" ? "-" : names;
                }
            }, {
                field: 'creationTime',
                align: 'center',
                valign: 'middle',
                title: '房产创建时间',
                formatter: function (value, row, index) {
                    return value == null ? "-" : dateFormat(new Date(value), 'yyyy-MM-dd HH:mm:ss');
                }
            }, {
                field: 'option',
                align: 'center',
                events: {
                    'click .user': function (e, value, row, index) {
                        showHouseUser(row, index);
                    },
                    'click .like': function (e, value, row, index) {
                        showUpdateHouseForm(row, index);
                    },
                    'click .remove': function (e, value, row, index) {
                        deleteHouse(row.id);
                    }
                },
                formatter: function (value, row, index) {
                    return [
                        '<a class="user" href="javascript:void(0)" title="归属编辑">',
                        '<span class="glyphicon glyphicon-user" aria-hidden="true" />',
                        '</a>&nbsp;&nbsp;&nbsp;',
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

function addHouse() {
    $.post("/houses",
        {
            unit: $("#txt_house_unit_add").val()
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
            hideAddHouseForm();
            $("#tableHouse").bootstrapTable("refresh");
        }
    );
}

function showAddHouseForm() {
    $('#form_house_add').modal().css({
        "margin-top": function () {
            return ($(this).height() / 3);
        }
    });
}

function hideAddHouseForm() {
    $('#form_house_add').modal('hide');
    $("#txt_house_unit_add").val("");
}

//修改房产信息
function updateHouse() {
    $.ajax({
        url: "/houses/" + $("#txt_house_id_update").val(),
        type: "put",
        data: {
            unit: $("#txt_house_unit_update").val()
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
            $("#tableHouse").bootstrapTable('updateRow', {
                index: $("#txt_house_index_update").val(),
                row: {
                    unit: $("#txt_house_unit_update").val()
                }
            });
            hideUpdateHouseForm();
        },
        error: function (data, status) {
            toastr.error("保存失败，请检查网络和服务器运行情况！");
        }
    });
}

function showUpdateHouseForm(row, index) {
    $("#txt_house_id_update").val(row.id);
    $("#txt_house_unit_update").val(row.unit);
    $("#txt_house_index_update").val(index);
    $('#form_house_update').modal().css({
        "margin-top": function () {
            return ($(this).height() / 3);
        }
    });
}

function hideUpdateHouseForm() {
    $('#form_house_update').modal('hide');
    $("#txt_house_unit_update").val("");
    $("#txt_house_id_update").val("");
    $("#txt_house_index_update").val("");
}

function deleteHouse(houseId) {
    swal({
        title: "确定删除?",
        text: "房产数据删除，会连同房产证数据一同删除，如果删除数据将不能找回!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "确定删除",
        closeOnConfirm: true
    }, function () {
        $.ajax({
            url: "/houses/" + houseId,
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
                $("#tableHouse").bootstrapTable('remove', {
                    field: 'id',
                    values: !isNaN(houseId) ? [houseId] : houseId
                });
            },
            error: function (data, status) {
                toastr.error("删除失败，请检查网络和服务器运行情况！");
            }
        });

    });
}

//删除用户
function deleteMultiHouse() {
    var ids = getIdSelections("tableHouse");
    if (ids.length <= 0) {
        toastr.warning("没有勾选中用户！");
        return;
    }
    deleteHouse(ids);
}

function showHouseUser(row, index) {
    $('#form_house_user').modal();
    $("#txt_house_user_id").val(row.id);
    initUserTable("tableUser", row.users);

}

function hideHouseUser() {
    $('#form_house_user').modal('hide');
    $("#txt_house_user_id").val("");
}


function initUserTable(userTable, containUsers) {
    var $table = $('#' + userTable);
    var excludeIds = "";
    if (containUsers != undefined) {
        var options = "";

        for (i = 0; i < containUsers.length; i++) {
            excludeIds += containUsers[i].id;
            options += "<option value='" + containUsers[i].id + "'>" + containUsers[i].name + "-" + containUsers[i].idCardNo + "</option>";
            if (i < containUsers.length - 1) {
                excludeIds += ",";
            }
        }
        $("#where").html(options);
    }
    $table.bootstrapTable({
        pagination: "true",
        pageList: "[5, 10]",
        sidePagination: "server",
        url: "/users",
        dataField: "entities",
        pageSize: "5",
        queryParamsType: "limit",
        queryParams: function (params) {
            params.name = $("#user_name").val();
            params.idCardNo = $("#user_idCardNo").val();
            params.mobile = $("#user_mobile").val();
            params.excludeIds = excludeIds;
            params.radmon = Math.random();
            return params;
        },
        columns: [
            {
                field: 'state',
                checkbox: true,
                align: 'center',
                valign: 'middle'
            }, {
                field: 'id',
                align: 'center',
                title: '用户ID'
            }, {
                field: 'name',
                align: 'center',
                title: '用户姓名'
            }, {
                field: 'idCardNo',
                align: 'center',
                title: '身份证号'
            }, {
                field: 'mobile',
                align: 'center',
                title: '电话'
            }, {
                field: 'wechatOpenid',
                align: 'center',
                title: '是否绑定微信',
                formatter: function (value, row, index) {
                    return value == null ? "-" : "已绑定";
                }
            }]
    });
    return $table;
}

function deleteHouseUser() {
    swal({
        title: "确定移除?",
        text: "移除此归属人",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "确定",
        closeOnConfirm: true
    }, function () {
        $.ajax({
            url: "/houseUserMapping/" + $("#txt_house_user_id").val() + "-" + $('#where option:selected').val(),
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
                $('#where option:selected').remove();
                toastr.success(data.msg);
            },
            error: function (data, status) {
                toastr.error("删除失败，请检查网络和服务器运行情况！");
            }
        });

    });
}

function addHouseUser() {
    var ids = getIdSelections("tableUser");
    if (ids.length <= 0) {
        toastr.warning("没有勾选中用户！");
        return;
    }
    $.ajax({
        url: "/houses/" + $("#txt_house_user_id").val()+"/user",
        type: "post",
        data:{
            userIds:ids.join(",")
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
            hideHouseUser();
            $("#tableHouse").bootstrapTable("refresh");
        },
        error: function (data, status) {
            toastr.error("删除失败，请检查网络和服务器运行情况！");
        }
    });

}