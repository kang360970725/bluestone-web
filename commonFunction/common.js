export default{
  initTimeFn: function (now) {
    var year = now.getFullYear();
    var month = (now.getMonth() + 1).toString();
    var day = (now.getDate()).toString();
    var hour = (now.getHours()).toString();
    var minute = (now.getMinutes()).toString();
    var second = (now.getSeconds()).toString();
    if (month.length == 1) {
      month = "0" + month;
    }
    if (day.length == 1) {
      day = "0" + day;
    }
    if (hour.length == 1) {
      hour = "0" + hour;
    }
    if (minute.length == 1) {
      minute = "0" + minute;
    }
    if (second.length == 1) {
      second = "0" + second;
    }
    var dateTime = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    return dateTime
  },
  // initNumFn: function (num, callback, len) {
  initNumFn: function (num, len) {
    let length = len || 6;
    num = num.toString()
    if (num == 0 || num == '') {
      return num;
    }
    let nums = num.split('.'),
      float = nums[1];
    if (!nums[1]) {
      return num;
    }
    if (nums[1].length > length) {
      nums[1] = nums[1].substring(0, length)
      num = nums.join('.');
      return num;
    }
    if (nums[1].length == length) {
      return num;
    }
    if (nums[1].length < length) {
      for (let i = nums[1].length; i < length; i++) {
        float = float + '0'
      }
      nums[1] = float;
      num = nums.join('.');
      return num;
    }
  },
  initParmFn: function (parm, val, newVal) {
    let key = '';
    switch (parm) {
      case 'api':
        key = '修改了api;';
        break;
      case 'secret':
        key = '修改了secret;';
        break;
      case 'open':
        if (newVal) {
          key = '打开了机器人开关;';
        } else {
          key = '关闭了机器人开关;';
        }
        break;
      case 'entry':
        key = '将——自定义头寸——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
        break;
      case 'trendfollow':
        if (newVal) {
          key = '打开了趋势交易;';
        } else {
          key = '关闭了趋势交易;';
        }
        break;
      case 'mm':
        if (newVal) {
          key = '开启了MM;';
        } else {
          key = '关闭了MM;';
        }
        break;
      case 'mmpercent':
        key = '将——MM头寸比例——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
        break;
      case 'maxleverage':
        key = '将——最大持仓杠杆——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
        break;
      case 'time':
        key = '将——K线参数——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
        break;
      case 'maxnanpin':
        key = '将——最大补仓次数——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
        break;
      case 'mmnanpin':
        key = '将——自动补仓比例——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
        break;
      case 'sleep':
        key = '将——刷新时间——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
        break;
      case 'longrange':
        key = '将——多军止盈间距——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
        break;
      case 'longstop':
        key = '将——多军补仓间距——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
        break;
      case 'shortrange':
        key = '将——空军止盈间距——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
        break;
      case 'shortstop':
        key = '将——空军补仓间距——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
        break;
      case 'losscut':
        key = '将——止损比例——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
        break;
      case 'longstopx':
        key = '将——多军点位止损——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
        break;
      case 'shortstopx':
        key = '将——空军点位止损——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
        break;
      case 'longorder':
        let LvalTxt = val == 0 ? '关闭状态' : (val == 1 ? '多军市价建仓交易' : '多军限价建仓交易');
        let LnewValTxt = newVal == 0 ? '关闭状态' : (newVal == 1 ? '多军市价建仓交易' : '多军限价建仓交易');
        key = '将——多军单边——从[' + LvalTxt + ']修改至[' + LnewValTxt + '];';
        break;
      case 'shortorder':
        let svalTxt = val == 0 ? '关闭状态' : (val == 1 ? '空军市价建仓交易' : '空军限价建仓交易');
        let snewValTxt = newVal == 0 ? '关闭状态' : (newVal == 1 ? '空军市价建仓交易' : '空军限价建仓交易');
        key = '将——空军单边——从[' + svalTxt + ']修改至[' + snewValTxt + '];';
        break;
      case 'nanpin_cancel':
        let cancelTxt = val == 0 ? '无效状态' : (val == 0.5 ? '空手道打开状态' : (val == 1 ? '全仓认输状态' : '打开乾坤大挪移'));
        let cancelNewTxt = newVal == 0 ? '无效状态' : (newVal == 0.5 ? '空手道打开状态' : (newVal == 1 ? '全仓认输状态' : '打开乾坤大挪移'));
        key = '将——空手道——从[' + cancelTxt + ']修改至[' + cancelNewTxt + '];';
        break;
      case 'nanpin_order':
        let orderTxt = val == 0 ? '低速补仓状态' : (val == 1 ? '高速补仓状态' : '急速手续费模式');
        let orderNewTxt = newVal == 0 ? '低速补仓状态' : (newVal == 1 ? '高速补仓状态' : '急速手续费模式');
        key = '将——补仓模式——从[' + orderTxt + ']修改至[' + orderNewTxt + '];';
        break;
      case 'doten':
        if (newVal) {
          key = '开启了反手光环;';
        } else {
          key = '关闭了反手光环;';
        }
        break;
    }
    return key;
  },
  preview: {
    init: function(){
      var preview = $("#preview"),
        dialog  = preview.find(".modal-dialog"),
        content = preview.find(".modal-body");

      $(".preview").on("click",function(){
        content.html("");
        dialog.removeClass("modal-lg modal-sm modal-fw");

        if($(this).data("preview-image"))
          content.append(app.features.preview.build.image($(this).data("preview-image")));

        if($(this).data("preview-video"))
          content.append(app.features.preview.build.video($(this).data("preview-video")));

        if($(this).data("preview-href")){
          content.html(app.features.preview.build.href($(this).data("preview-href")));
          app_plugins.loaded();
        }

        if($(this).data("preview-size"))
          dialog.addClass($(this).data("preview-size"));

        if($(this).data("preview-title") && $(this).data("preview-description"))
          content.prepend(app.features.preview.build.text($(this).data("preview-title"),$(this).data("preview-description")));

        preview.modal("show");

        return false;
      });

      preview.on('hidden.bs.modal',function(){
        content.html("");
      });

    },
    build: {
      image: function(src){
        return $("<img>").attr("src",src).addClass("img-responsive");
      },
      video: function(src){
        return $("<div class=\"app-preview-video\"><iframe src=\""+src+"\" width=\"100%\" frameborder=\"0\" allowfullscreen></iframe></div>");
      },
      href: function(path){

        var result = null;

        $.ajax({url: path,type: 'get',dataType: 'html',async: false,
          success: function(data) {
            result = data;
          }
        });

        return result;
      },
      text: function(title,description){
        return $("<div></div>").addClass("app-heading app-heading-small app-heading-condensed").append( $("<div></div>").addClass("title").html("<h5>"+title+"</h5><p>"+description+"</p>") );
      }
    },

  }
}
