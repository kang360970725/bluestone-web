<template>
  <div class="block renew" style="padding: 10px;">
    <div v-show="editData">
      <h3 style="text-align: center;">合计充值BTC数量：{{(!!countPrice ? countPrice : 0).toFixed(8)}}</h3>
      <vdialog :isShow="showDialog" :options="dialogOptions" v-on:modalResponse="modalResponse">
        <div style="" v-show="editType == 3">
          <form class="form-horizontal">
            <div class="form-group">
              <label class="w-col w-col-2 control-label">拒绝原因</label>
              <div class="w-col w-col-10">
                <textarea class="form-control" rows="5" v-model="editRenew.desc"></textarea>
              </div>
            </div>
          </form>
        </div>
        <div style="" v-show="editType == 2">
          <form class="form-horizontal">
            <div class="form-group">
              <label class="w-col w-col-2 control-label">凭证</label>
              <div class="w-col w-col-10">
                <a class="tile-image tile-image-padding tile-image-hover-grayscale preview"
                   :data-preview-image="initUrl + '' +editRenew.credential" data-preview-size="modal-lg">
                  <img style="max-width: 120px;" :src="initUrl + '' +editRenew.credential" alt="">
                </a>
              </div>
            </div>
            <div class="form-group margin-top-10">
              <label class="w-col w-col-2 control-label">开通时间:</label>
              <div class="w-col w-col-10">
                <label class="control-label">
                  <span>1 年</span>
                </label>
              </div>
            </div>
            <div class="form-group margin-top-10">
              <label class="w-col w-col-2 control-label">开通版本:</label>
              <div class="w-col w-col-10">
                <label class="control-label">
                  <span>{{editRenew.data_time == 1 ? '标准版' : (editRenew.data_time == 2 ? '专业版' : '精英版')}}</span>
                </label>
              </div>
            </div>
            <div class="form-group margin-top-10">
              <label class="w-col w-col-2 control-label">支付价格:</label>
              <div class="w-col w-col-10">
                <label class="control-label">
                  <span>{{editRenew.data_time == 1 ? 1000 : (editRenew.data_time == 2 ? 2000 : 3000)}} usd 或 {{editRenew.price}} btc</span>
                </label>
              </div>
            </div>
          </form>
        </div>
      </vdialog>
      <div class="clearfix">
        <div class="app-nav-tab">
          <div class="containers-tab">
            <ul>
              <li class="openables" :class="type != '' ? 'active' : ''">
                <a @click="steTypeFn('1')"><span class="icon-file-check"></span> 充值申请</a>
              </li>
              <li class="openables" :class="type == '' ? 'active' : ''">
                <a @click="steTypeFn('')"><span class="icon-file-lock"></span> 所有记录</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="tab-data" style="min-height: 512px;">
        <div class="present-history">
          <div class="block-content" style="min-height: 512px;">
            <table class="table table-striped table-bordered">
              <thead>
              <tr>
                <th>会员账号</th>
                <th>提交时间</th>
                <th>凭证</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in dataList" :key='item.id'>
                <td>{{item.account}}</td>
                <td>{{item.timeTxt}}</td>
                <td>
                  <a class="tile-image tile-image-padding tile-image-hover-grayscale preview"
                     :data-preview-image="initUrl + '' +item.credential" data-preview-size="modal-lg">
                    <img style="width: 60px;max-height: 30px;" :src="initUrl + '' +item.credential" alt="">
                  </a>
                </td>
                <td v-show="item.type == 0">
                  <div>
                    <button class="btn btn-default btn-xs">等待上传凭证</button>
                  </div>
                </td>
                <td v-show="item.type == 1">
                  <div>
                    <button class="btn btn-default btn-xs">等待审核</button>
                  </div>
                </td>
                <td v-show="item.type == 2">
                  <div>
                    <button class="btn btn-default btn-xs">充值成功</button>
                  </div>
                </td>
                <td v-show="item.type == 3">
                  <div>
                    <button class="btn btn-default btn-xs">已被拒绝</button>
                  </div>
                </td>
                <td>
                  <div v-show="item.type == 1">
                    <button class="btn btn-danger btn-xs" @click="showPromp(item,'3')">驳回</button>
                    <button class="btn btn-success btn-xs" @click="showPromp(item,'2')">确认凭证有效</button>
                  </div>
                </td>
              </tr>
              <tr v-show="dataList.length <= 0">
                <td colspan="5" style="text-align: center">暂无数据</td>
              </tr>
              </tbody>
            </table>
          </div>
          <pageBox class="pull-right" :pagination="pagination" v-on:setPageData="pagesFn($event)"></pageBox>
        </div>
      </div>
    </div>
    <div v-show="!editData" class="app-tip app-tip-warning">
      <span>请在电脑上进行操作</span>
    </div>

    <!--<div class="modal fade" id="preview" tabindex="-1" role="dialog">-->
    <!--<div class="modal-dialog">-->
    <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" class="icon-cross"></span></button>-->

    <!--<div class="modal-content">-->
    <!--<div class="modal-body padding-5" style="text-align: center;"></div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  import vdialog from "../../components/com-dialog";
  import pageBox from "../../components/com-pagination";
  // import '../../../static/boooya/js/app_plugins.js';
  import httpConfig from '../../config/http'

  export default {
    name: 'information',
    components: {
      vdialog,
      pageBox
    },
    data: function () {
      return {
        type: '1',
        initUrl: httpConfig.apiHost,
        user: {},
        editRenew: {
          desc: ''
        },
        dataList: [],
        editType: 1,
        dialogOptions: {//弹窗配置项
          width: '550',//弹窗宽度
          title: '会员充值确认',
          hasBtn: true, //是否需要确定按钮，默认没有确认按钮
          closeBtn: true //是否需要关闭按钮，默认没有关闭按钮
        },
        editData: true,
        showDialog: false,
        pagination: {//分页参数
          pageIndex: 1,
          pageSize: 10,
          startCount: 0,
          totalCount: 0,
          pageCount: 0
        },
        accountData: {},
        showCapital: false,
        countPrice: 0
      }
    },
    mounted() {
      if ($(window).width() < 900) {
        this.editData = false
      }
      this.user = JSON.parse(localStorage.getItem('user')) || '';
      if (this.user.level < 5) {
        this.$router.go(0);
        this.$router.push('/index')
      }
      this.getInitData();
    },
    methods: {
      getInitData: function () {
        let _this = this;
        _this.$axios.get('getRenewList?pageIndex=' + _this.pagination.pageIndex + '&pageSize=' + _this.pagination.pageSize + '&type=' + _this.type).then(function (result) {
          if (result.status == 0) {
            _this.dataList = result.data.map(item => {
              let date = new Date(item.create_time)
              item['timeTxt'] = _this.common.initTimeFn(date);
              return item;
            });
            _this.pagination.totalCount = result.count;
            _this.pagination.pageCount = Math.ceil(_this.pagination.totalCount / _this.pagination.pageSize);
            setTimeout(function () {
              _this.initImg();
            }, 300)
          } else {
            _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        });
        //获取充值统计
        _this.$axios.get('countRenewSum').then(function (result) {
          if (result.status == 0) {
            _this.countPrice = result.count;
          } else {
            _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },
      pagesFn: function (e) { //分页调用方法
        let _this = this;
        _this.pagination = e;
        _this.getInitData();
      },
      steTypeFn: function (type) {
        let _this = this;
        _this.type = type;
        _this.pagination.pageIndex = 1;
        this.getInitData();
      },
      showPromp(item, type) {
        let _this = this;
        this.editRenew = item;
        this.editRenew.desc = '';
        this.editType = type;
        this.showDialog = true;
        setTimeout(function () {
          _this.initImg();
        }, 600)
      },
      modalResponse(json) {
        let _this = this
        if (json.type === 'close') {
          this.showDialog = false;
        } else {//有表单等要操作的内容
          if (_this.editType == 3) {//驳回
            let obj = {
              id: _this.editRenew.id,
              account: _this.editRenew.account,
              type: 3,
              desc: _this.editRenew.desc
            }
            _this.$axios.put('setRenewType', obj).then(function (result) {
              if (result.status == 0) {
                _this.myMessage.success('操作成功!');
                _this.showDialog = false;
                _this.getInitData();
              } else {
                _this.myMessage.error(result.msg);
              }
            }).catch(function (err) {
              _this.myMessage.error('网络请求发生异常,请稍后再试...');
            })
          } else {//确定充值有效
            let _this = this;
            if (confirm('确定充值有效?')) {
              let obj = {
                id: _this.editRenew.id,
                account: _this.editRenew.account,
                type: 2,
                bot_type: _this.editRenew.data_time,
                price: _this.editRenew.price,
                day: 365,
                desc: ''
              };
              _this.$axios.put('setRenewType', obj).then(function (result) {
                if (result.status == 0) {
                  _this.myMessage.success('操作成功!');
                  _this.showDialog = false;
                  _this.getInitData();
                } else {
                  _this.myMessage.error(result.msg);
                }
              }).catch(function (err) {
                _this.myMessage.error('网络请求发生异常,请稍后再试...');
              })
            } else {
            }
          }
        }
      },
      initImg: function () {
        var preview = $("#preview"),
          dialog = preview.find(".modal-dialog"),
          content = preview.find(".modal-body");
        $(".preview").on("click", function () {
          content.html("");
          dialog.removeClass("modal-lg modal-sm modal-fw");
          if ($(this).data("preview-image"))
            content.append(app.features.preview.build.image($(this).data("preview-image")));

          if ($(this).data("preview-video"))
            content.append(app.features.preview.build.video($(this).data("preview-video")));

          if ($(this).data("preview-href")) {
            content.html(app.features.preview.build.href($(this).data("preview-href")));
            app_plugins.loaded();
          }

          if ($(this).data("preview-size"))
            dialog.addClass($(this).data("preview-size"));

          if ($(this).data("preview-title") && $(this).data("preview-description"))
            content.prepend(app.features.preview.build.text($(this).data("preview-title"), $(this).data("preview-description")));
          $(".img-responsive").css({'display': 'inline-block'})
          preview.modal("show");

          return false;
        });

        preview.on('hidden.bs.modal', function () {
          content.html("");
        });

      },
    }
  }
</script>

<style scoped>
  .form-horizontal .form-group {
    margin: 0 0 15px 0;
    overflow: hidden;
  }

  .form-group .w-col w-col-10 .error {
    color: red;
    /*position: absolute;*/
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

  .w-col w-col-3 {
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
