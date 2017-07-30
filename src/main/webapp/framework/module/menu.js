/**
 * Created by niow on 16/4/5.
 */
/*加载父菜单*/
var parentid;
function initTable() {
    var $table = $('#table_menu');
    $table.bootstrapTable({
        pagesize:"100",
        url: "/menu/page",
        toolbar: "#rootmenuToolbar",
        dataField: "data.entities",
        onClickRow: showChildrenMenu,
        queryParamsType: "limit",

        queryParams: function (params) {
            params.id = $("#searchbox").val();
            params.radmon = Math.random();
            params.sort = "id,desc";
            return params;
        },
        onLoadSuccess:function (data) {
            var firstMenu = data.data[0];
            initChildrenMenu(firstMenu);
            initAddChildrenMenu(firstMenu);
        },
        columns: [
            {
                field: 'title',
                title: '菜单名称',
                align: 'center',
                class: 'col-md-6',
                valign: 'middle'
            },{
                field: 'option',
                title: '操作',
                align: 'center',
                class: 'col-md-2',
                events: {
                    'click .like': function (e, value, row, index) {
                        $("#form_edit").modal();
                        showInformation(row,index);
                    },
                    'click .remove':function (e,value,row,index) {
                        deleteParentMenu(row);
                    }
                },
                formatter: function (value, row, index) {
                    var rs = "";
                    rs += '<a class="like" href="javascript:void(0)" title="菜单编辑">' +
                        '<span class="fa fa-pencil" aria-hidden="true" /></a>&nbsp;&nbsp;&nbsp;';
                    rs += '<a class="remove" href="javascript:void(0)" title="删除菜单">'+
                            '<span class="fa fa-remove" aria-hidden="true" /></a>';
                    return rs;

                }
            }
        ]
    });
    return $table;
}




/*显示子菜单数据*/
function initChildrenMenu(row, $element){
    var id = row.id;
    $("#parentMenuName").val(row.title);
    $("#table_children_menu").bootstrapTable({
        pagination: "true",
        pageList: "[5, 10, 20, ALL]",
        sidePagination: "server",
        toolbar: "#childrenToolbar",
        pageSize: "5",
        url:"/menu/" + id,
        clickToSelect: true,
        dataField: "data.entities",
        columns:[
            {
                field: 'title',
                title: '菜单名称',
                align: 'center',
                class: 'col-md-3',
                valign: 'middle'
            },
            {
                field: 'url',
                title: 'url',
                align: 'center',
                class: 'col-md-3',
                valign: 'middle'
            },{
                field: 'icon',
                title: 'icon',
                align: 'center',
                class: 'col-md-3',
                valign: 'middle'
            },{
                field: 'option',
                title: '操作',
                align: 'center',
                class: 'col-md-4',
                events: {
                    'click .remove': function (e, value, row, index) {
                        deleteChildrenMenu(row.id);
                    },
                    'click .like':function (e,value,row,index) {
                        $("#child_menu_form_edit").modal();
                        showChildMenuInf(row)
                    }
                },
                formatter: function (value, row, index) {
                    var rs = "";
                    rs += '<a class="remove" href="javascript:void(0)" title="删除子菜单">' +
                        '<span class="fa fa-remove" aria-hidden="true" /></a>&nbsp;&nbsp;&nbsp;';
                    rs += '<a class="like" href="javascript:void(0)" title="菜单编辑">' +
                        '<span class="fa fa-pencil" aria-hidden="true" /></a>';
                    return rs;

                }
            }
        ]
    });
}
function showChildrenMenu(row, $element) {
    var id = row.id;
    parentid = row.id;
    $("#parentMenuName").val(row.title);
    $("#table_children_menu").bootstrapTable("refresh",{url:"/menu/"+id});
    $(".line-selected").removeClass("line-selected");
    $element.addClass("line-selected");

}

/*可添加的子菜单数据表格*/
function initAddChildrenMenu(row,$element){
    $("#table_add_children_menu").bootstrapTable({
        pagination: "true",
        pageList: "[5, 10, 20, ALL]",
        sidePagination: "server",
        toolbar: "#childrenAddToolbar",
        pageSize: "5",
        url:"/menu/showAddChildrenMenu",
        clickToSelect: true,
        dataField: "data.entities",
        columns:[
            {
                field: 'title',
                title: '菜单名称',
                align: 'center',
                class: 'col-md-3',
                valign: 'middle'
            },
            {
                field: 'url',
                title: 'url',
                align: 'center',
                class: 'col-md-3',
                valign: 'middle'
            },{
                field: 'icon',
                title: 'icon',
                align: 'center',
                class: 'col-md-3',
                valign: 'middle'
            },{
                field: 'option',
                title: '操作',
                align: 'center',
                class: 'col-md-4',
                events: {
                    'click .addUser': function (e, value, row, index) {
                        addChildrenMenu(row.id,parentid);
                    }
                },
                formatter: function (value, row, index) {
                    var rs = "";
                    rs += '<a class="addUser" href="javascript:void(0)" title="添加子菜单">' +
                        '<span class="fa fa-plus" aria-hidden="true" /></a>';
                    return rs;

                }
            }
        ]
    });
}
function addChildrenMenu(id,pid) {

    $.ajax({
        url:"/menu/addChildrenMenu",
        datatype:"json",
        type:"post",
        data:{
            id : id,
            pid : pid
        },
        success:function (data,staus) {
            /*if(staus != success){
             toastr.error("更新失败");
             return;
             }
             if(data.code != 200){
             toastr.error(data.msg);
             return;
             }*/
            toastr.success(data.msg);
            $("#table_children_menu").bootstrapTable("refresh");
            $("#table_add_children_menu").bootstrapTable("refresh",{url:"/menu/showAddChildrenMenu"});
    },
        error: function (data, status) {
            toastr.error("添加失败，请检查网络和服务器运行情况或选择父菜单！");
        }
    });
}


