<template>
  <div class="block" style="padding: 10px;">
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
          <label class="" style="margin-right: 10px;">
            查看
            <select v-model="groupType" @change="getInitData(type)">
              <option value="0">全部</option>
              <option value="a">A组</option>
              <option value="b">B组</option>
              <option value="c">C组</option>
              <option value="d">D组</option>
              <option value="e">E组</option>
            </select>
          </label>
          <button class="btn btn-info btn-xs" :class="type == 'have' ? 'curr' : ''" @click="switchFn('have')">持仓账户
          </button>
          <button class="btn btn-info btn-xs" :class="type == 'empty' ? 'curr' : ''" @click="switchFn('empty')">
            空仓账户
          </button>
          <button style="float: right;" class="btn btn-info btn-xs" @click="getInitData(type)">手动刷新({{time > 0 ? time :
            0}})
          </button>
        </div>
        <div class="present-history">
          <div class="block-content" style="min-height: 512px;" v-show="type == 'have'">
            <table class="table table-striped datatable-basicMo style-13">
              <thead>
              <tr>
                <th>会员账号</th>
                <th>方向</th>
                <th>头寸/补仓</th>
                <th>已补</th>
                <th>最大</th>
                <th>持仓数量</th>
                <th>最大持仓</th>
                <th>持仓均价</th>
                <th>止盈价</th>
                <th>爆仓位</th>
                <th>止损价</th>
                <th>Bitmex现价</th>
                <th>未实现盈亏</th>
                <th>杠杆</th>
                <th>余额</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in dataList" :key='item.id' style="text-indent: 1%;" v-if="item.group == groupType || groupType == 0">
                <td>
                  <div class="callBox" :style="'background:'+item.nanpin_color"></div>
                  {{item.user_account}}
                </td>
                <td :style="'font-weight: 600;color:'+item.side_color">{{item.side_txt}}</td>
                <td>{{item.new_position_qty}}/{{item.bot_nanpin}}</td>
                <td>{{item.nanpin_count || 0}}</td>
                <td>{{item.maxnanpin || 0}}</td>
                <td>{{item.bot_size || 0}}</td>
                <td>{{item.max_position_qty || 0}}</td>
                <td>{{item.bot_avgEntryPrice || 0}}</td>
                <td class="hoverBox"><!--止盈价-->
                  <span class="span1 up">{{item.sur_res}}</span>
                  <span class="span2">{{item.sur}}</span>
                </td>
                <td class="hoverBox"><!--爆仓位-->
                  <span class="span1 down">{{item.give_res || 0}}</span>
                  <span class="span2">{{item.bot_liquidationPrice > 100000 ? 100000 : item.bot_liquidationPrice}}</span>
                </td>
                <td class="hoverBox"><!--止损价-->
                  <span class="span1 down">{{item.loss_res}}</span>
                  <span class="span2">{{item.loss}}</span>
                </td>
                <td class="input_td">
                  <input type="text" v-model="item.bot_mex_last"/>
                </td>
                <td v-if="item.bot_side == 'LONG'"><!--未实现盈亏 多军-->
                  <span class="span1"
                        :class="(parseFloat(-(item.bot_size / item.bot_mex_last)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))).toFixed(4) > 0 ? 'up' : 'down'">
                    {{isFinite((parseFloat(-(item.bot_size / item.bot_mex_last)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))).toFixed(4)) ? (parseFloat(-(item.bot_size / item.bot_mex_last)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))).toFixed(4) : 0}}
                    ({{isFinite((parseFloat(-(item.bot_size / item.bot_mex_last)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))).toFixed(4)) ? (-((parseFloat(-(item.bot_size / item.bot_mex_last)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))) / (parseFloat(-(item.bot_size / item.bot_avgEntryPrice))) * 100).toFixed(2)) : 0}}%)
                  </span>
                </td>
                <td v-if="item.bot_side != 'LONG'"><!--未实现盈亏  空军-->
                  <span class="span1"
                        :class="(parseFloat(-(item.bot_size / item.bot_mex_last)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))).toFixed(4) > 0 ? 'up' : 'down'">
                    {{isFinite((parseFloat(-(item.bot_size / item.bot_mex_last)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))).toFixed(4)) ? (parseFloat(-(item.bot_size / item.bot_mex_last)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))).toFixed(4) : 0}}
                    ({{isFinite((parseFloat(-(item.bot_size / item.bot_mex_last)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))).toFixed(4)) ? ((parseFloat(-(item.bot_size / item.bot_mex_last)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))) / (parseFloat(-(item.bot_size / item.bot_avgEntryPrice))) * 100).toFixed(2) : 0}}%)
                  </span>
                </td>
                <td>{{item.marginLeverage}}</td>
                <td>{{(parseFloat(item.bot_balance)).toFixed(6)}}</td>
                <td>
                  <button class="btn btn-info btn-xs" @click="seeBotFn(item)">
                    参数
                  </button>
                </td>
              </tr>
              <!--<tr v-show="dataList.length <= 0">-->
              <!--<td colspan="11" style="text-align: center">暂无数据</td>-->
              <!--</tr>-->
              </tbody>
            </table>
          </div>
          <div class="block-content" style="min-height: 512px;" v-show="type == 'empty'">
            <table class="table table-striped datatable-basicMo2 style-13">
              <thead>
              <tr>
                <th>会员账号</th>
                <th>方向</th>
                <th>头寸/补仓</th>
                <th>已补</th>
                <th>最大</th>
                <th>持仓数量</th>
                <th>最大持仓</th>
                <th>持仓均价</th>
                <th>止盈价</th>
                <th>爆仓位</th>
                <th>止损价</th>
                <th>Bitmex现价</th>
                <th>未实现盈亏</th>
                <th>杠杆</th>
                <th>余额</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in dataList2" :key='item.id' style="text-indent: 1%;" v-if="item.group == groupType">
                <td>
                  <div class="callBox" :style="'background:'+item.nanpin_color"></div>
                  {{item.user_account}}
                </td>
                <td :style="'font-weight: 600;color:'+item.side_color">{{item.side_txt}}</td>
                <td>{{item.new_position_qty}}/{{item.bot_nanpin}}</td>
                <td>{{item.nanpin_count || 0}}</td>
                <td>{{item.maxnanpin || 0}}</td>
                <td>{{item.bot_size || 0}}</td>
                <td>{{item.max_position_qty || 0}}</td>
                <td>{{item.bot_avgEntryPrice || 0}}</td>
                <td class="hoverBox"><!--止盈价-->
                  <span class="span1 up">{{item.sur_res}}</span>
                  <span class="span2">{{item.sur}}</span>
                </td>
                <td class="hoverBox"><!--爆仓位-->
                  <span class="span1 down">{{item.give_res || 0}}</span>
                  <span class="span2">{{item.bot_liquidationPrice > 100000 ? 100000 : item.bot_liquidationPrice}}</span>
                </td>
                <td class="hoverBox"><!--止损价-->
                  <span class="span1 down">{{item.loss_res}}</span>
                  <span class="span2">{{item.loss}}</span>
                </td>
                <td class="input_td">
                  <input type="text" v-model="item.bot_mex_last"/>
                </td>
                <td v-if="item.bot_side == 'LONG'"><!--未实现盈亏 多军-->
                  <span class="span1"
                        :class="(parseFloat(-(item.bot_size / item.bot_mex_last)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))).toFixed(4) > 0 ? 'up' : 'down'">
                    {{isFinite((parseFloat(-(item.bot_size / item.bot_mex_last)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))).toFixed(4)) ? (parseFloat(-(item.bot_size / item.bot_mex_last)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))).toFixed(4) : 0}}
                    ({{isFinite((parseFloat(-(item.bot_size / item.bot_mex_last)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))).toFixed(4)) ? (-((parseFloat(-(item.bot_size / item.bot_mex_last)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))) / (parseFloat(-(item.bot_size / item.bot_avgEntryPrice))) * 100).toFixed(2)) : 0}}%)
                  </span>
                </td>
                <td v-if="item.bot_side != 'LONG'"><!--未实现盈亏  空军-->
                  <span class="span1"
                        :class="(parseFloat(-(item.bot_size / item.bot_mex_last)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))).toFixed(4) > 0 ? 'up' : 'down'">
                    {{isFinite((parseFloat(-(item.bot_size / item.bot_mex_last)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))).toFixed(4)) ? (parseFloat(-(item.bot_size / item.bot_mex_last)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))).toFixed(4) : 0}}
                    ({{isFinite((parseFloat(-(item.bot_size / item.bot_mex_last)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))).toFixed(4)) ? ((parseFloat(-(item.bot_size / item.bot_mex_last)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))) / (parseFloat(-(item.bot_size / item.bot_avgEntryPrice))) * 100).toFixed(2) : 0}}%)
                  </span>
                </td>
                <td>{{item.marginLeverage}}</td>
                <td>{{(parseFloat(item.bot_balance)).toFixed(6)}}</td>
                <td>
                  <button class="btn btn-info btn-xs" @click="seeBotFn(item)">
                    参数
                  </button>
                </td>
              </tr>
              <!--<tr v-show="dataList.length <= 0">-->
              <!--<td colspan="11" style="text-align: center">暂无数据</td>-->
              <!--</tr>-->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div v-show="!editData" class="app-tip app-tip-warning">
      <span>请在电脑上进行操作</span>
    </div>
    <br>
    <div class="present-history">
      <div style="width: 100%;text-align: right;padding: 0 5px 10px;">
        <button class="btn btn-info btn-xs" @click="getLogsListFn()">刷新记录</button>
      </div>
      <div class="block-content" style="min-height: 512px;">
        <table class="table table-striped datatable-basicLogs style-13">
          <thead>
          <tr>
            <th>操作员</th>
            <th>操作时间</th>
            <th>操作账户</th>
            <th>操作记录</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in botLogs" :key='item.id' style="text-indent: 1%;" v-if="item.group == groupType">
            <td>
              {{item.operator}}
            </td>
            <td>
              {{new Date(item.create_time).toLocaleString()}}
            </td>
            <td>
              {{item.account}}
            </td>
            <td>
              <div v-html="item.record"></div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <remote-js src="https://pv.sohu.com/cityjson?ie=utf-8"></remote-js>
    <div v-if="showBG" class="timeoutBG">

    </div>
  </div>
