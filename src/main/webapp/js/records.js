function loadEndNode() {
    $.ajax({
        url: "/nodes/endPoint",
        type: "get",
        data: {
            radmon: Math.random()
        },
        async: false,
        success: function (data, status) {
            if (status != "success") {
                toastr.error("请检查网络和服务器运行情况！");
                return;
            }
            if (data.code != 200) {
                return;
            }
            if (data.entities[0] != null) {
                $("#endNodeId").val(data.entities[0].id);
            }
        }
    });
}

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
                //    field: 'state',
                //    checkbox: true,
                //    align: 'center',
                //    valign: 'middle'
                //}, {
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
                field: 'lastNodeRecord.node.name',
                align: 'center',
                valign: 'middle',
                title: '当前节点'
            }, {
                field: 'lastNodeRecord.description',
                align: 'center',
                width: '250',
                valign: 'middle',
                title: '备注'
            }, {
                field: 'lastNodeRecord.creationTime',
                align: 'center',
                width: '200',
                valign: 'middle',
                title: '节点时间',
                formatter: function (value, row, index) {
                    return value == null ? "-" : dateFormat(new Date(value), 'yyyy-MM-dd HH:mm:ss');
                }
            }, {
                field: 'option',
                align: 'center',
                valign: 'middle',
                events: {
                    'click .add': function (e, value, row, index) {
                        showAdd(row.id);
                    },
                    'click .next': function (e, value, row, index) {
                        toNext(row.lastNodeRecord.id);
                    },
                    'click .remove': function (e, value, row, index) {
                        deleteRecord(row.id);
                    }
                },
                formatter: function (value, row, index) {
                    var rs = "";
                    if (row.lastNodeRecord == null) {
                        rs = [
                            '<a class="add" href="javascript:void(0)" title="新建流程">',
                            '<i class="glyphicon glyphicon-plus"></i>',
                            '</a>&nbsp;&nbsp;&nbsp;',
                        ].join('');
                        return rs;
                    }
                    if (row.lastNodeRecord != undefined && row.lastNodeRecord.node.id != $("#endNodeId").val()) {
                        rs += [
                            '<a class="next" href="javascript:void(0)" title="下一步">',
                            '<i class="glyphicon glyphicon-circle-arrow-down"></i>',
                            '</a>&nbsp;&nbsp;&nbsp;',
                            '<a class="remove" href="javascript:void(0)" title="删除">',
                            '<i class="glyphicon glyphicon-remove"></i>',
                            '</a>'
                        ].join('');
                    } else {
                        rs += [
                            '<a class="remove" href="javascript:void(0)" title="删除">',
                            '<i class="glyphicon glyphicon-remove"></i>',
                            '</a>'
                        ].join('');
                    }
                    return rs;
                },
                title: '操作'
            }]
    });
    return $table;
}

function loadNode(selectId) {
    $.ajax({
        url: "/nodes",
        type: "get",
        data: {
            radmon: Math.random()
        },
        success: function (data, status) {
            if (status != "success") {
                toastr.error("加载节点失败，请检查网络和服务器运行情况！");
                return;
            }
            if (data.code != 200) {
                toastr.error(data.msg);
                return;
            }

            var options = "";
            if ("select_query" == selectId) {
                options = '<option value="" id=""></option>';
            }
            for (i = 0; i < data.entities.length; i++) {
                var node = data.entities[i];
                options += "<option value='" + node.id + "' id='" + node.index + "'>" + node.index + "-" + node.name + "</option>";
            }
            $("#" + selectId).html(options);

        },
        error: function (data, status) {
            toastr.error("加载节点失败，请检查网络和服务器运行情况！");
        }
    });
}

function showAdd(houseId) {
    $("#txt_house_id").val(houseId);
    $("#record_add").modal().css({
        "margin-top": function () {
            return ($(this).height() / 3);
        }
    });
    loadNode("select_add");
}

function hideAdd() {
    $("#txt_house_id").val("");
    $("#record_add").modal('hide');
}

