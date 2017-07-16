/**
 * Created by Administrator on 2016/3/10.
 */




//房屋信息开始-----------------------
function initHouseTable() {
    var $table = $('#tableHouse');
    $table.bootstrapTable({
        showRefresh: "true",
        showColumns: "true",
        toolbar: '#houseToolbar',
        pagination: "false",
        pageList: "[10, 20, 30, ALL]",
        sidePagination: "server",
        url: "/houseUserMapping",
        dataField: "entities",
        pageSize: "10",
        queryParamsType: "limit",
        queryParams: function (params) {
            params.unit = $("#house_unit").val();
            params.name = $("#house_user_name").val();
            params.idCardNo = $("#house_user_idCardNo").val();
            params.mobile = $("#house_user_mobile").val();
            params.radmon = Math.random();
            params.sort = "houseId,desc";
            return params;
        },
        columns: [
            {
                field: 'state',
                checkbox: true,
                align: 'center',
                valign: 'middle'
            }, {
                field: 'house.id',
                align: 'center',
                title: '房屋ID'
            }, {
                field: 'house.unit',
                align: 'center',
                title: '房产名'
            }, {
                field: 'user.name',
                align: 'center',
                title: '用户姓名'
            }, {
                field: 'user.idCardNo',
                align: 'center',
                title: '身份证号'
            }, {
                field: 'user.mobile',
                align: 'center',
                title: '电话'
            }, {
                field: 'house.creationTime',
                align: 'center',
                title: '房产创建时间',
                formatter: function (value, row, index) {
                    return value == null ? "-" : dateFormat(new Date(value), 'yyyy-MM-dd HH:mm:ss');
                }
            }, {
                field: 'option',
                align: 'center',
                events: {
                    'click .remove': function (e, value, row, index) {
                        deleteHouse(row.house.id,row.user.id,index);
                    }
                },
                formatter: function (value, row, index) {
                    return [
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

function deleteHouse(houseId,userId,index) {
    swal({
        title: "确定删除?",
        text: "删除房产归属记录",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "确定删除",
        closeOnConfirm: true
    }, function () {
        $.ajax({
            url: "/houseUserMapping/" + houseId+"-"+userId,
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
                $("#tableHouse").bootstrapTable('refresh');
            },
            error: function (data, status) {
                toastr.error("删除失败，请检查网络和服务器运行情况！");
            }
        });

    });
}

//删除房产
function deleteMultiHouse() {
    var ids = getIdSelections("tableHouse");
    if (ids.length <= 0) {
        toastr.warning("没有勾选中房产！");
        return;
    }
    deleteHouse(ids);
}