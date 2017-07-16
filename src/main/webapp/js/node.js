/**
 * Created by langqi.ni on 2016/3/15.
 */
/**
 * 向上移动选中的option
 */
function upSelectedOption() {
    if (null == $('#where').val()) {
        alert('请选择一项');
        return false;
    }
//选中的索引,从0开始
    var optionIndex = $('#where').get(0).selectedIndex;
//如果选中的不在最上面,表示可以移动
    if (optionIndex > 0) {
        $('#where option:selected').insertBefore($('#where option:selected').prev('option'));
    }
}

/**
 * 向下移动选中的option
 */
function downSelectedOption() {
    if (null == $('#where').val()) {
        alert('请选择一项');
        return false;
    }
//索引的长度,从1开始
    var optionLength = $('#where')[0].options.length;
//选中的索引,从0开始
    var optionIndex = $('#where').get(0).selectedIndex;
//如果选择的不在最下面,表示可以向下
    if (optionIndex < (optionLength - 1)) {
        $('#where option:selected').insertAfter($('#where option:selected').next('option'));
    }
}


function deleteNode() {
    var nodeId = $("#where").val();
    swal({
        title: "确定删除?",
        text: "节点如果删除,相关节点流程产生的流程记录同时被删除,数据将不能找回",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "确定删除",
        closeOnConfirm: true
    }, function () {
        $.ajax({
            url: "/nodes/" + nodeId,
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
                loadNode();
            },
            error: function (data, status) {
                toastr.error("删除失败，请检查网络和服务器运行情况！");
            }
        });

    });
}

/**
 * 获取所有的option值
 */
function getSelectedOption() {
//获取Select选择的Text
    var checkText = $('#where').find('option:selected').text();
//获取Select选择的Value
    var checkValue = $('#where').val();
    alert('当前被选中的text=' + checkText + ', value=' + checkValue);
    var ids = '';
    var options = $('#where')[0].options;
    for (var i = 0; i < options.length; i++) {
        ids = ids + '`' + options[i].id;
    }
    alert('当前被选中的编号顺序为' + ids);
}

function showAddNodeForm() {
    $("#form_node_add").modal().css({
        "margin-top": function () {
            return ($(this).height() / 3);
        }
    });
}

function hideAddNodeForm() {
    $("#form_node_add").modal('hide');
    $("#txt_node_name_add").val("");
}

/**
 * 添加option
 */
function addNode() {
    $.ajax({
        url: "/nodes",
        type: "post",
        data: {
            name: $("#txt_node_name_add").val()
        },
        success: function (data, status) {
            if (status != "success") {
                toastr.error("添加节点失败，请检查网络和服务器运行情况！");
                return;
            }
            if (data.code != 200) {
                toastr.error(data.msg);
                return;
            }
            //var node = data.entities[0];
            //var options = "<option value='" + node.id + "' id='" + node.index + "'>"+node.index+"-" + node.name + "</option>";
            //$('#where').append(options);
            hideAddNodeForm();
            loadNode();
            toastr.success(data.msg);
        },
        error: function (data, status) {
            toastr.error("添加节点失败，请检查网络和服务器运行情况！");
        }
    });
}

function loadNode() {
    $.ajax({
        url: "/nodes",
        type: "get",
        data:{
            radmon:Math.random()
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
            for (i = 0; i < data.entities.length; i++) {
                var node = data.entities[i];
                options += "<option value='" + node.id + "' id='" + node.index + "'>" + node.index + "-" + node.name + "</option>";
            }
            $("#where").html(options);
        },
        error: function (data, status) {
            toastr.error("加载节点失败，请检查网络和服务器运行情况！");
        }
    });
}

function updateIndex() {
    var options = $('#where')[0].options;
    var ids = "";
    for (var i = 0; i < options.length; i++) {
        ids += options[i].value + "-" +i+"-"+options[i].text.split("-")[1];
        if (i < options.length - 1) {
            ids += ",";
        }
    }
    $.ajax({
        url: "/nodes",
        type: "put",
        data: {
            ids: ids
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
            loadNode();
        },
        error: function (data, status) {
            toastr.error("加载节点失败，请检查网络和服务器运行情况！");
        }
    });
}

function showUpdateNodeForm() {
    $("#txt_node_name_update").val($('#where').find('option:selected').text().split("-")[1]);
    $("#txt_node_id_update").val($('#where').val());
    $("#form_node_update").modal().css({
        "margin-top": function () {
            return ($(this).height() / 3);
        }
    });
}

function hideUpdateNodeForm() {
    $("#form_node_update").modal('hide');
    $("#txt_node_name_update").val("");
    $("#txt_node_id_update").val("");
}

/**
 * 添加option
 */
function updateNode() {
    $.ajax({
        url: "/nodes/"+$("#txt_node_id_update").val(),
        type: "put",
        data: {
            name: $("#txt_node_name_update").val(),
        },
        success: function (data, status) {
            if (status != "success") {
                toastr.error("添加节点失败，请检查网络和服务器运行情况！");
                return;
            }
            if (data.code != 200) {
                toastr.error(data.msg);
                return;
            }
            hideUpdateNodeForm();
            loadNode();
            toastr.success(data.msg);
        },
        error: function (data, status) {
            toastr.error("添加节点失败，请检查网络和服务器运行情况！");
        }
    });
}