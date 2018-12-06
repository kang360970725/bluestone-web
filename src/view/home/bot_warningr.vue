<template>
  <div class="block" style="padding: 10px;overflow: hidden;min-height: 660px;">
    <div v-show="editData">
      <vdialog :isShow="showDialog" :options="dialogOptions" v-on:modalResponse="setBotDataFn">
        <div class="block-content" style="height: 440px;">
          <div class="block">
            <br>
            <form class="form-horizontal w-col w-col-3">
              <div class="form-group">
                <label class="w-col w-col-4 control-label">机器人开关</label>
                <div class="w-col w-col-8">
                  <div class="w-col-12">
                    <label class="switch switch-cube">
                      <input type="checkbox" name="switch_5" v-model="bot.open" :value="bot.open">
                      <span></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="w-col w-col-4 control-label">API ID</label>
                <div class="w-col w-col-8">
                  <input style="font-size: 12px;" type="text" class="form-control" v-model="bot.api">
                </div>
              </div>
              <div class="form-group">
                <label class="w-col w-col-4 control-label">Secret</label>
                <div class="w-col w-col-8">
                  <input style="font-size: 12px;" type="text" class="form-control" v-model="bot.secret">
                </div>
              </div>
              <div class="form-group">
                <label class="w-col w-col-4 control-label">趋势交易</label>
                <div class="w-col w-col-8">
                  <div class="w-col-12">
                    <label class="switch switch-cube">
                      <input type="checkbox" name="switch_5" v-model="bot.trendfollow">
                      <span>{{bot.trendfollow ? '做顺势交易':'做逆势交易'}}</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="w-col w-col-4 control-label">MM</label>
                <div class="w-col w-col-8">
                  <div class="w-col-12">
                    <label class="switch switch-cube">
                      <input type="checkbox" name="switch_5" v-model="bot.mm">
                      <span></span>
                    </label>
                  </div>
                </div>
              </div>
              <!--MM启动失效参数 Str-->
              <!--<div v-show="bot.mm == 0">-->
              <div class="form-group">
                <label class="w-col w-col-4 control-label">自定义头寸</label>
                <div class="w-col w-col-8">
                  <input type="text" class="form-control" v-model="bot.entry">
                </div>
              </div>
              <div class="form-group">
                <label class="w-col w-col-4 control-label">自定义补仓</label>
                <div class="w-col w-col-8">
                  <input type="text" class="form-control" v-model="bot.nanpin">
                </div>
              </div>
              <div class="form-group">
                <label class="w-col w-col-4 control-label">最大持仓杠杆</label>
                <div class="w-col w-col-8">
                  <input type="text" class="form-control" v-model="bot.maxleverage">
                </div>
              </div>
              <div class="form-group">
                <label class="w-col w-col-4 control-label">K线</label>
                <div class="w-col w-col-8">
                  <input type="text" class="form-control" v-model="bot.time">
                </div>
              </div>
            </form>
            <div class="form-horizontal w-col w-col-1"></div>
            <form class="form-horizontal w-col w-col-4">
              <div class="form-group">
                <label class="w-col w-col-4 control-label">MM头寸比例</label>
                <div class="w-col w-col-8">
                  <input type="text" class="form-control" v-model="bot.mmpercent">
                </div>
              </div>
              <div class="form-group">
                <label class="w-col w-col-4 control-label">自动补仓比例</label>
                <div class="w-col w-col-8">
                  <input type="text" class="form-control" v-model="bot.mmnanpin">
                </div>
              </div>
              <div class="form-group">
                <label class="w-col w-col-4 control-label">最大补仓次数</label>
                <div class="w-col w-col-8">
                  <input type="text" class="form-control" v-model="bot.maxnanpin">
                </div>
              </div>
              <!--<div class="form-group">-->
              <!--<label class="w-col w-col-4 control-label">杠杆</label>-->
              <!--<div class="w-col w-col-8">-->
              <!--<input type="text" class="form-control" v-model="bot.leverage">-->
              <!--<span>bitmex杠杆指定。０表示全仓</span>-->
              <!--</div>-->
              <!--</div>-->
              <div class="form-group">
                <label class="w-col w-col-4 control-label">刷新时间</label>
                <div class="w-col w-col-8">
                  <input type="text" class="form-control" v-model="bot.sleep">
                </div>
              </div>
              <div class="form-group">
                <label class="w-col w-col-4 control-label">多军止盈间距</label>
                <div class="w-col w-col-8">
                  <input type="text" class="form-control" v-model="bot.longrange">
                </div>
              </div>
              <div class="form-group">
                <label class="w-col w-col-4 control-label">多军补仓间距</label>
                <div class="w-col w-col-8">
                  <input type="text" class="form-control" v-model="bot.longstop">
                </div>
              </div>
              <div class="form-group">
                <label class="w-col w-col-4 control-label">空军止盈间距</label>
                <div class="w-col w-col-8">
                  <input type="text" class="form-control" v-model="bot.shortrange">
                </div>
              </div>
              <div class="form-group">
                <label class="w-col w-col-4 control-label">空军补仓间距</label>
                <div class="w-col w-col-8">
                  <input type="text" class="form-control" v-model="bot.shortstop">
                </div>
              </div>
            </form>
            <div class="form-horizontal w-col w-col-1"></div>
            <form class="form-horizontal w-col w-col-3">
              <div class="form-group">
                <label class="w-col w-col-4 control-label">止损比例</label>
                <div class="w-col w-col-8">
                  <input type="text" class="form-control" v-model="bot.losscut">
                </div>
              </div>
              <div class="form-group">
                <label class="w-col w-col-4 control-label">多军点位止损</label>
                <div class="w-col w-col-8">
                  <input type="text" class="form-control" v-model="bot.longstopx">
                </div>
              </div>
              <div class="form-group">
                <label class="w-col w-col-4 control-label">空军点位止损</label>
                <div class="w-col w-col-8">
                  <input type="text" class="form-control" v-model="bot.shortstopx">
                </div>
              </div>
              <div class="form-group">
                <label class="w-col w-col-4 control-label">多军单边</label>
                <!--<div class="w-col w-col-8">-->
                <!--<input type="text" class="form-control" v-model="bot.longorder">-->
                <!--</div>-->
                <div class="w-col w-col-8">
                  <div class="w-col-12">
                    <select class="form-control" v-model="bot.longorder">
                      <option value="0">关闭</option>
                      <option value="1">多军市价建仓交易</option>
                      <option value="2">多军限价建仓交易</option>
                    </select>
                    <span></span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="w-col w-col-4 control-label">空军单边</label>
                <!--<div class="w-col w-col-8">-->
                <!--<input type="text" class="form-control" v-model="bot.shortorder">-->
                <!--<span>只做空军的单边交易</span>-->
                <!--</div>-->
                <div class="w-col w-col-8">
                  <div class="w-col-12">
                    <select class="form-control" v-model="bot.shortorder">
                      <option value="0">关闭</option>
                      <option value="1">空军市价建仓交易</option>
                      <option value="2">空军限价建仓交易</option>
                    </select>
                    <span></span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="w-col w-col-4 control-label"> 空手道</label>
                <div class="w-col w-col-8">
                  <div class="w-col-12">
                    <select class="form-control" v-model="bot.nanpin_cancel">
                      <option value="0">无效</option>
                      <option value="0.5">空手道</option>
                      <option value="1">全仓认输</option>
                      <option value="2">乾坤大挪移</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="w-col w-col-4 control-label">补仓模式</label>
                <div class="w-col w-col-8">
                  <div class="w-col-12">
                    <select class="form-control" v-model="bot.nanpin_order">
                      <option value="0">低速补</option>
                      <option value="1">高速补</option>
                      <option value="2">急速手续费</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="w-col w-col-4 control-label">反手光环</label>
                <div class="w-col w-col-8">
                  <div class="w-col-12">
                    <label class="switch switch-cube">
                      <input type="checkbox" name="switch_5" v-model="bot.doten">
                      <span></span>
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </vdialog>
      <div class="tab-data" style="min-height: 512px;">
        <div style="width: 100%;text-align: left;padding: 0 5px 10px;">
          <button class="btn btn-info btn-xs" :class="type == 'time' ? 'curr' : ''" @click="getInitData('time')">失联预警</button>
          <button class="btn btn-info btn-xs" :class="type == 'start' ? 'curr' : ''" @click="getInitData('start')">启动异常</button>
          <button v-if="type != 'start'" class="btn btn-info btn-xs pull-right" style="margin-bottom: 5px" @click="exportCardFn">导出</button>
        </div>
        <div class="present-history">
          <div class="block-content" style="min-height: 512px;">
            <table class="table table-striped table-bordered">
              <thead>
              <tr>
                <th><label><input v-model="checkAll" type="checkbox" @click="checkAllFn"/>全选</label></th>
                <th>会员账号</th>
                <th v-if="type != 'start'">bot ID</th>
                <th v-if="type != 'start'">机器人令牌</th>
                <th>最后响应时间</th>
                <th>状态</th>
                <th v-if="type == 'start'">操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in dataList" :key='item.id'>
                <td><input v-model="item.check" type="checkbox"/></td>
                <td>{{item.user_account}}</td>
                <td v-if="type != 'start'">bs{{item.uuid}}</td>
                <td v-if="type != 'start'"><span>{{item.token}}</span></td>
                <td>{{new Date(item.created).toLocaleString()}}</td>
                <td>{{item.status}}</td>
                <td v-if="type == 'start'">
                  <button class="btn btn-info btn-xs" @click="seeBotFn(item)">
                    参数
                  </button>
                </td>
              </tr>
              <tr>
                <td style="text-align: center;" colspan="6" v-if="dataList.length <= 0">没有更多数据...</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div v-show="!editData" class="app-tip app-tip-warning">
      <span>请在电脑上进行操作</span>
    </div>
    <remote-js src="https://pv.sohu.com/cityjson?ie=utf-8"></remote-js>
  </div>
