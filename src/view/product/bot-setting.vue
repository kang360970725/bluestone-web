<template>
  <div>
    <!-- SUB BANNER -->
    <div class="sub-banner">
      <div class="w-container">
        <div class="w-row">
          <div class="w-col w-col-8">
            <h4 class="title-bread">{{$t('m.header.Bot')}} <span class="sub-title-lighter">/ {{$t('m.header.bodyTitle')}}<br></span>
            </h4>
          </div>
          <div class="w-col w-col-4 col-right">
            <!--<div class="breadcrumbs">Unikue /&nbsp;Shortcodes</div>-->
          </div>
        </div>
      </div>
    </div>
    <!-- END SUB BANNER -->
    <section class="w-section section" style="padding: 50px 10px;">
      <div class="w-container">
        <div class="w-row">
          <!--<div class="w-col w-col-3">-->
          <!--<div class="sidebar lft-side">-->
          <!--<div class="div-spc more-spc">-->
          <!--<h5>{{$t('m.contact.categories')}}</h5>-->
          <!--<ul class="w-list-unstyled">-->
          <!--<li class="li">-->
          <!--<div class="top-ico">-->
          <!--<div class="w-embed"><i class="fa fa-angle-right"></i>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="li-txt">-->
          <!--<a class="sm-lnk active" href="#">{{$t('m.header.BotSet')}}</a>-->
          <!--</div>-->
          <!--</li>-->
          <!--<li class="li">-->
          <!--<div class="top-ico">-->
          <!--<div class="w-embed"><i class="fa fa-angle-right"></i>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="li-txt"><a class="sm-lnk" href="#">{{$t('m.header.personal')}}</a>-->
          <!--</div>-->
          <!--</li>-->
          <!--</ul>-->
          <!--</div>-->
          <!--</div>-->
          <!--</div>-->
          <div class="w-col w-col-9 border1" style="margin: 0 auto;float: none;">
            <div class="w-clearfix">
              <div class="w-container">
                <div class="w-tabs" data-duration-in="300" data-duration-out="100">
                  <div class="w-tab-menu">
                    <a class="w-tab-link w--current w-inline-block tab" data-w-tab="Tab 1">
                      <div>{{$t('m.header.Bot1_1')}}</div>
                    </a>
                    <a class="w-tab-link w-inline-block tab" @click="showTagFn">
                      <div>{{$t('m.header.Bot2_1')}}</div>
                    </a>
                    <a class="w-tab-link w-inline-block tab" @click="showTagFn">
                      <div>{{$t('m.header.Bot3')}}</div>
                    </a>
                  </div>
                  <div class="w-tab-content tab-content">
                    <div class="w-tab-pane w--tab-active" data-w-tab="Tab 1">
                      <div class="w-col w-col-12">
                        <div class="box-border pd-20">
                          <div class="top-header">
                            <span class="font18">基础配置</span>
                          </div>
                          <div class="apply_Box input_outer">
                            <div class="box">
                              <span class="txt">交易所:</span>
                              <select disabled="disabled">
                                <option>Bitmex</option>
                              </select>
                            </div>
                            <div class="box">
                              <span class="txt">API:</span>
                              <input type="text" class="w-input text-field" v-model="user.apikey"/>
                            </div>
                            <div class="box">
                              <span class="txt">Secret:</span>
                              <input type="text" class="w-input text-field" v-model="user.secret"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-col w-col-12">
                        <div class="box-border pd-20">
                          <div class="top-header">
                            <span class="font18">官方策略配置(适合蓝猫新用户)</span>
                            <a class="fl-right button no-lft-mrg" @click="application">一键应用</a>
                          </div>
                          <div class="apply_Box input_outer">
                            <div class="box">
                              <span class="txt">官方策略:</span>
                              <!--<input type="text" class="text form-control" :placeholder="$t('m.service.tit1_txt1')"/>-->
                              <select class="text form-control" @change="setOffStrFn(offStr)" v-model="offStr">
                                <!--<option value="1">保守</option>-->
                                <option value="1">稳健</option>
                                <option value="2">激进</option>
                                <!--<option value="4">高风险</option>-->
                              </select>
                            </div>
                            <section class="bg-light py-5" style="font-size:14px;font-family: Verdana, sans-serif;">
                              <div class="container">
                                <div class="tab-content1" id="pills-tabContent">
                                  <div class="tab-pane fade" v-show="offStr == 1" role="tabpanel"
                                       aria-labelledby="pills-profile-tab">
                                    <div class="w-col w-col-4">
                                      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong class="d-block text-gray-dark">头寸/比例:&nbsp;&nbsp;&nbsp;&nbsp; </strong>
                                        0.00035/1.24
                                      </p>
                                      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong
                                          class="d-block text-gray-dark">补仓间距:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                                        28
                                      </p>
                                      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong
                                          class="d-block text-gray-dark">止盈间距:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                                        30
                                      </p>
                                    </div>
                                    <div class="w-col w-col-4">
                                      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong class="d-block text-gray-dark">第一次补仓次数:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                                        28
                                      </p>
                                      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong class="d-block text-gray-dark">第二次补仓次数:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                                        18小时后改50
                                      </p>
                                      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong class="d-block text-gray-dark">第三次补仓次数:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                                        18小时后改70
                                      </p>
                                    </div>
                                    <div class="w-col w-col-4">
                                      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong class="d-block text-gray-dark">补仓模式:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                                        低速补
                                      </p>
                                      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong class="d-block text-gray-dark">空手道:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                                        第三次补满后开启0.5
                                      </p>
                                      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong class="d-block text-gray-dark">反手光环:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                                        第一次补满后开启
                                      </p>
                                    </div>
                                  </div>
                                  <div class="tab-pane fade" v-show="offStr == 2" role="tabpanel"
                                       aria-labelledby="pills-contact-tab">
                                    <div class="w-col w-col-4">
                                      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong class="d-block text-gray-dark">头寸/比例:&nbsp;&nbsp;&nbsp;</strong>
                                        0.0005/1.24
                                      </p>
                                      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong
                                          class="d-block text-gray-dark">补仓间距:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                                        5
                                      </p>
                                      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong
                                          class="d-block text-gray-dark">止盈间距:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                                        1
                                      </p>
                                    </div>
                                    <div class="w-col w-col-4">
                                      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong class="d-block text-gray-dark">第一次补仓次数:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                                        28
                                      </p>
                                      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong class="d-block text-gray-dark">第二次补仓次数:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                                        18小时后改50
                                      </p>
                                      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong class="d-block text-gray-dark">第三次补仓次数:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                                        18小时后改70
                                      </p>
                                    </div>
                                    <div class="w-col w-col-4">
                                      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong class="d-block text-gray-dark">补仓模式:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                                        低速0
                                      </p>
                                      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong class="d-block text-gray-dark">空手道:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                                        第三次补满后开启0.5
                                      </p>
                                      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong class="d-block text-gray-dark">反手光环:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                                        第一次补满后开启
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>

                      <div class="w-col w-col-12">
                        <div class="box-border">
                          <div class="top-header">
                            <span class="font18">自定义策略(适合蓝猫高级用户)</span>
                            <a class="fl-right button no-lft-mrg" :class="bot.open ? 'off' : ''">
                              <input class="fl-right button no-lft-mrg" type="checkbox" v-model="bot.open"
                                     @click="openbot"/>
                              {{bot.open ? '关闭机器人' : '打开机器人'}}
                            </a>
                          </div>
                          <div class="apply_Box input_outer">
                            <div class="w-col w-col-12">
                              <div class="box-border pd-20">
                                <div class="top-header bg_white">
                                  <span class="font18">基本参数</span>
                                </div>
                                <div class="apply_Box input_outer">
                                  <div class="box">
                                    <span class="txt">趋势交易:</span>
                                    <label class="mui-switch-box"><input class="mui-switch mui-switch-animbg"
                                                                         type="checkbox"
                                                                         v-model="bot.trendfollow"></label>
                                    <span class="name-testi">{{bot.trendfollow ? '当前配置做顺势交易':'当前配置做逆势交易'}}</span>
                                  </div>
                                  <div class="box">
                                    <span class="txt">K线周期:</span>
                                    <input type="text" class="w-input text-field" v-model="bot.time">
                                    <span class="name-testi">k线指标:1表示1分钟线，5表示5分钟线</span>
                                  </div>
                                  <div class="box">
                                    <span class="txt">最大补仓次数:</span>
                                    <div class="tipBox">
                                      <input type="text" class="w-input text-field" v-model="bot.maxnanpin">
                                      <span class="tip_txt" style="top:1px;">次</span>
                                    </div>
                                    <span class="name-testi">允许最大补仓次数</span>
                                  </div>
                                  <div class="box">
                                    <span class="txt">刷新时间:</span>
                                    <div class="tipBox">
                                      <input type="text" class="w-input text-field" v-model="bot.sleep">
                                      <span class="tip_txt">秒(s)</span>
                                    </div>
                                    <span class="name-testi">循环时间推荐40或70</span>
                                  </div>
                                  <div class="box">
                                    <span class="txt">最大杠杆:</span>
                                    <div class="tipBox">
                                      <input type="text" class="w-input text-field" v-model="bot.maxleverage">
                                      <!--<span class="tip_txt">USD</span>-->
                                    </div>
                                    <span class="name-testi">最大补仓持仓数量=50杠杆*本金</span>
                                  </div>
                                </div>
                                <br>
                              </div>
                              <div class="box-border pd-20">
                                <div class="top-header bg_white">
                                  <span class="font18">复利配置</span>
                                </div>
                                <div class="apply_Box input_outer">
                                  <div class="box">
                                    <span class="txt" style="width: 200px;">头寸为首次开仓数量</span>
                                    <!--<input type="checkbox" name="switch_5" v-model="bot.trendfollow">-->
                                    <!--<span class="name-testi">头寸为首次开仓数量</span>-->
                                  </div>
                                  <div class="box">
                                    <span class="txt">是否开启:</span>
                                    <label class="mui-switch-box">
                                      <input class="mui-switch mui-switch-animbg" type="checkbox" v-model="bot.mm">
                                    </label>
                                    <span class="name-testi">{{bot.mm ? '头寸和补仓为复利模式。':'头寸和补仓为固定模式'}}</span>
                                  </div>
                                  <div v-show="bot.mm">
                                    <div class="box">
                                      <span class="txt">头寸比例:</span>
                                      <div class="tipBox">
                                        <input type="text" class="w-input text-field" v-model="bot.mmpercent">
                                        <span class="tip_txt">%</span>
                                      </div>
                                      <span class="name-testi">保证金使用率（推荐0.0003〜0.0008)</span>
                                    </div>
                                    <div class="box">
                                      <span class="txt">补仓比例:</span>
                                      <div class="tipBox">
                                        <input type="text" class="w-input text-field" v-model="bot.mmnanpin">
                                        <span class="tip_txt">倍</span>
                                      </div>
                                      <span class="name-testi">补仓比例*头寸金额,1倍为等额补仓,建议不超过1.25</span>
                                    </div>
                                  </div>
                                  <div v-show="!bot.mm">
                                    <div class="box">
                                      <span class="txt">头寸金额:</span>
                                      <div class="tipBox">
                                        <input type="text" class="w-input text-field" v-model="bot.entry">
                                        <span class="tip_txt">USD</span>
                                      </div>
                                      <span class="name-testi">指定固定金额单位,MM指定为0的情况下有效</span>
                                    </div>
                                    <div class="box">
                                      <span class="txt">补仓金额:</span>
                                      <div class="tipBox">
                                        <input type="text" class="w-input text-field" v-model="bot.nanpin">
                                        <span class="tip_txt">USD</span>
                                      </div>
                                      <span class="name-testi">每次补仓合约数量</span>
                                    </div>
                                  </div>
                                </div>
                                <br>
                              </div>
                              <div class="box-border pd-20">
                                <div class="top-header bg_white">
                                  <span class="font18">做多配置</span>
                                </div>
                                <div class="apply_Box input_outer">
                                  <div class="box">
                                    <span class="txt">是否开启:</span>
                                    <label class="mui-switch-box">
                                      <input class="mui-switch mui-switch-animbg" type="checkbox"
                                             v-model="bot.longorder">
                                    </label>
                                    <a class="toggle" v-show="bot.longorder" :class="longorderDire ? 'toggle--on': 'toggle--off'" @click="longorderDire = !longorderDire"></a>
                                    <span class="name-testi">{{bot.longorder > 0 ? '已开启多军的单边交易'+ (longorderDire ? '限价':'市价') +'交易' : '已关闭多军的单边交易'}}</span>
                                    <!--<span class="name-testi">{{bot.longorder ? '已开启多军的单边交易':'已关闭多军的单边交易'}}</span>-->
                                  </div>
                                  <div class="box">
                                    <span class="txt">多军止盈:</span>
                                    <div class="tipBox">
                                      <input type="text" class="w-input text-field" v-model="bot.longrange">
                                      <span class="tip_txt">USD</span>
                                    </div>
                                    <span class="name-testi">做多时相对于均价止盈间距</span>
                                  </div>
                                  <div class="box">
                                    <span class="txt">多军补仓:</span>
                                    <div class="tipBox">
                                      <input type="text" class="w-input text-field" v-model="bot.longstop">
                                      <span class="tip_txt">USD</span>
                                    </div>
                                    <span class="name-testi">做多被套后补仓价格间距</span>
                                  </div>
                                  <div class="box">
                                    <span class="txt">多军止损:</span>
                                    <div class="tipBox">
                                      <input type="text" class="w-input text-field" v-model="bot.longstopx">
                                      <span class="tip_txt">USD</span>
                                    </div>
                                    <span class="name-testi">做多均价偏离多少美金后全仓止损</span>
                                  </div>
                                </div>
                                <br>
                              </div>

                              <div class="box-border pd-20">
                                <div class="top-header bg_white">
                                  <span class="font18">做空配置</span>
                                </div>
                                <div class="apply_Box input_outer">
                                  <div class="box">
                                    <span class="txt">是否开启:</span>
                                    <label class="mui-switch-box">
                                      <input class="mui-switch mui-switch-animbg" type="checkbox"
                                             v-model="bot.shortorder">
                                    </label>
                                    <a class="toggle" v-show="bot.shortorder" :class="shortorderDire ? 'toggle--on': 'toggle--off'" @click="shortorderDire = !shortorderDire"></a>
                                    <span class="name-testi">{{bot.shortorder > 0 ? '已开启空军的单边'+ (shortorderDire ? '限价':'市价') +'交易' : '已关闭空军的单边交易'}}</span>
                                  </div>
                                  <div class="box">
                                    <span class="txt">空军止盈:</span>
                                    <div class="tipBox">
                                      <input type="text" class="w-input text-field" v-model="bot.shortrange">
                                      <span class="tip_txt">USD</span>
                                    </div>
                                    <span class="name-testi">做空时相对于均价止盈间距</span>
                                  </div>
                                  <div class="box">
                                    <span class="txt">空军补仓:</span>
                                    <div class="tipBox">
                                      <input type="text" class="w-input text-field" v-model="bot.shortstop">
                                      <span class="tip_txt">USD</span>
                                    </div>
                                    <span class="name-testi">做空被套后补仓价格间距</span>
                                  </div>
                                  <div class="box">
                                    <span class="txt">空军止损:</span>
                                    <div class="tipBox">
                                      <input type="text" class="w-input text-field" v-model="bot.shortstopx">
                                      <span class="tip_txt">USD</span>
                                    </div>
                                    <span class="name-testi">做空均价偏离多少美金后全仓止损</span>
                                  </div>
                                </div>
                                <br>
                              </div>

                              <div class="box-border pd-20">
                                <div class="top-header bg_white">
                                  <span class="font18">高级配置</span>
                                </div>
                                <div class="apply_Box input_outer">
                                  <div class="box">
                                    <span class="txt">反手光环:</span>
                                    <label class="mui-switch-box">
                                      <input class="mui-switch mui-switch-animbg" type="checkbox" v-model="bot.doten">
                                    </label>
                                    <span class="name-testi">防止大单边深套,当市场急速反转时有几率触发反手</span>
                                  </div>
                                  <div class="box">
                                    <span class="txt">Losscut:</span>
                                    <div class="tipBox">
                                      <input type="text" class="w-input text-field" v-model="bot.losscut">
                                      <span class="tip_txt">USD</span>
                                    </div>
                                    <span class="name-testi">根据钱包余额实时计算止损金额。(1表示不止损)</span>
                                  </div>
                                  <div class="box">
                                    <span class="txt">空手道:</span>
                                    <select v-model="bot.nanpin_cancel">
                                      <option value="0">无效</option>
                                      <option value="0.5">空手道</option>
                                      <option value="1">全仓认输</option>
                                      <option value="2">乾坤大挪移</option>
                                    </select>
                                    <!--<input type="text" class="w-input text-field" v-model="bot.nanpin_cancel">-->
                                    <span class="name-testi">默认不开启,可选择空手道、全仓认输、乾坤大挪移模式</span>
                                  </div>
                                  <div class="box">
                                    <span class="txt">补仓模式:</span>
                                    <select v-model="bot.nanpin_order">
                                      <option value="0">低速补</option>
                                      <option value="1">高速补</option>
                                      <option value="2">急速手续费</option>
                                    </select>
                                    <span class="name-testi">默认低速模式可选择高速、急速手续费等模式</span>
                                  </div>
                                </div>
                                <br>
                              </div>
                              <div class="w-col-12" style="text-align: center;">
                                <button class="w-button button no-margin w-col-10" style="margin: 0 auto;"
                                        @click="setBotDataFn('')">保存自定义策略
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--Tab2-->
                      <!--<div class="w-tab-pane" data-w-tab="Tab 2">-->
                      <!--<p>2 :&nbsp;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem-->
                      <!--Ipsum-->
                      <!--has been-->
                      <!--the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley-->
                      <!--of type.&nbsp;-->
                      <!--<br>-->
                      <!--<br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has-->
                      <!--been the-->
                      <!--industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of-->
                      <!--type.</p>-->
                      <!--</div>-->
                      <!--Tab3-->
                      <!--<div class="w-tab-pane" data-w-tab="Tab 3">-->
                      <!--<p>3 :&nbsp;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem-->
                      <!--Ipsum-->
                      <!--has been-->
                      <!--the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley-->
                      <!--of type.&nbsp;-->
                      <!--<br>-->
                      <!--<br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has-->
                      <!--been the-->
                      <!--industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of-->
                      <!--type.</p>-->
                      <!--</div>-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <remote-js src="https://pv.sohu.com/cityjson?ie=utf-8"></remote-js>
  </div>
