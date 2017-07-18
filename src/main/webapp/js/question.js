// <!-- 校友之家评论功能实现 -->
window.onload=function(){
	var comlist = document.getElementById('FriendsHome_visit');
	var list = comlist.children;
	var timer;

	// 回复、删除评论功能
	function operete(el){
		var commentBox = el.parentNode.parentNode.parentNode;
        var box = commentBox.parentNode.parentNode.parentNode;
        var txt = el.innerHTML;
        var user = commentBox.getElementsByClassName('user')[0].innerHTML;
        var textarea = box.getElementsByClassName('com_box')[0];
        if (txt == '回复') {
            textarea.focus();
            textarea.value = '回复 ' + user;
            textarea.onkeyup();
        }
        else {
            removenode(commentBox);
        }
	}

	// 删除节点函数
	function removenode(node){
		node.parentNode.removeChild(node);
		
	}

	// 点赞函数
	function praisegood(box,el){

		var txt = el.innerHTML;
        var praisesTotal = box.getElementsByClassName('GoodNum')[0];
        var oldTotal = parseInt(praisesTotal.getAttribute('total'));//pareInt 转换成数字
        var newTotal;
        if (txt == '赞') {
            newTotal = oldTotal + 1;
            praisesTotal.setAttribute('total', newTotal);
            praisesTotal.innerHTML = (newTotal == 1) ? '我觉得很赞' : '我和' + oldTotal + '个人觉得很赞';
            el.innerHTML = '取消赞';
        }
        else {
            newTotal = oldTotal - 1;
            praisesTotal.setAttribute('total', newTotal);
            praisesTotal.innerHTML = (newTotal == 0) ? '' : newTotal + '个人觉得很赞';
            el.innerHTML = '赞';
        }
        praisesTotal.style.display = (newTotal == 0) ? 'none' : 'block';
	}

	// 获取当前时间函数
	function formateDate(date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var h = date.getHours();
        var mi = date.getMinutes();
        m = m > 9 ? m : '0' + m;
        return y + '-' + m + '-' + d + ' ' + h + ':' + mi;
    }

	// 发表评论函数
	function reply(box, el) {
        var commentList = box.getElementsByClassName('comment_list')[0];
        var textarea = box.getElementsByClassName('com_box')[0];
        var commentBox = document.createElement('div');
        commentBox.className = 'comment_box clearfix';
        commentBox.setAttribute('user', 'self');
        commentBox.innerHTML =
            '<img src="images/touxiang2.PNG" alt="">'+
			'<div class="comment_content">'+
				'<p class="comment_text">'+
					'<span class="user">我：</span>'+textarea.value+
				'</p>'+
				'<p class="conment_time">'+
					formateDate(new Date())+
					'<a href="javascript:;" class="comment_good" total="0" my="0">赞</a>'+
					'<a href="javascript:;" class="comment_operet">删除</a>'+
				'</p>'+
			'</div>'
        commentList.appendChild(commentBox);
        textarea.value = '';
        textarea.onblur();
    }

    // 赞回复功能函数
    function goodreply(el){
    	var oldTotal = parseInt(el.getAttribute('total'));
    	var me = parseInt(el.getAttribute('my'));
    	var newTotal;
    	if(me == 0){
    		newTotal = oldTotal + 1;
    		el.setAttribute('total', newTotal);
    		el.setAttribute('my', 1);
    		el.innerHTML = newTotal + " 取消赞";
    	}
    	else{
    		newTotal = oldTotal - 1;
    		el.setAttribute('total',newTotal);
    		el.setAttribute('my',0);
    		el.innerHTML = (newTotal==0) ? "赞" : newTotal + " 赞";
    	}
    	el.style.display = (newTotal == 0) ? "" : "inline-block";
    }


	for(var i=1; i < list.length; i++){
		list[i].onclick=function(e){
			e = e || window.event;
            var el = e.srcElement || e.target;
			switch (el.className){
				// 删除分享
				case "deletekey":
					removenode(el.parentNode.parentNode);
					break;
				// 点赞
				case "good":
					praisegood(el.parentNode.parentNode.parentNode,el);
					break;
				//发表评论
				case "btn":
					reply(el.parentNode.parentNode.parentNode, el);
                    break;
                case "comment_good":
                	goodreply(el);
                	break;
                case "comment_operet":
                	operete(el);
                	break;
			}
		}

		var textArea = list[i].getElementsByClassName('com_box')[0];

        //评论获取焦点
        textArea.onfocus = function () {
            this.parentNode.className = 'add_comment_box add_comment_box_on';
            this.value = this.value == '评论···' ? '' : this.value;
            this.onkeyup();
        }

        //评论失去焦点
        textArea.onblur = function () {
    		var T = this;
            var val = T.value;
            if (val == '') {
                timer = setTimeout(function () {
                    T.value = '评论···';
                    T.parentNode.className = 'add_comment_box';
                }, 300);
            }
        }

        // 评论按键
        textArea.onkeyup = function () {
            var val = this.value;
            var len = val.length;
            var els = this.parentNode.children;
            var btn = els[2];
            var word = els[1];
            if (len <=0 || len > 140) {
                btn.className = 'btn btn_off';
            }
            else {
                btn.className = 'btn';
            }
            word.innerHTML = len + '/140';
        }
	}
}