</template>

<script>
  import vdialog from "../../components/com-dialog";
  import pageBox from "../../components/com-pagination";
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
        editData: true,
        groupType: 0,
        user: {},
        dataList: [],
        dataList2: [],
        botLogs: [],
        type: 'have',
        ip: '',
        price: 0,
        btcCount: 0,
        time: 0,
        showDialog: false,
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
          open: true
        },
        profitCount: 0,
        restTab: '',
        showBG:false,
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
      this.getInitData(_this.type);
      setTimeout(function () {
        _this.initData();
      }, 10000);
      _this.getLogsListFn();
      setTimeout(function () {
        _this.ip = returnCitySN["cip"];
      }, 3000);

    },
    methods: {
      switchFn (type){
        let _this = this;
        _this.time = 0;
        _this.showBG = true;
        setTimeout(function () {
          _this.getInitData(type);
          _this.showBG = false;
        },1000);

      },
      getInitData: function (type) {
        let _this = this;
        if (_this.time > 0) {
          return;
        } else {
          _this.time = 30;
        }
        _this.type = type;
        _this.timeOutFn();
        if (type == 'empty') {
          _this.$axios.get('getBotState/empty').then(function (result) {
            if (result.status == 0) {
              _this.price = result.price;
              _this.dataList2 = result.data.map(item => {
                item.bot_mex_last = result.price;
                item['side_txt'] = item.status;
                item['side_color'] = '#5A5A5A';
                item['bot_nanpin'] = 0;
                item['loss'] = (0).toFixed(2);//止损  shortstopx
                item['loss_res'] = (0).toFixed(4);//止损结果
                item['sur'] = (0).toFixed(2);//止盈  shortrange
                item['sur_res'] = (0).toFixed(4);//止盈结果
                item['give_res'] = (0).toFixed(4);//爆仓结果
                item['nanpin_color'] = '#3CB371';
                return item;
              });
              setTimeout(function () {
                _this.datatables2();
              }, 500);
            } else {
              _this.myMessage.error(result.msg);
            }
          }).catch(function (err) {
            _this.myMessage.error('网络请求发生异常,请稍后再试...');
          })
        } else {
          _this.$axios.get('getBotState/have').then(function (result) {
            if (result.status == 0) {
              _this.price = result.price;
              _this.dataList = result.data.map(item => {
                item.bot_mex_last = result.price;
                if (item.bot_side == 'LONG' || item.bot_side == 'long') {
                  item['side_txt'] = '多军';
                  item['side_color'] = '#60CA80';
                  item['loss'] = (parseFloat(item.bot_avgEntryPrice) - parseFloat(item.longstopx)).toFixed(2);//止损  longstopx
                  item['loss_res'] = (parseFloat(-(item.bot_size / item.loss)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))).toFixed(4);//止损结果
                  item['sur'] = (parseFloat(item.longrange) + parseFloat(item.bot_avgEntryPrice)).toFixed(2);//止盈  longrange
                  item['sur_res'] = (parseFloat(-(item.bot_size / item.sur)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))).toFixed(4);//止盈结果
                  item['give_res'] = (parseFloat(-(item.bot_size / item.bot_liquidationPrice)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))).toFixed(4);//爆仓结果
                  // item['item']
                } else {
                  item['side_txt'] = '空军';
                  item['side_color'] = '#D6775D';
                  item['loss'] = (parseFloat(item.shortstopx) + parseFloat(item.bot_avgEntryPrice)).toFixed(2);//止损  shortstopx
                  item['loss_res'] = (parseFloat(-(item.bot_size / item.loss)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))).toFixed(4);//止损结果
                  item['sur'] = (parseFloat(item.bot_avgEntryPrice) - parseFloat(item.shortrange)).toFixed(2);//止盈  shortrange
                  item['sur_res'] = (parseFloat(-(item.bot_size / item.sur)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))).toFixed(4);//止盈结果
                  item['give_res'] = (parseFloat(-(item.bot_size / item.bot_liquidationPrice)) - (parseFloat(-(item.bot_size / item.bot_avgEntryPrice)))).toFixed(4);//爆仓结果
                }

                item['nanpin_color'] = '#3CB371';
                if (item.nanpin_count >= 28 && item.nanpin_count < 50) {
                  item['nanpin_color'] = '#FFEC8B';
                }
                if (item.nanpin_count >= 50 && item.nanpin_count < 70) {
                  item['nanpin_color'] = '#FF8C00';
                }
                if (item.nanpin_count >= 70) {
                  item['nanpin_color'] = '#8B0000';
                }
                return item;
              });
              setTimeout(function () {
                _this.datatables();
              }, 500);
            } else {
              _this.myMessage.error(result.msg);
            }
          }).catch(function (err) {
            _this.myMessage.error('网络请求发生异常,请稍后再试...');
          })
        }
      },
      initData() {
        let _this = this;
        _this.$axios.get('getBitMexPrice').then(function (result) {
          _this.price = result.price;
          _this.dataList = _this.dataList.map(item => {
            item.bot_mex_last = _this.price;
            return item;
          });
          if (_this && !_this._isDestroyed) {
            setTimeout(function () {
              _this.initData();
            }, 10000);
          }
        }).catch(function (err) {
        })
      },
      datatables: function () {
        let _this = this;
        $(".datatable-basicMo").DataTable().destroy();
        if ($(".datatable-basicMo").length > 0) {
          $(".datatable-basicMo").DataTable({
            aaSorting: [[13, "desc"]],
            "scrollY": 500,
            retrieve:true,
            ordering : false,
            searching: false,
            paging: false,
            info: false
          });

        }
        if ($(".datatable-extended").length > 0) {
          $(".datatable-extended").DataTable();
        }
      },
      datatables2: function () {
        if ($(".datatable-basicMo2").length > 0) {
          $(".datatable-basicMo2").DataTable({
            "scrollY": 500,
            retrieve: true,
            destroy: true,
            searching: false,
            paging: false,
            info: false
          });

        }

        if ($(".datatable-extended").length > 0) {
          $(".datatable-extended").DataTable();
        }
      },
      datatables1: function () {
        if ($(".datatable-basicLogs").length > 0) {
          $(".datatable-basicLogs").DataTable({
            "scrollY": 500,
            retrieve: true,
            destroy: true,
            searching: false,
            paging: false,
            info: false
          });

        }

        if ($(".datatable-extended").length > 0) {
          $(".datatable-extended").DataTable();
        }
      },
      //查看账户bot设置
      seeBotFn(item) {
        let _this = this;
        _this.showDialog = true;
        _this.editBotUser = item;
        _this.$axios.get('controlGetBot/' + item.user_account).then(function (result) {
          if (!!result) {
            _this.bot = result.data;
            _this.contBot = JSON.parse(JSON.stringify(result.data));
          } else {
            let obj = {account: item.account};
            _this.$axios.post('insertBotInit', obj).then(function (result) {
              if (!!result) {
                _this.getInitData(_this.type);
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
        let _this = this;
        if (json.type === 'close') {
          _this.showDialog = false;
        } else {//有表单等要操作的内容
          let newBot = _this.bot;
          let contBot = _this.contBot;
          let editkey = {
            ip: _this.ip
          };
          let logs = '【监控中心】';
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
              _this.getLogsListFn();
            } else {
              _this.myMessage.error(result.msg);
            }
          })
        }
      },
      // initParmFn(parm, val, newVal) {
      //   let key = '';
      //   switch (parm) {
      //     case 'api':
      //       key = '修改了api;';
      //       break;
      //     case 'secret':
      //       key = '修改了secret;';
      //       break;
      //     case 'open':
      //       if (newVal) {
      //         key = '打开了机器人开关;';
      //       } else {
      //         key = '关闭了机器人开关;';
      //       }
      //       break;
      //     case 'entry':
      //       key = '将——自定义头寸——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
      //       break;
      //     case 'trendfollow':
      //       if (newVal) {
      //         key = '打开了趋势交易;';
      //       } else {
      //         key = '关闭了趋势交易;';
      //       }
      //       break;
      //     case 'mm':
      //       if (newVal) {
      //         key = '开启了MM;';
      //       } else {
      //         key = '关闭了MM;';
      //       }
      //       break;
      //     case 'mmpercent':
      //       key = '将——MM头寸比例——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
      //       break;
      //     case 'maxleverage':
      //       key = '将——最大持仓杠杆——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
      //       break;
      //     case 'time':
      //       key = '将——K线参数——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
      //       break;
      //     case 'maxnanpin':
      //       key = '将——最大补仓次数——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
      //       break;
      //     case 'mmnanpin':
      //       key = '将——自动补仓比例——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
      //       break;
      //     case 'sleep':
      //       key = '将——刷新时间——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
      //       break;
      //     case 'longrange':
      //       key = '将——多军止盈间距——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
      //       break;
      //     case 'longstop':
      //       key = '将——多军补仓间距——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
      //       break;
      //     case 'shortrange':
      //       key = '将——空军止盈间距——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
      //       break;
      //     case 'shortstop':
      //       key = '将——空军补仓间距——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
      //       break;
      //     case 'losscut':
      //       key = '将——止损比例——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
      //       break;
      //     case 'longstopx':
      //       key = '将——多军点位止损——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
      //       break;
      //     case 'shortstopx':
      //       key = '将——空军点位止损——从<span style="color:#D6775D;">[' + val + ']</span>修改至<span style="color:#3CB371;">[' + newVal + ']</span>;';
      //       break;
      //     case 'longorder':
      //       let LvalTxt = val == 0 ? '关闭状态' : (val == 1 ? '多军市价建仓交易' : '多军限价建仓交易');
      //       let LnewValTxt = newVal == 0 ? '关闭状态' : (newVal == 1 ? '多军市价建仓交易' : '多军限价建仓交易');
      //       key = '将——多军单边——从[' + LvalTxt + ']修改至[' + LnewValTxt + '];';
      //       break;
      //     case 'shortorder':
      //       let svalTxt = val == 0 ? '关闭状态' : (val == 1 ? '空军市价建仓交易' : '空军限价建仓交易');
      //       let snewValTxt = newVal == 0 ? '关闭状态' : (newVal == 1 ? '空军市价建仓交易' : '空军限价建仓交易');
      //       key = '将——空军单边——从[' + svalTxt + ']修改至[' + snewValTxt + '];';
      //       break;
      //     case 'nanpin_cancel':
      //       let cancelTxt = val == 0 ? '无效状态' : (val == 0.5 ? '空手道打开状态' : (val == 1 ? '全仓认输状态' : '打开乾坤大挪移'));
      //       let cancelNewTxt = newVal == 0 ? '无效状态' : (newVal == 0.5 ? '空手道打开状态' : (newVal == 1 ? '全仓认输状态' : '打开乾坤大挪移'));
      //       key = '将——空手道——从[' + cancelTxt + ']修改至[' + cancelNewTxt + '];';
      //       break;
      //     case 'nanpin_order':
      //       let orderTxt = val == 0 ? '低速补仓状态' : (val == 1 ? '高速补仓状态' : '急速手续费模式');
      //       let orderNewTxt = newVal == 0 ? '低速补仓状态' : (newVal == 1 ? '高速补仓状态' : '急速手续费模式');
      //       key = '将——补仓模式——从[' + orderTxt + ']修改至[' + orderNewTxt + '];';
      //       break;
      //     case 'doten':
      //       if (newVal) {
      //         key = '开启了反手光环;';
      //       } else {
      //         key = '关闭了反手光环;';
      //       }
      //       break;
      //   }
      //   return key;
      // },
      timeOutFn() {
        let _this = this;
        if (_this.time > 0) {
          _this.time = _this.time - 1;
          if (_this && !_this._isDestroyed) {
            setTimeout(function () {
              _this.timeOutFn()
            }, 1000);
          }

        }
      },
      getLogsListFn() {
        let _this = this;
        _this.$axios.get('getBotLogs/1/500').then(function (result) {
          if (!!result && result.status == 0) {
            _this.botLogs = result.data;
            if (_this && !_this._isDestroyed) {
              setTimeout(function () {
                _this.datatables1();
              }, 500);
            }
          } else {
            _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      }
    }
  }
</script>
<style>
  .dataTables_scrollHead {
    height: 42px !important;
  }
</style>
<style scoped>
  .tab-contentAdmin .table tr td, .tab-contentAdmin .table tr th {
    padding: 10px 5px;
  }
  .timeoutBG{
    background: rgba(0,0,0,.4);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999999;
  }

  .btn.btn-info.curr {
    background-color: #414141 !important;
  }

  .callBox {
    width: 20px;
    height: 20px;
    overflow: hidden;
    border-radius: 50%;
    display: inline-block;
    vertical-align: bottom;
  }

  .input_td input {
    width: 80px;
    text-align: center;
  }

  .hoverBox:hover .span1 {
    display: block;
  }

  .hoverBox .span1 {
    display: none;
  }

  .hoverBox:hover .span2 {
    display: none;
  }

  .hoverBox {
    cursor: pointer;
  }

  .span1.up {
    color: #4aa165;
    font-weight: bold;
  }

  .span1.down {
    color: #ae543b;
    font-weight: bold;
  }

  .hoverBox span {
    display: block;
    text-align: center;
    width: 100%;
    min-width: 62px;
  }

  .form-horizontal.w-col.w-col-4, .form-horizontal.w-col.w-col-3 {
    overflow: hidden;
    min-height: 410px;
    font-size: 12px;
  }

  .form-horizontal .form-group {
    margin: 0 0 5px 0;
    overflow: hidden;
    padding: 0;
  }

  .w-col.w-col-4.control-label {
    line-height: 36px;
    text-align: right;
    font-size: 12px;
    padding-right: 10px;
  }

  .form-group .w-col-8 {
    line-height: 38px;
  }

  .form-group {
    height: 40px;
    padding: 0 5px;
    margin-bottom: 26px;
    position: relative;
  }

  .form-group input, .form-group select {
    border: rgba(0, 0, 0, 0.2) 1px solid !important;
    border-radius: 4px;
    transition: all 300ms;
    line-height: 30px;
    text-indent: 6px;
  }

  .form-group input:focus, .form-group select:focus {
    border: rgba(51, 171, 184, 0.8) 1px solid !important;
    box-shadow: 2px 2px 10px rgba(51, 171, 184, 0.5);
    border-radius: 4px;
  }
</style>