</template>

<script>
  import vdialog from "../../components/com-dialog";
  import pageBox from "../../components/com-pagination";
  import File from '../../../commonFunction/FileSaver'
  // import '../../../static/boooya/js/app_plugins.js';
  export default {
    name: 'information',
    components: {
      vdialog,
      pageBox,
      'remote-js': {
        render(createElement) {
          return createElement('script', {attrs: {type: 'text/javascript', src: this.src}});
        },
        props: {
          src: {type: String, required: true},
        },
      }
    },
    data: function () {
      return {
        editData:true,
        user: {},
        dataList: [],
        checkAll: false,
        btcCount:0,
        type:'time',
        ip: '',
        showDialog:false,
        dialogOptions: {//弹窗配置项
          width: '1120',//弹窗宽度
          title: '编辑会员资料',
          hasBtn: true, //是否需要确定按钮，默认没有确认按钮
          closeBtn: true //是否需要关闭按钮，默认没有关闭按钮
        },
        bot: {
          open: false
        },
        contBot: {
          open: false
        },
        profitCount:0
      }
    },
    mounted() {
      let _this = this;
      if ($(window).width() < 900) {
        this.editData = false
      }
      this.user = JSON.parse(localStorage.getItem('user')) || '';
      if (this.user.level < 5) {
        this.$router.go(0);
        this.$router.push('/index')
      }
      setTimeout(function () {
        _this.ip = returnCitySN["cip"];
      }, 3000);
      this.getInitData('time');
    },
    methods: {
      getInitData: function (type) {
        let _this = this;
        _this.type = type;
        _this.$axios.get('getBotWarning/'+_this.type).then(function (result) {
          if (result.status == 0) {
            // _this.dataList = result.data;
            _this.dataList = result.data.map(item => {
              item['check'] = false;
              return item;
            })
          // } else {
          //   _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },
      //查看账户bot设置
      seeBotFn(item){
        let _this = this;
        _this.showDialog = true;
        _this.editBotUser = item;
        _this.$axios.get('controlGetBot/'+ item.user_account).then(function (result) {
          if (!!result) {
            _this.bot = result.data;
            _this.contBot = JSON.parse(JSON.stringify(result.data));
          } else {
            let obj = {account:item.account}
            _this.$axios.post('insertBotInit',obj).then(function (result) {
              if (!!result) {
                _this.getInitData();
              } else {
                _this.myMessage.error(result.msg);
                // _this.showView = true
              }
            }).catch(function (err) {
              _this.myMessage.error('网络请求发生异常,请稍后再试...');
            })
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },
      setBotDataFn: function (json) {
        let _this = this
        if (json.type === 'close') {
          _this.showDialog = false;
        } else {//有表单等要操作的内容
          let newBot = _this.bot;
          let contBot = _this.contBot;
          let editkey = {
            ip: _this.ip
          };
          let logs = '【异常预警】';
          for (let i in newBot) {
            if (contBot[i] != newBot[i]) {
              logs = logs + _this.common.initParmFn(i, contBot[i], newBot[i]);
              logs = logs + '<br>'
            }
          }
          editkey['operator'] = _this.user.account;
          editkey['account'] = _this.bot.user_account;
          editkey['record'] = logs;
          if (!_this.ip) {
            _this.myMessage.error('账户权限信息验证失败，请退出重新登录。');
            return;
          }
          if (!logs) {
            _this.showDialog = false;
            return;
          }
          _this.$axios.put('setBot', {'bot': _this.bot, 'logs': editkey}).then(function (result) {
            if (result.status == 0) {
              _this.myMessage.success('修改成功');
              _this.showDialog = false;
            } else {
              _this.myMessage.error(result.msg);
            }
          })
        }
      },
      exportCardFn() {//导出帐号
        let _this = this,
          cardTxt = '';
        _this.dataList.forEach(function (item) {
          if (item.check) {
            let time = new Date(item.created).toLocaleString();
            cardTxt += '帐号:' + item.user_account;
            for (let i = 0; i < 30 - item.user_account.length; i++) {
              cardTxt += ' ';
            }
            cardTxt += 'id:bs' + item.uuid;
            for (let i = 0; i < 30 - item.uuid.length; i++) {
              cardTxt += ' ';
            }
            cardTxt += '会员令牌:' + item.token + "          ";
            cardTxt += '最后请求:' + time + "\r\n";
          }
        })
        if (!cardTxt) {
          _this.myMessage.info('请先选中要导出的数据!');
          return;
        }
        var blob = new Blob([cardTxt], {type: "text/plain;charset=utf-8"});
        File.saveAs(blob, "导出会员.txt");
      },
      checkAllFn(){//全选反选
        let _this = this;
        _this.dataList.forEach(function (item) {
          item.check = !_this.checkAll
        })
      },
    }
  }
</script>

<style scoped>
  .form-horizontal .form-group {
    margin: 0 0 15px 0;
    overflow: hidden;
  }
  .btn.btn-info.curr{
    background-color: #414141 !important;
  }
  .form-group .col-md-10 .error {
    color: red;
    /*position: absolute;*/
  }
  .row{
    padding: 0 !important;
  }
  hr {
    height: 1px;
    background: #cfcfcf;
  }

  .user-info > p {
    text-align: right;
  }

  .user-info > p > a {
    cursor: pointer;
  }

  .table-head-custom {
    margin-bottom: 10px;
    /* margin-bottom: 0 !important;*/
  }

  .user-info {
    padding: 5px 40px 60px;
    line-height: 30px;
    border: 1px solid #DBE0E4;
  }

  .user-info label p {
    float: none;
  }

  .user-info label p span:nth-child(1) {
    width: 70px;
    display: inline-block;
  }

  .user-info label {
    display: block;
    font-weight: 400;
    color: #62676d;
  }

  .block-content .row {
    padding: 0;
  }

  .block-content .row .col-sm-12 {
    padding-left: 0;
    padding-right: 0;
  }

  .row .col-sm-12 .table {
    margin-top: 0;
  }

  .app .containers-tab {
    width: 100%;
    float: none;
    zoom: 1;
    margin: 0px auto;
    padding: 0 10px;
  }

  .app .app-nav-tab {
    background: #c5d4de;
    float: left;
    width: 100%;
    position: relative;
  }

  .app .app-nav-tab ul {
    float: left;
    width: 100%;
    margin: 0px 0px 0px 0px;
    list-style: none;
    padding: 10px 0px 0px 0;
    /*position: relative;*/
  }

  .app .app-nav-tab ul > li {
    width: auto;
  }

  .app .app-nav-tab ul > li.openables.active > a {
    background: #FFF;
    color: #1B2431;
  }

  .app .app-nav-tab ul > li.openables > a {
     -webkit-border-top-right-radius: 3px;
     -webkit-border-bottom-right-radius: 0px;
     -webkit-border-bottom-left-radius: 0px;
     -webkit-border-top-left-radius: 3px;
     -moz-border-radius-topright: 3px;
     -moz-border-radius-bottomright: 0px;
     -moz-border-radius-bottomleft: 0px;
     -moz-border-radius-topleft: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 3px;
  }

  .app .app-nav-tab ul > li > a {
    float: left;
    padding: 10px 16px 12px 12px;
    line-height: 20px;
    color: #777;
    text-decoration: none;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 5px;
     -webkit-transition: color 100ms linear;
    transition: color 100ms linear;
    cursor: pointer;
  }

  .app .app-nav-tab ul > li > a:hover {
    color: #FFF;
  }

  .app .app-nav-tab ul > li > a span[class^="icon-"],
  .app .app-nav-tab ul > li > a .fa {
    float: left;
    margin-right: 4px;
    line-height: 20px;
    min-width: 20px;
    text-align: center;
    font-size: 16px;
  }

  .table {
    border-bottom: 1px solid #DBE0E4;
  }

  .col-md-3 {
    padding-right: 0 !important;
  }

  .table-head-custom-ul {
    display: block;
    width: 100%;
    min-height: 500px;
    border: 1px solid #cfcfcf;
    padding: 0;
  }

  .table-head-custom-ul ul {
    display: block;
    width: 100%;
    float: right;
    background: #F5FFFA;
    /*border: 1px dotted #cfcfcf;*/
    border-bottom: none;
    padding: 0;
  }

  .table-head-custom-ul ul li {
    display: inline-block;
    line-height: 35px;
    font-size: 12px;
    border-top: 1px dotted #cfcfcf;
  }

  .table-head-custom-ul > li {
    display: inline-block;
    line-height: 50px;
    font-size: 13px;
    border-bottom: 1px solid #cfcfcf;
  }

  .table-head-custom-ul li .headSpan {
    float: left;
    width: 24.5%;
    text-align: center;
    font-weight: 600;
    background: #F2F2F2;
  }

  .table-head-custom-ul li .sevList {
    float: left;
    width: 24.5%;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    /*overflow: hidden;*/
  }

  .table-head-custom-ul li .versionList {
    float: left;
    width: 20%;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .table-head-custom-ul li .versionListHead {
    float: left;
    width: 20%;
    text-align: center;
    font-weight: 600;
    background: #F8F8FF;
    overflow: hidden;
  }

  .table-head-custom-ul > li .unfoldBox {
    float: left;
    width: 2%;
    cursor: pointer;
  }

  .form-horizontal.w-col.w-col-4,.form-horizontal.w-col.w-col-3{
    overflow: hidden;
    min-height: 410px;
    font-size: 12px;
  }
  .form-horizontal .form-group {
    margin: 0 0 5px 0;
    overflow: hidden;
    padding: 0;
  }
  .w-col.w-col-4.control-label{
    line-height: 36px;
    text-align: right;
    font-size: 12px;
    padding-right: 10px;
  }

  .form-group .w-col-8 {
    line-height: 38px;
  }
  .form-group{
    height: 40px;
    padding: 0 5px;
    margin-bottom: 26px;
    position: relative;
  }
  .form-group input,  .form-group select{
    border: rgba(0,0,0,0.2) 1px solid !important;
    border-radius: 4px;
    transition: all 300ms;
    line-height: 30px;
    text-indent: 6px;
  }
  .form-group input:focus,  .form-group select:focus{
    border: rgba(51, 171, 184, 0.8) 1px solid !important;
    box-shadow: 2px 2px 10px rgba(51, 171, 184, 0.5);
    border-radius: 4px;
  }
</style>