/*删除选中父菜单*/
function deleteParentMenu(row) {
    swal({
        title: "确定删除?",
        text: "用户如果删除数据将不能找回",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "确定删除",
        closeOnConfirm: true
    }, function () {
        $.post(
            "/menu/deleteParent",
            {
                id : row.id
            }
        )
        $("#table_menu").bootstrapTable("refresh",{url:"/menu/page"});
        $("#table_children_menu").bootstrapTable("refresh");
        $("#table_add_children_menu").bootstrapTable("refresh",{url:"/menu/showAddChildrenMenu"});
    });
}



/*删除父菜单下的某个子菜单*/
function deleteChildrenMenu(menuId) {

    swal({
        title: "确定删除?",
        text: "用户如果删除数据将不能找回",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "确定删除",
        closeOnConfirm: true
    }, function () {
        $.post(
            "/menu/delete",
            {
                id : menuId
            }
        )
        $("#table_children_menu").bootstrapTable("refresh");
        $("#table_add_children_menu").bootstrapTable("refresh",{url:"/menu/showAddChildrenMenu"});
    });
}




/*添加父菜单*/
function addMenu() {
    $.post(
        "/menu",
        {
            name: $("#txt_menu_name_add").val(),
            icon: $("#txt_menu_icon_add").val(),
            order_index: $("#txt_menu_order_index_add").val()
        }
    )
    hideAddMenuForm();
    $("#table_menu").bootstrapTable("refresh",{url:"/menu/page"});
}
function hideAddMenuForm() {
    $('#form_menu_add').modal('hide');
    $("#txt_menu_name_add").val("");
    $("#txt_menu_icon_add").val("");
    $("#txt_menu_order_index_add").val("");
}
function showAddMenuForm() {
    $('#form_menu_add').modal().css({
        "margin-top": function () {
            return ($(this).height() / 12);
        }
    });
}


/*编辑子菜单*/
function showChildMenuInf(row){
    $("#txt_child_menu_id_edit").val(row.id);
    $("#txt_child_menu_name_edit").val(row.title);

    if($("#txt_child_menu_order_index_edit").val() == undefined||$("#txt_child_menu_order_index_edit").val() ==""){
        $("#txt_child_menu_order_index_edit").val(0);
    }else{
        $("#txt_child_menu_order_index_edit").val(row.orderIndex);
    }

    if($("#txt_child_menu_icon_edit").val() == undefined||$("#txt_child_menu_icon_edit").val() ==""){
        $("#txt_child_menu_icon_edit").val("fa-circle");
    }else {
        $("#txt_child_menu_icon_edit").val(row.icon);
    }

}function hideChildUpdateMenuForm() {
    $('#child_menu_form_edit').modal('hide');
    $("#txt_child_menu_name_edit").val("");
    $("#txt_child_menu_order_index_edit").val("");
    $("#txt_child_menu_icon_edit").val("");
}

function updateChildMenu() {
    $.ajax({
        url:"/menu/updateChild",
        type:"post",
        datatype:"json",
        data:{
            id:$("#txt_child_menu_id_edit").val(),
            title:$("#txt_child_menu_name_edit").val(),
            order_index:$("#txt_child_menu_order_index_edit").val(),
            icon:$("#txt_child_menu_icon_edit").val()
        },
        success:function (data,staus) {
            /* if(staus != success){
             toastr.error("更新失败");
             return;
             }
             if(data.code != 200){
             toastr.error(data.msg);
             return;
             }*/
            toastr.success(data,staus);
            $("#table_children_menu").bootstrapTable("refresh");
            hideChildUpdateMenuForm();
        }
    });
}




/*编辑父菜单*/
function showInformation(row,index) {

    $("#txt_menu_id_edit").val(row.id);
    $("#txt_menu_name_edit").val(row.title);
    if($("#txt_menu_order_index_edit").val() == undefined||$("#txt_menu_order_index_edit").val() ==""){
        $("#txt_menu_order_index_edit").val(0);
    }else{
        $("#txt_menu_order_index_edit").val(row.orderIndex);
    }

    if($("#txt_menu_icon_edit").val() == undefined||$("#txt_menu_icon_edit").val() ==""){
        $("#txt_menu_icon_edit").val("fa-circle");
    }else {
        $("#txt_menu_icon_edit").val(row.icon);
    }
}

function hideUpdateMenuForm() {
    $('#form_edit').modal('hide');
    $("#txt_menu_name_edit").val("");
    $("#txt_menu_order_index_edit").val("");
    $("#txt_menu_icon_edit").val("");
}

function updateMenu() {
    $.ajax({
        url:"/menu/update",
        type:"post",
        datatype:"json",
        data:{
            id:$("#txt_menu_id_edit").val(),
            title:$("#txt_menu_name_edit").val(),
            order_index:$("#txt_menu_order_index_edit").val(),
            icon:$("#txt_menu_icon_edit").val()
        },
        success:function (data,staus) {
           /* if(staus != success){
                toastr.error("更新失败");
                return;
            }
            if(data.code != 200){
                toastr.error(data.msg);
                return;
            }*/
            toastr.success(data,staus);
            $("#table_menu").bootstrapTable("refresh",{url:"/menu/page"})
            hideUpdateMenuForm();
        }
    });
}