</template>

<script>
  export default {
    name: 'information',
    components: {
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
        tabType: 2,
        user: {},
        bot: {
          open: false
        },
        ip: '',
        contBot: {
          open: false
        },
        showView: false,
        offStr: 1,
        showLoading: false,
        longorderDire:true,
        shortorderDire:true,
      }
    },
    mounted() {
      let _this = this;
      this.user = JSON.parse(localStorage.getItem('user')) || '';
      this.getInitData();
      setTimeout(function () {
        _this.ip = returnCitySN["cip"];
      }, 3000);
    },
    methods: {
      getInitData: function () {
        let _this = this;
        _this.showLoading = true;
        _this.$axios.get('api/parameters/bs' + _this.user.uuid).then(function (result) {
          if (!!result) {
            _this.showLoading = false;
            _this.bot = result;
            _this.contBot = JSON.parse(JSON.stringify(result));
          } else {
            let obj = {account: _this.user.account};
            _this.$axios.post('insertBotInit', obj).then(function (result) {
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
      setBotDataFn: function (txt) {
        let _this = this;
        _this.bot.api = _this.user.apikey
        _this.bot.secret = _this.user.secret
        if ((_this.user.type != 1 && _this.user.type != 2) || _this.user.endtime <= 0) {
          _this.bot.open = false
        }
        if(!!_this.bot.shortorder){
          _this.bot.shortorder = _this.shortorderDire ? 2 : 1;
        }else {
          _this.bot.shortorder = 0;
        }
        if(!!_this.bot.longorder){
          _this.bot.longorder = _this.longorderDire ? 2 : 1;
        }else {
          _this.bot.longorder = 0;
        }
        let newBot = _this.bot;
        let contBot = _this.contBot;
        let editkey = {
          ip: _this.ip
        };
        let logs = '【用户控制台】'+txt;
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
            _this.myMessage.success('操作成功');
            _this.getInitData()
          } else {
            _this.myMessage.error(result.msg);
          }
        })
      },
      steTabFn: function (type) {
        let _this = this;
        _this.tabType = type;
      },
      setOffStrFn: function (id) {
        let _this = this;
        _this.offStr = id;
      },
      application: function (){
        let _this = this;
        let logs = '';
        if(_this.offStr == 1){
          logs = '[一键应用稳健型参数]';
          _this.bot.mmpercent=0.00035;
          _this.bot.longorder=2;
          _this.bot.longrange=30;
          _this.bot.longstop=28;
          _this.bot.shortorder=2;
          _this.bot.shortrange=30;
          _this.bot.shortstop=28;
          _this.bot.maxnanpin=28;
        }
        if(_this.offStr == 2){
          logs = '[一键应用激进型参数]';
          _this.bot.mmpercent=0.00035;
          _this.bot.longorder=2;
          _this.bot.longrange=1;
          _this.bot.longstop=5;
          _this.bot.shortorder=2;
          _this.bot.shortrange=1;
          _this.bot.shortstop=5;
          _this.bot.maxnanpin=28;
        }
        _this.setBotDataFn(logs);
      },
      openbot: function () {
        let _this = this;
        if ((_this.user.type != 1 && _this.user.type != 2) || _this.user.endtime <= 0) {
          _this.myMessage.info('您需要先充值开通后才能使用机器人');
          setTimeout(function () {
            _this.bot.open = !_this.bot.open;
          }, 300)
        } else {
          //启动机器人
          setTimeout(function () {
            _this.setBotDataFn('');
          }, 300)
        }
      },
      showTagFn() {
        let _this = this;
        let msg = '即将开放,敬请期待!';
        switch (_this.$i18n.locale) {
          case 'en-US':
            msg = 'Opening soon, please look forward to it!';
            break;
          case 'Japan':
            msg = 'もうすぐオープンですので、お楽しみに！';
            break;
          case 'Korean':
            msg = '곧 개방될 테니, 기대하세요!';
            break;
        }
        _this.myMessage.info(msg)
      }
    }
  }
</script>

<style scoped>
  .tab-content {
    background: none;
  }

  .text-field {
    margin-bottom: 1px;
    border-radius: 4px;
  }

  .form-group {
    padding-bottom: 20px;
  }

  .name-testi {
    text-align: left;
    padding-left: 0;
  }

  .active.sm-lnk {
    color: #00aecd;
  }

  .border1 {
    /*border: 1px solid #cfcfcf;*/
    padding: 20px 10px;
  }

  .box-border {
    border: 1px solid rgb(228, 228, 228);
    margin-bottom: 30px;
    height: 100%;
    transition: all 300ms;
    /*cursor: pointer;*/
    overflow: hidden;
  }

  .tab-content {
    padding: 19px 0 0;
  }

  .top-header {
    background: rgba(242, 242, 242, 1);
    color: #666;
    min-height: 47px;
    line-height: 40px;
    text-indent: 20px;
    overflow: hidden;
  }

  .bg_white.top-header {
    background: none;
  }

  .button.no-lft-mrg {
    line-height: 20px;
    padding: 5px 15px;
    margin: 5px 10px;
    text-indent: 0;
    cursor: pointer;
  }

  .apply_Box {
    padding: 20px 20px;
    overflow: hidden;
  }

  .input_outer input[type='text'], .input_outer select {
    border: rgba(0, 0, 0, 0.2) 1px solid;
    border-radius: 4px;
    -webkit-transition: all 300ms;
    transition: all 300ms;
    width: 100%;
    max-width: 320px;
    display: inline-block;
    height: 36px;
    font: 14px "microsoft yahei", Helvetica, Tahoma, Arial, "Microsoft jhengHei";
    /*vertical-align: text-top;*/
  }

  .input_outer select {
    text-indent: 10px;
  }

  .input_outer input[type='text']:focus, .input_outer select:focus {
    border: rgba(51, 171, 184, 0.8) 1px solid !important;
    -webkit-box-shadow: 2px 2px 10px rgba(51, 171, 184, 0.5);
    box-shadow: 2px 2px 10px rgba(51, 171, 184, 0.5);
  }

  .apply_Box div .txt {
    min-width: 128px;
    display: inline-block;
    text-align: right;
    padding-right: 15px;
    color: #666;
    vertical-align: text-top;
  }

  .apply_Box .box {
    /*line-height: 36px;*/
    padding: 10px;
  }

  .apply_Box select {
    line-height: 46px;
    cursor: pointer;
  }

  .tab-content1 {
    padding-left: 30px;
    margin-top: 20px;
  }

  .box-border.pd-20:hover {
    border: 1px solid rgba(0, 174, 205, 0.3) !important;
    box-shadow: 2px 2px 10px rgba(0, 174, 205, 0.3);
  }

  .w-col-10 input[type='text'] {
    width: 100%;
  }

  .name-testi {
    font-size: 12px;
    font-weight: 400;
    color: #3b4c77;
    padding-left: 12px;
    vertical-align: text-top;
  }

  .tipBox {
    display: inline-block;
    position: relative;
    width: 100%;
    max-width: 320px;
  }

  .tip_txt {
    position: absolute;
    right: 1px;
    top: 1px;
    display: block;
    padding: 0 15px;
    background: #f5f7fa;
    color: #9da099;
    border-left: 1px solid #dcdfe6;
    height: 34px;
    border-radius: 0 4px 4px 0;
    vertical-align: text-top;
    line-height: 34px;
  }

  @media screen and (max-width: 767px) {
    .apply_Box div .txt {
      text-align: left;
    }

    .name-testi {
      padding-left: 0;
    }
  }

  .fl-right.button.no-lft-mrg {
    position: relative;
  }

  .fl-right.button.no-lft-mrg.off {
    background: #ff7b00;
  }

  .fl-right.button.no-lft-mrg.off:hover {
    background: #ff0000;
  }

  .fl-right.button.no-lft-mrg input {
    width: 100%;
    height: 100%;
    display: block;
    padding: 0;
    margin: 0;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
    opacity: 0;
  }

  .toggle {
    position: relative;
    display: inline-block;
    margin: 0 auto;
    width: 60px;
    height: 19px;
    color: white;
    outline: 0;
    text-decoration: none;
    border-radius: 100px;
    /*border: 1px solid #64bd63;*/
    background-color: #64bd63;
    transition: all 500ms;
    vertical-align: middle;
  }
  .toggle.toggle--off{
    background-color: #f44336;

  }
  .toggle:active {
    background-color: #1c2429;
  }
  .toggle:hover:not(.toggle--moving):after {
    background-color: #fff;
  }
  .toggle:after {
    display: block;
    position: absolute;
    top: 1px;
    bottom: 1px;
    left: 1px;
    width: 50%;
    line-height: 17px;
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    color: white;
    background-color: #f5f7fa;
    /*border: 1px solid;*/
    -webkit-transition: all 500ms;
    transition: all 500ms;
  }

  .toggle--on:after {
    content: '限价';
    border-radius: 50px 5px 5px 50px;
    color: #66BB6A;
  }

  .toggle--off:after {
    content: '市价';
    border-radius: 5px 50px 50px 5px;
    transform: translate(100%, 0);
    color: #f44336;
    width: calc(50% - 1px);
  }

  .toggle--moving {
    background-color: #1c2429;
  }
  .toggle--moving:after {
    color: transparent;
    border-color: #435862;
    background-color: #222c31;
    transition: color 0s, transform 500ms, border-radius 500ms,background-color 500ms;
  }


</style>