function addRecord() {
    $.ajax({
        url: "/nodeRecords",
        type: "post",
        data: {
            houseId: $("#txt_house_id").val(),
            nodeId: $('#select_add').val()
        },
        success: function (data, status) {
            if (status != "success") {
                toastr.error("创建流程失败，请检查网络和服务器运行情况！");
                return;
            }
            if (data.code != 200) {
                toastr.error(data.msg);
                return;
            }
            hideAdd();
            if (data.entities != undefined) {
                if (data.entities[0].node.descTemplate == 1) {
                    showNote(data.entities[0].id);
                } else if (data.entities[0].node.descTemplate == 2){
                    showDesc2(data.entities[0].id);
                }
            }
            $('#tableHouse').bootstrapTable("refresh");
        },
        error: function (data, status) {
            toastr.error("创建流程失败，请检查网络和服务器运行情况！");
        }
    });
}

function toNext(recordId) {
    swal({
        title: "确定操作?",
        text: "当前房产证办理流程将进入下一节点",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "确定",
        closeOnConfirm: true
    }, function () {
        $.ajax({
            url: "/nodeRecords/" + recordId + "/next",
            type: "post",
            success: function (data, status) {
                if (status != "success") {
                    toastr.error("操作失败，请检查网络和服务器运行情况！");
                    return;
                }
                if (data.code != 200) {
                    toastr.error(data.msg);
                    return;
                }
                toastr.success(data.msg);
                if (data.entities != undefined) {
                    if (data.entities[0].node.descTemplate == 1) {
                        showNote(data.entities[0].id);
                    } else if (data.entities[0].node.descTemplate == 2){
                        showDesc2(data.entities[0].id);
                    }
                }
                $('#tableHouse').bootstrapTable("refresh");
            },
            error: function (data, status) {
                toastr.error("操作失败，请检查网络和服务器运行情况！");
            }
        });

    });
}

function showNote(recordId) {
    $("#txt_record_id").val(recordId);
    $("#txt_idCardNo_note").val("");
    $("#txt_mobile_note").val("");
    $("#txt_name_note").val("");
    $("#record_desc_1").modal().css({
        "margin-top": function () {
            return ($(this).height() / 3);
        }
    });
}

function hideNote() {
    $("#txt_idCardNo_note").val("");
    $("#txt_mobile_note").val("");
    $("#txt_name_note").val("");
    $("#txt_record_id").val("");
    $("#record_desc_1").modal('hide');
}

function showDesc2(recordId) {
    $("#txt_record_id_2").val(recordId);
    $("#txt_mobile_note_2").val("");
    $("#record_desc_2").modal().css({
        "margin-top": function () {
            return ($(this).height() / 3);
        }
    });
}

function hideDesc2() {
    $("#txt_mobile_note_2").val("");
    $("#txt_record_id_2").val("");
    $("#record_desc_2").modal('hide');
}

function addNote(templateId) {
    var desc = "";
    var recordId = "";
    if (templateId == 1) {
        desc = "领证人:" + $("#txt_name_note").val() + ";身份证:" + $("#txt_idCardNo_note").val() + ";手机号:" + $("#txt_mobile_note").val();
        recordId = $("#txt_record_id").val();
    } else if (templateId == 2) {
        desc = "发证方联系方式：" + $("#txt_mobile_note_2").val();
        recordId = $("#txt_record_id_2").val();
    }
    $.ajax({
        url: "/nodeRecords/" + recordId,
        type: "PUT",
        data: {
            note: desc
        },
        success: function (data, status) {
            if (status != "success") {
                toastr.error("操作失败，请检查网络和服务器运行情况！");
                return;
            }
            if (data.code != 200) {
                toastr.error(data.msg);
                return;
            }
            toastr.success(data.msg);
            hideNote();
            hideDesc2();
            $('#tableHouse').bootstrapTable("refresh");
        }
        ,
        error: function (data, status) {
            toastr.error("操作失败，请检查网络和服务器运行情况！");
        }
    })
    ;
}

function deleteRecord(houseId) {
    swal({
        title: "确定操作?",
        text: "删除此房产的办证流程",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "确定",
        closeOnConfirm: true
    }, function () {
        $.ajax({
            url: "/houses/" + houseId + "/nodeRecords",
            type: "delete",
            data: {
                houseId: houseId
            },
            success: function (data, status) {
                if (status != "success") {
                    toastr.error("操作失败，请检查网络和服务器运行情况！");
                    return;
                }
                if (data.code != 200) {
                    toastr.error(data.msg);
                    return;
                }
                toastr.success(data.msg);
                $('#tableHouse').bootstrapTable("refresh");
            },
            error: function (data, status) {
                toastr.error("操作失败，请检查网络和服务器运行情况！");
            }
        });
    });
}