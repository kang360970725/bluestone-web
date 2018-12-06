<template>

  <div class="block" style="padding: 10px;">
    <vdialog :isShow="showDialog2" :options="dialogOptions2" v-on:modalResponse="modalResponse2">
      <div style="">
        <form class="form-horizontal">
          <div class="form-group">
            <label class="col-md-2 control-label">钱包地址:</label>
            <div class="col-md-10">
              <span style="line-height: 40px;">{{user.walletaddress || '-未设置-'}}</span>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-2 control-label">申请数量:</label>
            <div class="col-md-10">
              <input type="text" v-model="putNum" id="num" class="form-control"
                     onkeyup="value=value.replace(/[^\d.]/g,'')">
              <span class="error"></span>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-2 control-label"></label>
            <div class="col-md-10">
              <span>提现将扣除5%手续费,实际到账约为 {{(putNum - (putNum * 0.05).toFixed(4)).toFixed(4)}} Btc</span>
            </div>
          </div>
        </form>
      </div>
    </vdialog>
    <vdialog :isShow="showDialog3" :options="dialogOptions3" v-on:modalResponse="modalResponse3">
      <div style="">
        <div class="col-md-10 text-center">
          <p style="font-size: 15px;font-weight: 600;">平台分红费用: <span
            style="color:#dc3545;">{{bonusBaseMonth}} Btc</span>
          </p>
        </div>
        <div class="form-group">
          <div class="text-center">
            <img src="/static/home/images/QR_Code/QRCode.png"/>
            <p><span style="color: rgb(15, 157, 234);">3BMEXwNSL4hZA2od3YzvD3MSFHzZohmgMR</span></p>
          </div>
        </div>
      </div>
    </vdialog>
    <vdialog :isShow="showDialog4" :options="dialogOptions4" v-on:modalResponse="modalResponse4">
      <div style="">
        <div class="col-md-10 text-center">
          <p style="font-size: 15px;font-weight: 600;"><span style="color:#dc3545;">凭证仅可上传一次，请谨慎操作!</span>
          </p>
        </div>
        <div class="form-group">
          <form id="infoLogoForm">
            <div class="form-group">
              <div class="col-md-10">
                <a class="file-input btn btn-primary" style="margin: 30px 0 40px 50px">
                  <input type="file" id="picUrl" @change='add_img' name="picUrl" class="file btn-primary"
                         accept="image/gif,image/jpeg,image/jpg,image/png">
                  <span class="icon-enter-up"></span> 上传转账截图</a>
                <span class="file-input-name"></span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </vdialog>
    <div class="clearfix">
      <div class="app-heading app-heading-bordered margin-top-0 margin-bottom-15">
        <div class="title">
          <h1>当前等级:{{user.level == 0 ? "用户" : (user.level == 1 ? "主管" : (user.level == 2 ? "经理" : "总监"))}}</h1>
          <p><span style="font-weight: 600;">我的邀请码：</span>&nbsp;{{user.Invitcode}} &nbsp;&nbsp;&nbsp;<a @click="copyCodeFn(user.Invitcode,0)">复制</a></p>
          <p class="margin-top-10"><span style="font-weight: 600;">我的邀请链接： &nbsp;</span>{{InLink}}{{user.Invitcode}}
            &nbsp;&nbsp;&nbsp;<a @click="copyCodeFn(user.Invitcode,1)">复制</a>
            &nbsp;&nbsp;&nbsp;<button class="btn btn-info btn-xs" style="height: 20px;line-height: 15px;font-weight: 400;" @click="copyQrCodeFn()">二维码邀请</button>
          </p>
          <p class="margin-top-10"><span style="font-weight: 600;">应支付平台分红金额： &nbsp;</span>{{bonusBaseMonth}} Btc&nbsp;&nbsp;&nbsp;
            <button class="btn btn-info btn-xs" style="height: 20px;line-height: 15px;font-weight: 400;" @click="showPrompPut3()">支付平台分红</button>
          </p>
          <p class="margin-top-10"><span style="font-weight: 600;">分红及佣金余额: &nbsp;&nbsp;&nbsp;&nbsp;</span>{{countProfit}} Btc
            &nbsp;&nbsp;<button class="btn btn-info btn-xs" style="height: 20px;line-height: 15px;font-weight: 400;" @click="showPrompPut()">申请提现</button>
          </p>
        </div>
      </div>
    </div>
    <div class="tab-data" style="min-height: 300px;">
      <div class="partition-info padding-20 col-md-5">
        <div class="myChart" id="myChart" style="width: 100%;height: 100%;min-height: 500px;"></div>
      </div>
      <div class="purchase-history col-md-7">
        <div class="block-content">
          <table class="table table-striped table-bordered">
            <thead>
            <tr>
              <th>邀请注册总计</th>
              <th>绑定API会员总计</th>
              <th>付费会员总计</th>
              <th>付费比例</th>
              <th>分红贡献总计</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{{countData.count}}</td>
              <td>{{countData.apiCount}}</td>
              <td>{{countData.payCount}}</td>
              <td>{{parseInt(countData.countPer * 100) || '0'}}%</td>
              <td>{{ABonusCount}} BTC</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="block-content col-md-6">
          <p>邀请分红明细</p>
          <table class="table table-striped table-bordered">
            <thead>
            <tr>
              <th>时间</th>
              <th>金额</th>
              <th>邀请帐号</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in InviteData" :key="item.id">
              <td>{{item.timeTxt.split(' ')[0]}}</td>
              <td>{{item.bot_change_num}} BTC</td>
              <td>{{((item.bot_warn_txt).replace('来自下级','')).replace('账户购买分红','')}}</td>
            </tr>
            <tr>
              <td class="text-center" colspan="3" v-if="InviteData.length <= 0">没有更多数据...</td>
            </tr>
            </tbody>
          </table>
          <pageBox class="pull-right" :pagination="pageInvite" v-on:setPageData="pageInviteFn($event)"></pageBox>
        </div>
        <div class="block-content col-md-6">
          <p>利润分红明细</p>
          <table class="table table-striped table-bordered">
            <thead>
            <tr>
              <th>时间</th>
              <th>金额</th>
              <th>下级帐号</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in ProfitData" :key="item.id">
              <td>{{item.timeTxt.split(' ')[0]}}</td>
              <td>{{item.bot_change_num}} BTC</td>
              <td>{{((item.bot_warn_txt).replace('来自','')).replace('账户的盈利分红','')}}</td>
            </tr>
            <tr>
              <td class="text-center" colspan="3" v-if="ProfitData.length <= 0">没有更多数据...</td>
            </tr>
            </tbody>
          </table>
          <pageBox class="pull-right" :pagination="pageProfit" v-on:setPageData="pageProfitFn($event)"></pageBox>
        </div>
        <div class="block-content">
          <p>平台分红转账记录</p>
          <table class="table table-striped table-bordered">
            <thead>
            <tr>
              <th>发起时间</th>
              <th>转账金额</th>
              <th>状态</th>
              <th>操作（原因）</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in  bonusList" :key="item.id">
              <td>{{item.timeTxt}}</td>
              <td>{{item.price}}</td>
              <td>{{item.typeTxt}}</td>
              <td>
                <div v-if="item.type == 0">
                  <button class="btn btn-info btn-xs" @click="showPrompPut4(item)">上传凭证</button>
                </div>
                <div v-if="item.type == 3">
                  {{item.desc}}
                </div>
              </td>
            </tr>
            <tr v-if="bonusList.length <= 0">
              <td colspan="4" style="text-align: center">没有转账记录</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="modal fade" id="preview" tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" class="icon-cross"></span></button>
        <div class="modal-content">
          <div class="modal-body padding-5 text-center">
            <!--<h3 class="margin-top-20">邀请好友扫描二维码加入你的团队</h3>-->
            <!--<div id="QRCode"></div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vdialog from "../../components/com-dialog";
  // import '../../../static/boooya/js/app_plugins.js';
  import pageBox from "../../components/com-pagination";
  import QRCode from 'qrcodejs2'

  export default {
    name: 'information',
    components: {
      pageBox,
      vdialog
    },
    data: function () {
      return {
        countProfit: 0,
        putNum: 0,
        tabType: 1,
        user: {},
        InLink: '',
        directData: {},
        bonusBaseMonth: 0,
        base: 0,
        graph: {
          nodes: [],
          links: []
        },
        myChart: {},
        ABonusCount: 0,
        countData: {},
        renewItem: {},
        pageProfit: {//分页参数
          pageIndex: 1,
          pageSize: 10,
          startCount: 0,
          totalCount: 0,
          pageCount: 0
        },
        pageInvite: {//分页参数
          pageIndex: 1,
          pageSize: 10,
          startCount: 0,
          totalCount: 0,
          pageCount: 0,
        },
        dialogOptions2: {//弹窗配置项
          width: '450',//弹窗宽度
          title: '申请提现',
          hasBtn: true, //是否需要确定按钮，默认没有确认按钮
          closeBtn: true //是否需要关闭按钮，默认没有关闭按钮
        },
        dialogOptions3: {//弹窗配置项
          width: '450',//弹窗宽度
          title: '30%分红支付',
          hasBtn: true, //是否需要确定按钮，默认没有确认按钮
          hasBtnTxt: '完成转账',
          closeBtn: true //是否需要关闭按钮，默认没有关闭按钮
        },
        dialogOptions4: {//弹窗配置项
          width: '450',//弹窗宽度
          title: '上传分红支付凭证',
          hasBtn: true, //是否需要确定按钮，默认没有确认按钮
          hasBtnTxt: '提交',
          closeBtn: true //是否需要关闭按钮，默认没有关闭按钮
        },
        ProfitData: [],
        InviteData: [],
        bonusList: [],
        showDialog2: false,
        showDialog3: false,
        showDialog4: false
      }
    },
    mounted() {
      this.user = JSON.parse(localStorage.getItem('user')) || '';
      this.bonusBaseMonth = (this.user.bot_lirun > 0 ? (this.user.bot_lirun - this.user.bonus_base) : 0) * 0.3;
      this.putNum = this.bonusBaseMonth;
      this.base = this.user.bot_lirun;
      this.InLink = window.location.origin + '/register?code=';
      /*ECharts图表*/
      var echarts = require('echarts');
      this.myChart = echarts.init(document.getElementById('myChart'));
      this.directData = this.user
      this.getInitData(this.user.Invitcode);
      this.getInitDataCount();
      this.initRecordInvite();
      this.initRecordProfit();
      this.initBonusList();

      $("input.file").on("change",function(){
        var files = $(this)[0].files,
          text = "",
          divider = files.length > 1 ? divider = ", " : "";
        for (var i = 0; i < files.length; i++)
          text += files[i].name.split('/').pop().split('\\').pop() + (i !== (files.length - 1) ? divider : "");
        $(this).parent("a").next(".file-input-name").html(text);
      });
    },
    methods: {
      getInitDataCount: function () {
        let _this = this;
        _this.$axios.post('getcodeuser', {'Invitcode': _this.user.Invitcode}).then(function (result) {
          if (result.status == 0) {
            let data = result.data,
              obj = {
                payCount: 0,
                apiCount: 0,
                count: 0
              }
            for (let i = 0; i < data.child.length; i++) {
              obj.count += 1;
              if (data.child[i].type == 2) {
                obj.payCount += 1
              }
              if (!!data.child[i].apikey) {
                obj.apiCount += 1
              }
              _this.initDataCount(obj, data.child[i].child, function (objs) {
                obj = objs;
                // list.push(nums)
              })
            }
            obj.countPer = obj.payCount / obj.count;
            _this.countData = obj;
            //判断当前用户等级  是否满足升级条件了
            let level = _this.user.level;
            if (data.child.length >= 2 && obj.count < 30 && obj.count >= 10) {//主管
              level = 1;
            }
            if (data.child.length >= 3 && obj.count < 50 && obj.count >= 30) {//经理
              level = 2;

            }
            if (data.child.length >= 5 && obj.count > 50 && obj.count >= 30) {//总监
              level = 3;
            }
            if (level != _this.user.level) {//不等。证明权限有变动  修改用户权限
              _this.$axios.post('useredit/level', {
                'level': level,
                'account': _this.user.account,
                'uuid': _this.user.uuid
              }).then(function (result) {
                if (result.status != 0) {
                  _this.myMessage.error('团队等级重置失败,请联系管理员处理')
                }
              })
            }
          } else {
            _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })

        _this.$axios.get('getABonusCount/' + _this.user.account).then(function (result) {
          if (result.status == 0) {
            _this.ABonusCount = result.data.count;
          } else {
            _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
        //获取账户昨天持仓信息
        _this.$axios.get('getRecordAll?account=' + _this.user.account).then(function (result) {
          if (result.status == 0) {
            let obj = {
              uuid: _this.user.uuid,
              account: _this.user.account,
              Invitdcode: _this.user.Invitdcode,
              level: _this.user.level,
              // countBtc: result.data[0].bot_balance,//总资产
              countProfit: 0,//总收益
              countInBonus: 0,//总邀请分红
              countPrBonus: 0,//总收益分红
              countMonth: 0,//当月总收益
              countMoInBonus: 0,//当月邀请收益
              countMoPrBonus: 0,//当月分红收益
              countPut: 0,//总提现
              countMoPut: 0,//当月提现
              countTakes: 0,//总分佣
              countMoTakes: 0,//当月总分佣
              putCountNum: 0//当月总分佣
            };
            if (result.data.length <= 0) {
              _this.myMessage.info(result.msg);
              return;
            }
            //获取前一天
            let date = new Date();
            //获取当前时间月的第一天
            date.setDate(1);
            date.setHours(0, 0, 0, 0);
            let times = date.getTime();
            result.data.forEach(item => {
              switch (item.type) {
                case '0'://收益盈利数据
                  obj.countProfit = (parseFloat(obj.countProfit) + parseFloat(item.bot_change_num)).toFixed(6);
                  if (item.bot_set_time > times) {//当月数据
                    obj.countMonth = (parseFloat(obj.countMonth) + parseFloat(item.bot_change_num)).toFixed(6);
                  }
                  break;
                case '1'://邀请分红数据
                  obj.countInBonus = (parseFloat(obj.countInBonus) + parseFloat(item.bot_change_num)).toFixed(6);
                  if (item.bot_set_time > times) {//当月数据
                    obj.countMoInBonus = (parseFloat(obj.countMoInBonus) + parseFloat(item.bot_change_num)).toFixed(6);
                  }
                  break;
                case '2'://团队分红数据
                  obj.countPrBonus = (parseFloat(obj.countPrBonus) + parseFloat(item.bot_change_num)).toFixed(6);
                  if (item.bot_set_time > times) {//当月数据
                    obj.countMoPrBonus = (parseFloat(obj.countMoPrBonus)+ parseFloat(item.bot_change_num)).toFixed(6);
                  }
                  break;
                case '3'://提现数据
                  obj.countPut = (parseFloat(obj.countPut) + parseFloat(item.bot_change_num)).toFixed(6);
                  if (item.bot_set_time > times) {//当月数据
                    obj.countMoPut = (parseFloat(obj.countMoPut) + parseFloat(item.bot_change_num)).toFixed(6);
                  }
                  break;
                case '4'://上级分佣抽成
                  obj.countTakes = (parseFloat(obj.countTakes) + parseFloat(item.bot_change_num)).toFixed(6);
                  if (item.bot_set_time > times) {//当月数据
                    obj.countMoTakes = (parseFloat(obj.countMoTakes) + parseFloat(item.bot_change_num)).toFixed(6);
                  }
                  break;
                case '5'://提现金额
                  obj.putCountNum = (parseFloat(obj.putCountNum) + parseFloat(item.bot_change_num)).toFixed(6);
                  break;
              }
              // return item;
            });

            // _this.bot_balance = obj.countBtc;
            _this.countProfit = parseFloat(obj.countInBonus) + parseFloat(obj.countPrBonus) + parseFloat(obj.putCountNum);
            _this.putNum = _this.countProfit;
          } else {
            _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },
      getInitData: function (code) {
        let _this = this;
        let directData = _this.directData;
        _this.$axios.post('getcode/user', {'Invitcode': code}).then(function (result) {
          if (result.status == 0) {
            let nodes = [],
              links = [],
              obj = {
                "name": directData.account,//名称
                "Invitdcode": directData.Invitdcode,//受邀码
                "Invitcode": directData.Invitcode,//邀请码
                "attributes": directData,
                "type": 'up',
                "id": directData.account,//id
                "size": 80,//圆的大小
                "url": "",
                "category": 8//类别
              }
            nodes.push(obj);
            result.data.forEach(function (item, index) {
              let obj = {
                "name": item.account,//名称
                "Invitdcode": item.Invitdcode,//受邀码
                "Invitcode": item.Invitcode,//邀请码
                "attributes": item,
                "type": 'down',
                "id": item.account,//id
                "size": 50,//圆的大小
                "url": "",
                "category": 4//类别
              }
              let obj2 = {
                "source": directData.account,//源点
                "target": item.account//目标
              }
              nodes.push(obj);
              links.push(obj2);
            });

            _this.graph = {
              nodes: nodes,
              links: links
            }
            _this.initECharsFn();
          } else {
            _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },
      getInitFatherData: function (code) {
        let _this = this;
        _this.$axios.post('getcode/user/father', {'Invitcode': code}).then(function (result) {
          if (result.status == 0) {
            _this.directData = result.data[0]
            _this.getInitData(_this.directData.Invitcode)
          } else {
            _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },
      initDataCount: function (obj, data, callback) {
        let length = data.length;
        let _this = this;
        if (length > 0) {
          data.forEach(function (item) {
            if (item.type === 2) {
              obj.payCount += 1;
            }
            if (!!item.apikey) {
              obj.apiCount += 1;
            }
            // if((item.child.length > 0)) {
            _this.initDataCount(obj, item.child, function (cbdata) {
              obj.count += 1;
              length--;
              if (length <= 0) {
                !callback ? '' : callback(cbdata);
              }
            })
            // }
          })
        } else {
          !callback ? '' : callback(obj);
        }
      },
      steTabFn: function (type) {
        let _this = this;
        _this.tabType = type;
      },
      initECharsFn: function () {
        let _this = this;
        var graph = _this.graph

        _this.myChart.hideLoading();
        _this.myChart.clear()
        var categories = [];
        for (var i = 0; i < 3; i++) {
          categories[i] = {
            name: '类型' + i
          };
        }
        graph.nodes.forEach(function (node) {
          node.itemStyle = null;//
          node.symbolSize = node.size;//强制指定adminadmin的大小
          node.x = node.y = null;
          node.draggable = true;

        });
        var option = {
          title: {
            text: '',//文本标题
            subtext: '',//副标题
            top: 'bottom',//上下位置
            left: 'right'//左右位置
          },
          tooltip: {
            trigger: 'item',
            extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
            borderRadius: 0,
            enterable: true,
            textStyle: {
              color: '#666666',
              extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
            },
            formatter: function (params, ticket, callback) {
              // let copyCodeFns = _this.copyCodeFn()
              if (params.data.source !== undefined && params.data.target !== undefined) {
                return
              }
              let type = params.data.attributes.type == '1' ? '试用中' : (params.data.attributes.type == '2' ? '购买用户' : (params.data.attributes.type == '0' ? '未付费' : '停止使用'));
              let html = "<div style='line-height:25px;text-align:left;position: absolute;left: 0;top: 0;padding: 10px 20px;width: 200px;height: 110px;border: 1px solid #cfcfcf;background: rgba(255,255,255,.9);z-index: 199;'>" +
                "<label style='display:block;'>用户账号: &nbsp;&nbsp;&nbsp;" + params.data.name + "</label>" +
                "<label style='display:block;'>会员状态: &nbsp;&nbsp;&nbsp;" + type + "</label>" +
                "<label style='display:block;'><a class='clickA'>复制邀请链接</a></label>" +
                "</div>";
              setTimeout(function () {
                $('.clickA').off('click').on('click', function () {
                  _this.copyCodeFn(params.data.Invitcode)
                });
              }, 500)
              return html;
            },
          },
          animation: false,//是否开启动画
          series: [
            {
              name: '',
              type: 'graph',
              layout: 'force',
              data: graph.nodes,//adminadmin数据
              links: graph.links,//adminadmin边数据
              categories: 'categories',//策略
              roam: false,//是否开启滚轮缩放和拖拽漫游，默认为false（关闭），其他有效输入为true（开启），'scale'（仅开启滚轮缩放），'move'（仅开启拖拽漫游）
              label: {
                show: 'false',
                position: 'right'
              },
              slient: false,//是否响应点击事件，为false的时候就是响应
              force: {
                repulsion: 800,
                edgeLength: [10, 100],
              }
            }
          ]
        };

        _this.myChart.setOption(option);

        function focus(param) {
          var data = param.data;
          if (data.source !== undefined && data.target !== undefined) { //点击的是边
            return;
          } else {
            if (data.type == 'up') {//返回上级
              if (!!data.Invitdcode && data.name != _this.user.account) {
                _this.getInitFatherData(data.Invitdcode)
              } else {
                _this.myMessage.info('已经是最顶层了');
              }
            } else {
              _this.directData = data.attributes
              _this.getInitData(data.Invitcode)
            }
          }
        }

        _this.myChart.off('click')
        _this.myChart.on('click', focus)
      },
      initRecordInvite: function () {
        let _this = this;
        _this.$axios.get('getRecordInvite?account=' + _this.user.account + '&pageIndex=' + _this.pageInvite.pageIndex + '&pageSize=' + _this.pageInvite.pageSize).then(function (result) {//获取邀请分红
          if (result.status == 0) {
            _this.InviteData = result.data.map(item => {
              let time = new Date(item.bot_set_time)
              item.timeTxt = _this.common.initTimeFn(time);
              return item;
            });
            _this.pageInvite.totalCount = result.count;
            _this.pageInvite.pageCount = Math.ceil(_this.pageInvite.totalCount / _this.pageInvite.pageSize);
          } else {
            _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },
      initRecordProfit: function () {
        let _this = this;
        _this.$axios.get('getRecordProfit?account=' + _this.user.account + '&pageIndex=' + _this.pageProfit.pageIndex + '&pageSize=' + _this.pageProfit.pageSize).then(function (result) {//获取盈利分红
          if (result.status == 0) {
            _this.ProfitData = result.data.map(item => {
              let time = new Date(item.bot_set_time)
              item.timeTxt = _this.common.initTimeFn(time);
              return item;
            })
            _this.pageProfit.totalCount = result.count;
            _this.pageProfit.pageCount = Math.ceil(_this.pageProfit.totalCount / _this.pageProfit.pageSize);
          } else {
            _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },
      initBonusList: function () {
        let _this = this;
        _this.$axios.get('getBonus/' + _this.user.account).then(function (result) {//获取购买记录
          if (result.status == 0) {
            _this.bonusList = result.data.map(item => {
              let date = new Date(item.create_time)
              item['timeTxt'] = _this.common.initTimeFn(date);
              switch (item.type) {
                case '0':
                  _this.showTop = true;
                  item['typeTxt'] = '等待提交凭证';
                  break;
                case '1':
                  item['typeTxt'] = '审核中';
                  break;
                case '2':
                  item['typeTxt'] = '已完成';
                  break;
                case '3':
                  item['typeTxt'] = '失败';
                  break;
              }
              return item;
            });
          } else {
            // _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },
      pageProfitFn: function (e) { //分页调用方法
        let _this = this;
        _this.pageProfit = e;
        _this.initRecordProfit();
      },
      pageInviteFn: function (e) { //分页调用方法
        let _this = this;
        _this.pageInvite = e;
        _this.initRecordInvite();
      },
      showPrompPut() {
        let _this = this
        if(!!_this.user.walletaddress){
          _this.showDialog2 = true;
        }else{
          _this.myMessage.info('请先添加你的钱包地址!');
        }
      },
      modalResponse2(json) {
        let _this = this
        if (json.type === 'close') {
          this.showDialog2 = false;
        } else {//有表单等要操作的内容
          if (_this.putNum > _this.countProfit) {
            _this.myMessage.info('请输入正确的数量!');
            return;
          }
          if (_this.putNum <= 0) {
            _this.myMessage.info('请输入正确的数量!');
            return;
          }
          let obj = {
            uuid: _this.user.uuid,
            account: _this.user.account,
            num: (_this.putNum - (_this.putNum * 0.05).toFixed(4)).toFixed(4),
          }
          _this.$axios.post('setPut', obj).then(function (result) {
            if (result.status == 0) {
              _this.myMessage.success('提交成功!');
              _this.showDialog2 = false;
            } else {
              _this.myMessage.error(result.msg);
            }
          }).catch(function (err) {
            _this.myMessage.error('网络请求发生异常,请稍后再试...');
          })
        }
      },
      showPrompPut3() {
        this.showDialog3 = true;
      },
      showPrompPut4(item) {
        this.showDialog4 = true;
        this.renewItem = item;
      },
      modalResponse3(json) {
        let _this = this
        if (json.type === 'close') {
          _this.showDialog3 = false;
        } else {//完成转账
          let obj = {
            account: _this.user.account,
            price: _this.bonusBaseMonth,
            base: _this.base,
            desc: ''
          }
          _this.$axios.post('addBonus', obj).then(function (result) {
            if (result.status == 0) {
              _this.myMessage.success('提交成功!');
              _this.showDialog3 = false;
              _this.initBonusList()
            } else {
              _this.myMessage.error(result.msg);
            }
          }).catch(function (err) {
            _this.myMessage.error('网络请求发生异常,请稍后再试...');
          })
        }
      },
      modalResponse4(json) {
        let _this = this
        if (json.type === 'close') {
          _this.showDialog4 = false;
        } else {//完成转账
          _this.forms.append('id', _this.renewItem.id);
          _this.$axios.post('addPicture/' + _this.renewItem.account + '/bonus', _this.forms).then(function (result) {
            if (result.status == 0) {
              _this.myMessage.success('提交成功!');
              _this.showDialog4 = false;
              _this.showTop = false;
              _this.initBonusList()
            } else {
              _this.myMessage.error(result.msg);
            }
          }).catch(function (err) {
            _this.myMessage.error('网络请求发生异常,请稍后再试...');
          })
        }
      },
      add_img(e) {
        let _this = this;
        let img1 = event.target.files[0];
        let size = img1.size;//文件的大小，判断图片的大小  
        if (size > 2097152) {
          alert('请选择2M以内的图片！');
          return false;
        }
        _this.forms = new FormData();
        _this.forms.append('picUrl', img1);
      },
      copyQrCodeFn(){
        console.log('copyQrCodeFn');
        let txt = window.location.origin + '/register?code=' + this.user.Invitcode;
        // let txt = this.user.Invitcode;
        // txt = txt.split('://')[1]
        let preview = $("#preview"),
          dialog = preview.find(".modal-dialog");
        dialog.removeClass("modal-lg modal-sm modal-fw");
        let qrcode = '';
        preview.modal("show");
        $(".modal-body.padding-5.text-center").html('<h3 class="margin-top-20">邀请好友扫描二维码加入你的团队</h3><div id="QRCode" style="width: 240px;height: 240px;margin: 100px auto 60px;padding: 10px;border: 1px solid #cfcfcf;"></div>');
        setTimeout(function () {
          qrcode = new QRCode('QRCode', {
            width: 220,
            height: 220, // 高度
            text: txt, // 二维码内容
            // colorLight: 'rgb(71, 150, 163)',//背景色
            // colorDark: '#fff'//前景色
          });
        },400);

        return false;
      }
    }
  }
</script>
<style scoped>
  .block {
    min-height: 680px;
  }
  .arrow-box {
    position: relative;
    width: 85px;
    display: inline-block;
  }

  .arrow-box a {
    position: absolute;
    width: 60px;
    left: 60px;
    top: 24px;
    display: block;
    cursor: pointer;
    z-index: 99;
  }

  .user-head-box .card {
    display: none;
    position: absolute;
    left: 50px;
    top: 0;
    padding: 10px 20px;
    width: 200px;
    height: 110px;
    border: 1px solid #cfcfcf;
    border-radius: 5px;
    background: rgba(255, 255, 255, .9);
    z-index: 199;
  }

  .user-head-box .card a {
    cursor: pointer;
  }

  .user-head-box span {
    width: 110px;
    position: absolute;
    display: block;
    text-align: center;
    left: -30px;
    bottom: -25px;
    z-index: 99;
    font-size: 14px;
  }

  .user-head-box:hover .card {
    display: block;
  }

  .card label {
    display: block;
    line-height: 25px;
    text-align: left;
  }

  .partition-info {
    text-align: center;
    border: 1px solid #DBE0E4;
    padding: 10px 5px;
    /*margin-right: 5%;*/
  }

  .user-head {
    background: url('/static/boooya/img/user/user_heads.png') -61px -269px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-size: 170px 170px;
    border: 1px solid #cfcfcf;
    display: inline-block;
    position: relative;
    cursor: pointer;
  }

  .user-head-box {
    width: 50px;
    height: 50px;
    display: inline-block;
    position: relative;
    margin: 0 30px 30px;
  }

  .arrow-bg {
    background: url('/static/boooya/img/bottom.png');
    width: 50px;
    height: 60px;
    background-size: 50px 60px;
    display: inline-block;
    opacity: 0.2;
    margin: 0 0 10px 0;
  }

  .user-head.user-head-default {
    background: url('/static/boooya/img/user/no-image.png') no-repeat;
    background-size: 100% 100%;
  }

  .app .block.block-condensed {
    margin-bottom: 6px;
  }

  .users-list {
    border: 1px solid #DBE0E4;
  }

  .users-list span {
    line-height: 30px;
    text-align: center;
    display: block;
    color: #1B2431;
  }

  .app .block.block-condensed > .app-heading {
    padding: 8px;
  }

  .col-md-11 {
    margin: 0 auto;
    float: none;
  }

  .col-md-11, .col-md-5 {
    padding: 0;
  }

  .row {
    margin: 0;
  }

  .app .contact.contact-lg {
    padding: 0;
  }

  .app .contact.contact-bordered.contact-lg:after {
    display: none;
  }

  .app .app-heading .title {
    float: none;
  }

  .contact-container {
    display: inline-block;
  }

  .app-heading {
    padding: 10px 5px;
  }

  hr {
    height: 1px;
    background: #cfcfcf;
  }

  .title p a {
    cursor: pointer;
  }

  .table-head-custom {
    margin-bottom: 10px;
    /* margin-bottom: 0 !important;*/
  }

  .user-info {
    padding: 5px 50px 60px;
    line-height: 30px;
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
    font-weight: 500;
    color: #62676d;
  }

  .app .containers-tab {
    width: 100%;
    float: none;
    zoom: 1;
    margin: 0px auto;
    padding: 0 15px;
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
    padding: 10px 20px 12px 15px;
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
    margin-right: 10px;
    line-height: 20px;
    min-width: 20px;
    text-align: center;
    font-size: 20px;
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
</style>
