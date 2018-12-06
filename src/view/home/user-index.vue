<template>
  <div class="block">
    <vdialog :isShow="showDialog1" :options="dialogOptions1" v-on:modalResponse="modalResponse1">
      <div style="">
        <div class="col-md-12 text-center">
          <p style="font-size: 12px;font-weight: 400;margin-bottom: 0;">价格参考于火币全球站</p>
          <p style="font-size: 12px;font-weight: 400;margin-bottom: 0;">火币全球实时价格：<span style="color:#dc3545;">${{btcPriceObj.huobi.last}}</span>
          </p>
        </div>
        <div class="form-group">
          <div class="text-center">
            <img style="width: 240px;" src="/static/home/images/QR_Code/QRCode.png"/>
            <p><span style="color: rgb(15, 157, 234);">3BMEXwNSL4hZA2od3YzvD3MSFHzZohmgMR</span></p>
          </div>
        </div>
        <div class="col-md-12 text-center">
          <p style="font-size: 15px;margin-bottom: 10px;">{{user.type == 2 ? '续费' : '开通'}}版本:&nbsp;
            <select style="color:#dc3545;width: 220px;height: 24px;" v-model="openData.data_time">
              <option value="1">标准版（1000 USD ≈ {{(1000/btcPriceObj.huobi.last).toFixed(3)}}BTC）</option>
              <option value="2">专业版（2000 USD ≈ {{(2000/btcPriceObj.huobi.last).toFixed(3)}}BTC）</option>
              <option value="3">精英版（3000 USD ≈ {{(3000/btcPriceObj.huobi.last).toFixed(3)}}BTC）</option>
            </select>&nbsp;年
          </p>
          <p style="font-size: 12px;margin: -8px 0 5px;color: #a9a7a7;">备注：钱包地址只支持BTC的转入，请注意风险！</p>
        </div>
      </div>
    </vdialog>
    <vdialog :isShow="showDialog2" :options="dialogOptions2" v-on:modalResponse="modalResponse2">
      <div style="">
        <form class="form-horizontal">
          <div class="form-group">
            <label class="col-lg-3 control-label">钱包地址:</label>
            <div class="col-lg-9 form-input">
              <span style="line-height: 40px;">{{user.walletaddress || '-未设置-'}}</span>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">申请数量:</label>
            <div class="col-lg-9 form-input">
              <input type="text" v-model="putNum" id="num" class="form-control"
                     onkeyup="value=value.replace(/[^\d.]/g,'')">
              <span class="error"></span>
            </div>
          </div>
          <div class="form-group">
            <div class="col-lg-11 form-input">
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
    <!-- SUB BANNER -->
    <div class="sub-banner">
      <div class="w-container">
        <div class="w-row">
          <div class="w-col w-col-8">
            <h4 class="title-bread">{{$t('m.header.dashboard')}} <span class="sub-title-lighter">/ {{$t('m.header.bodyTitle')}}<br></span>
            </h4>
          </div>
          <div class="w-col w-col-4 col-right">
            <!--<div class="breadcrumbs">Unikue /&nbsp;Shortcodes</div>-->
          </div>
        </div>
      </div>
    </div>
    <!-- END SUB BANNER -->
    <div class="w-container">

      <div class="container-fluid">
        <div class="block-header">
          <div class="row">
            <div class="col-lg-5 col-md-8 col-sm-12">
              <h2>资产管理 <span class="font-12"> {{!!botState.created ? (new Date(botState.created).toLocaleString()) : '暂无数据'}}</span></h2>
            </div>
          </div>
        </div>

        <div class="row clearfix">
          <div class="col-12" style="padding: 0;">
            <div class="card top_report box-border">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="body bor-bottom">
                    <div class="clearfix">
                      <div class="float-left">
                        <i class="fa fa-2x fa-dollar text-col-blue"></i>
                      </div>
                      <div class="number float-right text-right">
                        <h6>持仓状态</h6>
                        <span class="font700 text-muted">持仓均价  <span class="text-col-blue">{{botState.bot_avgEntryPrice || 0}}</span></span>
                      </div>
                    </div>
                    <div class="progress progress-xs progress-transparent custom-color-blue mb-0 mt-3"
                         style="overflow: inherit;">
                      <div class="hover-bar progress-bar custom-color-red z-i-15" style="left:0;">
                        <div class="hoverBox">爆仓位：{{botState.bot_liquidationPrice || 0}}</div>
                      </div>
                      <!--:style="'width:'+ botState.new_price_width +'%'"-:data-transitiongoal="botState.avg_width"---->
                      <div class="progress-bar z-i-14" :style="'width:'+ botState.new_price_width +'%'">
                        最新价:{{botState.bot_mex_last}}
                      </div>
                      <div class="hover-bar progress-bar custom-color-green z-i-15 avgEntBox"
                           :style="'left:'+ botState.avg_width +'%;'">
                        <div class="hoverBox">均价：{{botState.bot_avgEntryPrice || 0}}</div>
                      </div>
                      <div class="hover-bar progress-bar bg-success z-i-15 avgEntBox" style="left:100%;">
                        <div class="hoverBox">止盈价：{{botState.maxRange || 0}}</div>
                      </div>
                    </div>
                    <small class="text-muted text-col-blue" style="margin-top: 20px;display: inline-block;">
                      {{botState.status}}
                    </small>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="body bor-bottom">
                    <div class="clearfix">
                      <div class="float-left">
                        <i class="fa fa-2x fa-bar-chart-o text-col-blue"></i>
                      </div>
                      <div class="number float-right text-right">
                        <h6>机器人状态</h6>
                        <span class="font700 text-muted">
                          已补仓 <span class="text-col-blue">{{botState.nanpin_count || 0}}</span> 次
                        </span>
                      </div>
                    </div>
                    <div class="progress progress-xs progress-transparent custom-color-blue mb-0 mt-3"
                         style="overflow: inherit;">
                      <div class="hover-bar progress-bar z-i-15" :style="'width: '+ botState.bot_size_width +'%'">
                        <span class="rl-text"
                              v-if="botState.bot_size_width > 20">{{'持仓量：' + (botState.bot_size || 0)}}</span>
                        <span class="rl-text" v-if="botState.bot_size_width < 20 && botState.bot_size_width >= 8">{{botState.bot_size || 0}}</span>
                        <div class="hoverBox">持仓数量：<br>{{botState.bot_size || 0}}</div>
                      </div>
                      <div class="hover-bar progress-transparent custom-color-blue z-i-14"
                           style="width: 100%;border-radius: 0;">
                        <span class="rt-text">{{'最大持仓：' + (botState.max_position_qty || 0)}}</span>
                        <div class="hoverBox" style="right: 0;left: auto;">最大持仓：{{botState.max_position_qty || 0}}</div>
                      </div>
                    </div>
                    <small class="text-muted width33">头寸：<span
                      class="text-col-blue">{{botState.new_position_qty || 0}}</span></small>
                    <small class="text-muted width33 alg-center">补仓金额：<span class="text-col-blue">{{botState.bot_nanpin}}</span>
                    </small>
                    <small class="text-muted width33 alg-right">已用杠杆：<span class="text-col-blue">{{botState.marginLeverage}}</span>
                    </small>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="body">
                    <div class="clearfix">
                      <div class="float-left">
                        <i class="fa fa-2x fa-suitcase text-col-blue"></i>
                      </div>
                      <div class="number float-right text-right">
                        <h6>资产状态</h6>
                        <span class="font700"></span>
                        <span class="font700 text-muted">可用余额  <span
                          class="text-col-blue">{{botState.bot_balance || 0}}</span></span>
                      </div>
                    </div>
                    <div class="progress progress-xs progress-transparent custom-color-blue mb-0 mt-3"
                         style="overflow: inherit;">
                      <span class="rt-text">Max</span>
                      <div class="hover-bar progress-bar custom-color-blue z-i-15"
                           :style="'width: '+ botState.pri_width +'%'">
                        <span class="rl-text">{{'本金：' + (botState.user_principal || 0)}}</span>
                        <div class="hoverBox" style="right: auto;left: auto;">本金：{{botState.user_principal || 0}}</div>
                      </div>
                      <div class="hover-bar progress-bar bg-success z-i-14"
                           :style="'width: '+ botState.lirun_width +'%'">
                        <span class="rt-text" v-if="botState.bot_lirun_occ > 5">{{botState.bot_lirun}}</span>
                        <div class="hoverBox" style="right: 0;left: auto;">盈亏：{{botState.bot_lirun}}</div>
                      </div>
                    </div>
                    <small class="text-muted width33">充币合计：<span class="text-col-blue">{{botState.bot_prevDeposited || 0}}</span>
                    </small>
                    <small class="text-muted width33 alg-center">提币合计：<span class="text-col-blue">{{botState.bot_prevWithdrawn || 0}}</span>
                    </small>
                    <small class="text-muted width33 alg-right">钱包余额：<span class="text-col-blue">{{botState.bot_amount || 0}}</span>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--</div>-->
      <!--</div>-->
      <div id="main-content">
        <div class="container-fluid" style="padding: 0;">

          <div class="row clearfix">
            <div class="col-lg-3 col-md-3 col-sm-6">
              <div id="Summary1" class="carousel slide" data-ride="carousel" data-interval="3000">
                <div class="carousel-inner">
                  <div class="carousel-item active ">
                    <div class="card bg-success text-center">
                      <div class="body box-border" style="margin-bottom: 0;">
                        <input type="text" class="knob2" :value="countProfit / 0.1 >= 1 ? 100 : parseInt(countProfit / 0.1 * 100) + '%'" data-width="69" data-height="69"
                               data-thickness="0.07" data-bgColor="#2e9a4a" data-fgColor="#ffffff" readonly>
                        <h4 class="font-22 text-col-white mt-4">
                          <small class="font-12 d-block mb-1"><i class="fa fa-caret-up"></i> {{countProfit}} btc</small>
                          我的返佣
                          <a class="d-block font-13 mt-1 weak_btn" @click="showPrompPut()" v-if="countProfit >= 0.1">立即提现</a>
                          <span class="d-block font-13 mt-1" v-if="countProfit < 0.1">不可提现</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card bg-warning text-center">
                      <div class="body box-border" style="margin-bottom: 0;">
                        <input type="text" class="knobInit2" :value="bonusBaseMonthPro +'%'" data-width="69" data-height="69"
                               data-thickness="0.07" data-bgColor="#e8a70c" data-fgColor="#ffffff" readonly>
                        <h4 class="font-22 text-col-white mt-4">
                          <small class="font-12 d-block mb-1"><i class="fa fa-caret-up"></i> {{bonusBaseMonth}} btc</small>
                          应支付分红
                          <span class="d-block font-13 mt-1" v-if="bonusBaseMonthPro < 30">无需支付</span>
                          <a class="d-block font-13 mt-1 weak_btn" @click="showPrompPut3()" v-if="bonusBaseMonthPro > 30">立即支付</a>
                          <!--<span class="d-block font-13 mt-1">立即支付</span>-->
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
              <div id="Summary2" class="carousel slide" data-ride="carousel" data-interval="3000">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="card text-center">
                      <div class="body box-border" style="margin-bottom: 0;border-color: #fafafa;">
                        <input type="text" class="knobInit2" :value="parseInt(countData.countPer) + '%'" data-width="69" data-height="69"
                               data-thickness="0.07" data-bgColor="#eceeef" data-fgColor="#2e9a4a" readonly>
                        <h4 class="font-22 mt-4">
                          <small class="font-12 d-block mb-1"><i class="fa fa-caret-up"></i> {{countData.payCount}}</small>
                          付费会员
                          <span class="d-block font-13 mt-1">付费占比</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card bg-dark text-center">
                      <div class="body box-border" style="margin-bottom: 0;">
                        <input type="text" class="knobInit2" :value="parseInt(countData.apiCount / (!countData.count ? 1 : countData.count) * 100) + '%'" data-width="69" data-height="69"
                               data-thickness="0.07" data-bgColor="#434b52" data-fgColor="#2e9a4a" readonly>
                        <h4 class="font-22 text-col-white mt-4">
                          <small class="font-12 d-block mb-1"><i class="fa fa-caret-up"></i> {{countData.apiCount}}</small>
                          绑定API
                          <span class="d-block font-13 mt-1">绑定比例</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="card text-center box-border">
                <div class="header">
                  <h2>{{user.globalpartners == 0 ? '团队状态' : '全球合伙人'}}</h2>
                </div>
                <div class="body pt-0">
                  <div class="row">
                    <div class="col-12 m-b-15">
                      <h1><i class="fa fa-user"></i></h1>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <h4 class="font-22 text-col-green font-weight-bold">
                        <small class="font-12 text-col-dark d-block m-b-10">付费会员数</small>
                        {{countData.payCount}}
                      </h4>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <h4 class="font-22 text-col-blue font-weight-bold">
                        <small class="font-12 text-col-dark d-block m-b-10">邀请总人数</small>
                        {{countData.count}}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row clearfix">
            <div class="col-lg-8 col-md-12">
              <div class="card Sales_Overview box-border waitMe_container">
                <div class="header">
                  <h2>收益走势</h2>
                  <ul class="header-dropdown">
                    <li><a href="javascript:void(0);" @click="getLineDataFn" data-loading-effect="pulse"><i
                      class="fa fa-refresh"></i></a></li>
                    <!--<li class="dropdown">-->
                      <!--<a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button"-->
                         <!--aria-haspopup="true" aria-expanded="false"></a>-->
                      <!--<ul class="dropdown-menu dropdown-menu-right animated bounceIn">-->
                        <!--<li><a href="javascript:void(0);">一天</a></li>-->
                        <!--<li><a href="javascript:void(0);">7 天</a></li>-->
                        <!--<li><a href="javascript:void(0);">30 天</a></li>-->
                      <!--</ul>-->
                    <!--</li>-->
                  </ul>
                </div>
                <div class="body" style="padding-top: 0;">
                  <!--<div id="Sales_Overview" class="ct-chart"></div>-->
                  <!--<div id="myChartIndex" :style="{width: '120%', height: '260px'}"></div>-->
                  <div id="myChartIndex" style="max-width: 708px; width: 100%; height: 415px;"></div>
                  <div class="body xl-slategray text-center">
                    <div class="row clearfix">
                      <div class="col-lg-4 col-md-4">
                        <h2 class="font700">${{btcPriceObj.huobi.last}}</h2>
                        <small>{{btcPriceObj.huobi.up}}% <i class="fa"
                                                            :class="btcPriceObj.huobi.up > 0 ? 'fa-level-up text-success' : 'fa-level-down text-danger'"></i>
                          {{btcPriceObj.huobi.platFromName}}
                        </small>
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <h2 class="font700">${{btcPriceObj.bian.last}}</h2>
                        <small>{{btcPriceObj.bian.up}}% <i class="fa"
                                                           :class="btcPriceObj.bian.up > 0 ? 'fa-level-up text-success' : 'fa-level-down text-danger'"></i>
                          {{btcPriceObj.bian.platFromName}}
                        </small>
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <h2 class="font700">${{btcPriceObj.OKEX.last}}</h2>
                        <small>{{btcPriceObj.OKEX.up}}% <i class="fa"
                                                           :class="btcPriceObj.OKEX.up > 0 ? 'fa-level-up text-success' : 'fa-level-down text-danger'"></i>
                          {{btcPriceObj.OKEX.platFromName}}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="waitMe" v-show="LineLoading" data-waitme_id="411"
                     style="background: rgba(255, 255, 255, 0.9);">
                  <div class="waitMe_content vertical" style="margin-top: -34.5px;">
                    <div class="waitMe_progress pulse" style="">
                      <div class="waitMe_progress_elem1" style="border-color:#555"></div>
                    </div>
                    <div class="waitMe_text" style="color:#555;">Loading...</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="card box-border">
                <div class="header">
                  <h2 class="text-center">我的团队</h2>
                  <ul class="header-dropdown">
                    <li class="dropdown">
                      <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button"
                         aria-haspopup="true" aria-expanded="false"></a>
                      <ul class="dropdown-menu dropdown-menu-right animated bounceIn">
                        <li><a href="javascript:void(0);" @click="copyCodeFn(user.Invitcode,0)">复制邀请码</a></li>
                        <li><a href="javascript:void(0);" @click="copyCodeFn(user.Invitcode,1)">复制邀请链接</a></li>
                        <li><a href="javascript:void(0);" @click="copyQrCodeFn()">生成二维码</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="body">
                  <div class="row text-center">
                    <div class="col-6 border-right border-bottom pb-4 pt-4">
                      <!--<div id="Traffic1" class="carousel vert slide" data-ride="carousel" data-interval="3000">-->
                      <div id="Traffic1" class="carousel vert slide">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <label class="mb-0">团队等级</label>
                            <h4 class="font-20 font-weight-bold text-primary" style="line-height: 35px;">{{user.levelName}}</h4>
                          </div>
                          <!--<div class="carousel-item">-->
                          <!--<label class="mb-0">New User</label>-->
                          <!--<h4 class="font-30 font-weight-bold text-success">7,326</h4>-->
                          <!--</div>-->
                        </div>
                      </div>
                    </div>
                    <div class="col-6 border-bottom pb-4 pt-4">
                      <!--<div id="Traffic11" class="carousel vert slide" data-ride="carousel" data-interval="3000">-->
                      <div id="Traffic11" class="carousel vert slide">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <label class="mb-0">邀请码</label>
                            <h4 class="font-20 font-weight-bold text-warning" style="line-height: 35px;">
                              {{user.Invitcode}}</h4>
                          </div>
                          <!--<div class="carousel-item">-->
                          <!--<label class="mb-0">Missed Chats</label>-->
                          <!--<h4 class="font-30 font-weight-bold text-danger">73</h4>-->
                          <!--</div>-->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="body">
                  <div class="form-group">
                    <label class="d-block">{{user.level != 3 ? ('晋级' + user.upLevelName) : '已满级'}}
                      <span class="float-right" v-if="user.level != 3"> 团队机器人总量 ({{countData.payCount}}/{{user.upBot}})</span></label>
                    <div class="progress" v-if="user.level != 3">
                      <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20"
                           aria-valuemin="0" aria-valuemax="100" :style="'width: '+ parseInt(countData.payCount / user.upBot * 100) +'%;'"></div>
                    </div>
                    <div class="progress" v-if="user.level >= 3">
                      <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20"
                           aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="d-block">{{user.level != 3 ? ('晋级' + user.upLevelName) : '已满级'}}
                      <span class="float-right" v-if="user.level != 3"> 直推机器人 ({{countData.directCount}}/{{user.upDirect}})</span></label>
                    <div class="progress" v-if="user.level != 3">
                      <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
                           aria-valuemin="0" aria-valuemax="100" :style="'width: '+ parseInt(countData.directCount / user.upDirect * 100) +'%;'"></div>
                    </div>
                    <div class="progress" v-if="user.level >= 3">
                      <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20"
                           aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="d-block">{{user.level != 3 ? ('晋级' + user.upLevelName) : '已满级'}}
                      <span class="float-right" v-if="user.level != 3"> {{user.levelName}}成员 ({{countData.satUser}}/{{user.upLeaguer}})</span></label>
                    <div class="progress" v-if="user.level != 3">
                      <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100"
                           aria-valuemin="0" aria-valuemax="100" :style="'width: '+ parseInt(countData.satUser / user.upLeaguer * 100) +'%;'"></div>
                    </div>
                    <div class="progress" v-if="user.level >= 3">
                      <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20"
                           aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                    </div>
                  </div>
                  <div class="header" style="padding: 12px 0;">
                    <h2 class="text-center">会员信息</h2>
                  </div>
                  <div class="form-group">
                    <label class="d-block">我的令牌 <span class="float-right"></span></label>
                    <div class="progress1">
                      <span class="font-12">{{user.token}}</span>
                      <span><a class="btn-min btn-min-primary fl-right" @click="copyCodeFn(user.token,0)">复制</a></span>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="d-block">会员剩余时间:
                      <span class="font-12">{{endTimeTxt}}</span>
                      <span class="float-right"> ({{parseInt((endTime / 31536000000) * 100)}}%)</span>
                    </label>
                    <div class="progress">
                      <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0"
                           aria-valuemin="0" aria-valuemax="100" style="padding-right: 0;" :style="'width: '+ parseInt((endTime / 31536000000) * 100) +'%;'"></div>
                    </div>
                  </div>
                  <div class="form-group">
                    <!--<label class="d-block"><span class="float-right"></span></label>-->
                    <div class="progress1" style="text-align: center;">
                      <a class="w-button button no-margin" href="javascript:;" @click="showPrompPut1"
                         style="color: #FFFFFF;margin: 0;">{{user.type == 2 ? '续费' : '开通'}}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="main-content2">
            <div class="container-fluid">

              <div class="row clearfix">
                <div class="col-lg-12 col-md-12" style="padding: 0">
                  <div class="card waitMe_container">
                    <div class="header">
                      <h2><strong>交易记录</strong>
                        <small>资金变化收益率</small>
                      </h2>
                      <ul class="header-dropdown">
                        <li><a href="javascript:void(0);" @click="initRecDataFn" data-loading-effect="pulse"><i
                          class="fa fa-refresh"></i></a></li>
                        <li><a href="javascript:void(0);" class="full-screen"><i class="fa fa-expand"></i></a></li>
                      </ul>
                    </div>
                    <div class="body">
                      <!--<div class="table-responsive">-->
                      <div class="block-content">
                        <div style="min-height: 370px;">
                          <table class="table table-striped table-bordered">
                            <thead>
                            <tr>
                              <th>时间</th>
                              <th>变化金额</th>
                              <th>收益率</th>
                              <th>余额</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(item,index) in recordListData" :key="item.id"
                                v-if="index < recordListData.length - 1">
                              <td>{{item.day}}</td>
                              <td>{{(item.bot_change_num)}}</td>
                              <td>{{((item.bot_change_num / item.bot_balance * 100) || 0).toFixed(2)}} %</td>
                              <td>{{item.bot_balance}}</td>
                            </tr>
                            <tr v-if="recordListData.length <= 0">
                              <td colspan="4" style="text-align: center">暂无记录</td>
                            </tr>
                            </tbody>
                          </table>

                        </div>
                      </div>
                      <pageBox class="pull-right" :pagination="pagination"
                               v-on:setPageData="pagesFn($event)"></pageBox>
                    </div>
                    <div class="waitMe" v-show="ListLoading" data-waitme_id="411"
                         style="background: rgba(255, 255, 255, 0.9);">
                      <div class="waitMe_content vertical" style="margin-top: -34.5px;">
                        <div class="waitMe_progress pulse" style="">
                          <div class="waitMe_progress_elem1" style="border-color:#555"></div>
                        </div>
                        <div class="waitMe_text" style="color:#555;">Loading...</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" id="preview" tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" class="fa fa-close"></span></button>-->
        <div class="modal-content">
          <div class="modal-body padding-5 text-center qrCodeBg" :class="!qrCodeClass ? 'bg-two' : 'bg-three'">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!--<script src="../../../static/index/js/libscripts.bundle.js"></script>-->
<script>
  import pageBox from "../../components/com-pagination";
  import vdialog from "../../components/com-dialog";
  import QRCode from 'qrcodejs2'

  export default {
    components: {
      pageBox,
      vdialog
    },
    data: function () {
      return {
        countProfit: 0,
        user: {},
        botState: {},
        recordData: {},
        recordListData: {},
        recordChartData: {},
        bonusBaseMonth: 0,
        bonusBaseMonthPro: 0,
        pagination: {//分页参数
          pageIndex: 1,
          pageSize: 9,
          startCount: 0,
          totalCount: 0,
          pageCount: 0,
        },
        dialogOptions1: {//弹窗配置项
          width: '450',//弹窗宽度
          title: '购买会员服务',
          hasBtn: true, //是否需要确定按钮，默认没有确认按钮
          hasBtnTxt: '完成转账',
          closeBtn: true //是否需要关闭按钮，默认没有关闭按钮
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
        interVal: '',
        interTimeVal: '',
        endTime: 0,
        endTimeTxt: '00:00:00',
        LineLoading: false,
        ListLoading: false,
        btcPriceObj: {
          huobi: {},
          bian: {},
          OKEX: {}
        },
        qrCodeClass: false,
        showDialog1: false,
        showDialog2: false,
        showDialog3: false,
        putNum: 0,
        openData: {
          price: '',
          data_time: '2'
        },
        countData: {
          payCount: 0,//付费用户
          apiCount: 0,//绑定API用户
          count: 0,//邀请统计
          directCount: 0,//直接分享用户数量
          satUser: 0,//当前等级晋级需要的成员等级已满足数统计
          level0: 0,//普通
          level1: 0,//新手
          level2: 0,//高手
          level3: 0,//大师
          level4: 0,//传奇
          level5: 0//全球合伙人
        },
      }
    },
    mounted() {
      let _this = this;
      _this.user = JSON.parse(localStorage.getItem('user')) || '';
      if(_this.user.level >= 5){
        _this.$router.push('/admin');
        _this.$router.go(0);
        return;
      }
      switch (_this.user.level){
        case '-1':
          _this.user['levelName'] = '普通';
          _this.user['upLevelName'] = '新手';
          _this.user['upDirect'] = 3;//直推要求
          _this.user['upBot'] = 11;//开通要求
          _this.user['upLeaguer'] = 1;//成员要求
          break;
        case '0':
          _this.user['levelName'] = '新手';
          _this.user['upLevelName'] = '高手';
          _this.user['upDirect'] = 5;//直推要求
          _this.user['upBot'] = 35;//开通要求
          _this.user['upLeaguer'] = 3;//成员要求
          break;
        case '1':
          _this.user['levelName'] = '高手';
          _this.user['upLevelName'] = '大师';
          _this.user['upDirect'] = 7;//直推要求
          _this.user['upBot'] = 125;//开通要求
          _this.user['upLeaguer'] = 3;//成员要求
          break;
        case '2':
          _this.user['levelName'] = '大师';
          _this.user['upLevelName'] = '传奇';
          _this.user['upDirect'] = 10;//直推要求
          _this.user['upBot'] = 400;//开通要求
          _this.user['upLeaguer'] = 3;//成员要求
          break;
        case '3':
          _this.user['levelName'] = '传奇';
          break;
      }

      _this.bonusBaseMonth = _this.common.initNumFn(((_this.user.bot_lirun > 0 ? (_this.user.bot_lirun - _this.user.bonus_base) : 0) * 0.3),4);//计算应付分红
      let bonusBaseNum = _this.common.initNumFn((_this.user.bot_lirun > 0 ? (_this.user.bot_lirun - _this.user.bonus_base) : 0),4);//计算应付分红
      _this.bonusBaseMonthPro = (bonusBaseNum / _this.user.bonus_ratio * 100).toFixed(1); //到达强制支付分红占比
      if(_this.bonusBaseMonthPro < 1 && _this.bonusBaseMonthPro > 0){
        _this.bonusBaseMonthPro = 1;
      }
      if(_this.bonusBaseMonthPro > 100){
        _this.bonusBaseMonthPro = 100;
      }
      // _this.putNum = _this.bonusBaseMonth;


      // _this.initNumFn(_this.user.user_principal, function (num) {
      //   _this.$set(_this.user, 'user_principal', num)
      // });
      _this.initData();
      _this.initRecDataFn();
      _this.interVal = setInterval(function () {
        _this.$set(_this.botState, 'new_price_width', 0);
        _this.$set(_this.botState, 'avg_width', 0);
        _this.$set(_this.botState, 'bot_size_width', 0);
        _this.$set(_this.botState, 'pri_width', 0);
        _this.$set(_this.botState, 'lirun_width', 0);
        _this.initData()
      }, 20000);
      _this.endTime = _this.user.endtime;
      _this.interTimeVal = setInterval(function () {
          if (_this.user.endtime < 0) {
            clearInterval(_this.interTimeVal);
          }
          _this.endTime = parseInt(_this.endTime) - 1000;
          _this.initDateTxtFn();
      }, 1000);
      _this.init();
      _this.getLineDataFn();
      _this.initPriceData();
      require("../../../static/index/js/index.js");
      _this.getInitDataCount();
    },
    methods: {
      getInitDataCount () {
        let _this = this;
        _this.$axios.post('getcodeuser', {'Invitcode': _this.user.Invitcode}).then(function (result) {
          if (result.status == 0) {
            let data = result.data,
              obj = {
                payCount: 0,//付费用户
                apiCount: 0,//绑定API用户
                directCount: 0,//直接分享用户数量
                count: 0,//邀请统计
                satUser: 0,//当前等级晋级需要的成员等级已满足数统计
                level0: 0,//普通
                level1: 0,//新手
                level2: 0,//高手
                level3: 0,//大师
                level4: 0,//传奇
                level5: 0//全球合伙人
              };
            for (let i = 0; i < data.child.length; i++) {
              obj.count += 1;
              if (data.child[i].type == 2) {
                obj.payCount += 1;
                obj.directCount += 1;
              }
              if (!!data.child[i].apikey) {
                obj.apiCount += 1
              }
              switch (data.child[i].level) {
                case '-1':
                  obj.level0 += 1;
                  break;
                case '0':
                  obj.level1 += 1;
                  break;
                case '1':
                  obj.level2 += 1;
                  break;
                case '2':
                  obj.level3 += 1;
                  break;
                case '3':
                  obj.level4 += 1;
                  break;
              }
              if (data.child[i].globalpartners == 1) {
                obj.level5 += 1;
              }
              _this.initDataCount(obj, data.child[i].child, function (objs) {
                obj = objs;
                // list.push(nums)
              })
            }
            obj.countPer = ((obj.payCount / (!obj.count ? 1 : obj.count)) * 100).toFixed(1);  //支付比例
            switch (_this.user.level){//当前等级晋级需要的成员等级已满足数统计
              case '-1':
                obj.satUser = 1;
                break;
              case '0':
                obj.satUser = obj.level1;
                break;
              case '1':
                obj.satUser = obj.level2;
                break;
              case '2':
                obj.satUser = obj.level3;
                break;
              case '3':
                obj.satUser = 3;
                break;
            }
            _this.countData = obj;
            setTimeout(function () {
              _this.initHtmlViewFn()
            },200);

          } else {
            _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        });

        //获取账户可提现余额
        _this.$axios.get('getPutBalance?account=' + _this.user.account).then(function (result) {
          if (result.status == 0) {
            let obj = {
              uuid: _this.user.uuid,
              account: _this.user.account,
              Invitdcode: _this.user.Invitdcode,
              level: _this.user.level,
              countProfit: 0,//总收益
              countInBonus: 0,//总邀请分红
              countPrBonus: 0,//总收益分红
              countMonth: 0,//当月总收益
              countMoInBonus: 0,//当月邀请收益
              countMoPrBonus: 0,//当月分红收益
              countPut: 0,//总提现
              countMoPut: 0,//当月提现
            };
            // if (result.data.length <= 0) {
              // _this.myMessage.info(result.msg);
              // return;
            // }
            result.data.forEach(item => {
              switch (item.type) {
                case '1'://邀请分红数据
                  obj.countInBonus = parseFloat(obj.countInBonus) + parseFloat(item.bot_change_num);
                  obj.countInBonus = _this.common.initNumFn(obj.countInBonus,6);
                  break;
                case '2'://团队分红数据
                  obj.countPrBonus = (parseFloat(obj.countPrBonus) + parseFloat(item.bot_change_num));
                  obj.countPrBonus = _this.common.initNumFn(obj.countPrBonus,6);
                  break;
                case '5'://提现金额
                  obj.countPut = parseFloat(obj.countPut) + parseFloat(item.bot_change_num);
                  break;
              }
            });
            _this.countProfit = parseFloat(obj.countInBonus) + parseFloat(obj.countPrBonus) + parseFloat(obj.countPut);
            _this.countProfit = _this.common.initNumFn(_this.countProfit,4);
            _this.putNum = _this.countProfit;
            setTimeout(function () {
              $('.knob2').knob({
                'format' : function (value) {
                  return value + '%';
                }
              });
            },200);
          } else {
            // _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },
      initDataCount: function (obj, data, callback) {//递归查询下级的下级
        let length = data.length;
        let _this = this;
        if (length > 0) {
          data.forEach(function (item) {
            if (item.type == 2) {
              obj.payCount += 1;
            }
            if (!!item.apikey) {
              obj.apiCount += 1;
            }
            switch (item.level) {
              case '-1':
                obj.level0 += 1;
                break;
              case '0':
                obj.level1 += 1;
                break;
              case '1':
                obj.level2 += 1;
                break;
              case '2':
                obj.level3 += 1;
                break;
              case '3':
                obj.level4 += 1;
                break;
            }
            if (item.globalpartners == 1) {
              obj.level5 += 1;
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
      initData: function () {
        let _this = this;
        _this.$axios.get('getBot/state?account=' + _this.user.account).then(function (result) {//获取机器人状态信息
          if (result.status == 0) {
            result.data.bot_balance = _this.common.initNumFn(result.data.bot_balance || 0, 5);
            result.data.bot_prevWithdrawn = _this.common.initNumFn(result.data.bot_prevWithdrawn || 0, 4);
            result.data.bot_prevDeposited = _this.common.initNumFn(result.data.bot_prevDeposited || 0, 4);
            result.data.bot_amount = _this.common.initNumFn(result.data.bot_amount || 0, 4);

            result.data.user_principal = (result.data.bot_prevDeposited - result.data.bot_prevWithdrawn);//本金
            result.data.bot_lirun = _this.common.initNumFn(result.data.bot_lirun || 0, 4);//盈亏
            result.data.bot_lirun_occ = result.data.bot_lirun / result.data.user_principal;//盈亏占比
            //计算盈利占比
            let occ = result.data.bot_lirun_occ;
            result.data.pri_width = occ < 50 ? 75 : 40;
            result.data.lirun_width = occ < 50 ? 75 + (occ < 5 ? 2 : occ) : 40 + occ;
            result.data.bot_size = Math.abs(result.data.bot_size)
            //持仓占比
            result.data.bot_size_width = (result.data.max_position_qty / result.data.bot_size);
            //持仓方向  LONG多军  SHORT空军
            if (result.data.bot_side == 'SHORT') {
              if (result.data.bot_mex_last < 10000 && result.data.bot_mex_last > 1000) {//千单位换算
                result.data.maxRange = parseFloat(result.data.bot_avgEntryPrice).toFixed(1) - parseInt(result.data.shortrange);//止盈价格
                let bot_mex_last = result.data.bot_mex_last;
                let avg_width = result.data.bot_avgEntryPrice;
                //计算反差价格
                bot_mex_last = result.data.maxRange - (bot_mex_last - result.data.maxRange);//取得最新价
                result.data.new_price_width = parseInt(bot_mex_last / result.data.maxRange * 1000);//最新价格反差价格比、
                result.data.new_price_width = (result.data.new_price_width + '').substr(1, 2);//最新价格反差价格比
                // result.data.new_price_width = result.data.new_price_width - 2;
                if (bot_mex_last > avg_width) {
                  result.data.new_price_width = result.data.new_price_width - 2;
                }

                avg_width = result.data.maxRange - (avg_width - result.data.maxRange);//取得均价
                result.data.avg_width = parseInt(avg_width / result.data.maxRange * 1000);//均价格反差价格比
                result.data.avg_width = (result.data.avg_width + '').substr(1, 2);//均价格反差价格比
                result.data.avg_width = result.data.avg_width - 2;
              }
            }
            else {
              let bot_mex_last = result.data.bot_mex_last;//现价
              let avg_width = result.data.bot_avgEntryPrice;//均价
              result.data.maxRange = parseFloat(result.data.bot_avgEntryPrice) + parseInt(result.data.longrange);//止盈价格

              //计算反差价格
              // bot_mex_last = result.data.maxRange - (bot_mex_last - result.data.maxRange);//取得最新价
              result.data.new_price_width = parseInt(bot_mex_last / result.data.maxRange * 1000);//最新价格反差价格比、
              if (result.data.new_price_width >= 1000) {
                result.data.new_price_width = 999
              }
              result.data.new_price_width = (result.data.new_price_width + '').substr(1, 2);//最新价格反差价格比
              if (bot_mex_last < avg_width) {
                result.data.new_price_width = result.data.new_price_width - 2;
              }
              result.data.avg_width = parseInt(avg_width / result.data.maxRange * 1000);//均价格反差价格比
              result.data.avg_width = (result.data.avg_width + '').substr(1, 2);//均价格反差价格比
              result.data.avg_width = result.data.avg_width - 2;
            }

            _this.botState = result.data;
            setTimeout(function () {
              _this.initBoxLoadingFn();
            }, 200)
          } else {
            _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        });
      },
      getLineDataFn() {
        let _this = this;
        _this.LineLoading = !_this.LineLoading;
        _this.$axios.get('getaccrecchart/' + _this.user.account + '/24').then(function (result) {//获取当前用户资金状况绘制折线图
          if (result.status == 0) {
            _this.recordChartData = result.data;
            _this.rickshaw()
          } else {
            _this.myMessage.error(result.msg);
            _this.LineLoading = !_this.LineLoading;
          }
        }).catch(function (err) {
          _this.LineLoading = !_this.LineLoading;
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        });
      },
      initPriceData() {
        let _this = this;
        $.ajax({
          url: 'https://apibtc.btc123.com/v1/index/getNewIndexMarket?sign=BTC&type=1',
          type: "get",//请求类型
          success: function (data) {
            if (data.code == 1) {
              let list = data.data[0].ticker;
              for (let i in list) {
                if (list[i].platFromSign == 'HUOBIPRO') {
                  _this.btcPriceObj.huobi = list[i];
                  _this.btcPriceObj.huobi.up = (list[i].last / (_this.botState.bot_mex_last || 0) * 100 - 100).toFixed(2)
                }
                if (list[i].platFromSign == 'OKEX') {
                  _this.btcPriceObj.OKEX = list[i];
                  _this.btcPriceObj.OKEX.up = (list[i].last / (_this.botState.bot_mex_last || 0) * 100 - 100).toFixed(2)
                }
                if (list[i].platFromSign == 'BINANCE') {
                  _this.btcPriceObj.bian = list[i];
                  _this.btcPriceObj.bian.up = (list[i].last / (_this.botState.bot_mex_last || 0) * 100 - 100).toFixed(2)
                }
              }
            }
            _this.btcNewTime = 60;
            setTimeout(function () {
              _this.initPriceData();
            }, 10000)
          }
        })
      },//获取动态价格
      initRecDataFn: function () {
        let _this = this;
        _this.ListLoading = !_this.ListLoading;
        _this.$axios.get('getaccreclist/' + _this.user.account + '/' + _this.pagination.pageIndex + '/' + _this.pagination.pageSize).then(function (result) {//获取当前交易记录
          if (result.status == 0) {
            let list = result.data;
            for (let i = 0; i < list.length; i++) {
              let data = list[i];
              if (i < list.length - 1) {
                data.bot_change_num = data.bot_balance - list[i + 1].bot_balance;
                data.bot_change_num = _this.common.initNumFn(data.bot_change_num, 6);
                data.bot_balance = _this.common.initNumFn(data.bot_balance, 6);
              } else {
                data.bot_change_num = _this.common.initNumFn(data.bot_balance, 6);
                data.bot_balance = _this.common.initNumFn(data.bot_balance, 6);
                // data.bot_change_num = data.bot_balance
              }
              list[i] = data;
            }
            _this.recordListData = list
            _this.pagination.totalCount = result.count;
            _this.pagination.pageCount = Math.ceil(_this.pagination.totalCount / _this.pagination.pageSize);
            _this.ListLoading = !_this.ListLoading;
          } else {
            _this.myMessage.error(result.msg);
            _this.ListLoading = !_this.ListLoading;
          }
        }).catch(function (err) {
          _this.ListLoading = !_this.ListLoading;
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },
      rickshaw: function () {//绘制图表---绘制图表
        let _this = this;
        let myChart = this.$echarts.init(document.getElementById('myChartIndex'));
        var data1 = []
        var data2 = []
        let list = _this.recordChartData;
        list.forEach(function (item) {
          let txt = item.hour + ':00';
          data1.push(txt)
          data2.push(parseFloat(item.bot_balance).toFixed(6))
        });
        if (data1.length == 0 && data2.length == 0) {
          data1 = [0]
          data2 = [0]
        }
        let max = Math.max.apply(null, data2);
        let min = Math.min.apply(null, data2);
        min = min - min * 0.0005;
        max = max + max * 0.0005;
        max = _this.common.initNumFn(max, 5);
        min = _this.common.initNumFn(min, 5);
        myChart.setOption({
          title: {text: ''},
          tooltip: {
            trigger: 'none',
            axisPointer: {
              type: 'cross'
            }
          },
          xAxis: [{
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: '#675bba'
              }
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return '资产 ' + params.value
                    + (params.seriesData.length ? '点：' + params.seriesData[0].data : '');
                }
              }
            },
            data: data1
          }],
          yAxis: [{
            min: min,
            max: max,
            axisLine: {
              onZero: false,
              lineStyle: {
                color: '#675bba'
              }
            }
          }],
          series: [
            {
              name: '资产:',
              color: '#06b07c',
              type: 'line',
              data: data2
            }
          ]
        });
        _this.LineLoading = !_this.LineLoading;
      },
      init: function () {
        // this.controlHeight();
        $(".app-feature-gallery > li").on("click", function () {
          var gallery = $(this).parents(".app-feature-gallery");
          $(this).appendTo(gallery);
        });
      },
      copyCodeFn: function (code, type) {
        let _this = this;
        let txt = '';
        if (type == 1) {
          txt = window.location.origin + '/register?code=' + code
        } else {
          txt = code;
        }
        // let txt = _this.InLink + ''+ code
        $('#biao1').text(txt);
        var Url2 = document.getElementById('biao1').innerText;
        var oInput = document.createElement('input');
        oInput.value = Url2;
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象
        document.execCommand('Copy'); // 执行浏览器复制命令
        oInput.className = 'oInput';
        oInput.style.display = 'none';
        _this.myMessage.success('复制成功');
      },
      initBoxLoadingFn: function () {
        $('.progress .progress-bar').progressbar({
          'max': 1000
        });
      },
      pagesFn: function (e) { //分页调用方法
        let _this = this;
        _this.pagination = e;
        _this.initRecDataFn();
      },
      copyQrCodeFn() {
        let _this = this;
        let txt = window.location.origin + '/register?code=' + this.user.Invitcode;
        // let txt = this.user.Invitcode;
        // txt = txt.split('://')[1]
        let preview = $("#preview"),
          dialog = preview.find(".modal-dialog");
        dialog.removeClass("modal-lg modal-sm modal-fw");
        let qrcode = '';
        preview.modal("show");
        let inint = (Math.floor(Math.random() * 10) % 2);
        _this.qrCodeClass = !inint;
        let widths = 100;
        if (!!inint) {
          widths = 80;
          $(".modal-body.padding-5.text-center").html('<div class="qrCodeBg"><div id="QRCode" style="width: 100px;height: 100px;margin: 20px 0 0 300px;padding: 4px;border: 1px solid rgba(255, 0, 3, 0.33);display: none;"></div></div>');
        } else {
          $(".modal-body.padding-5.text-center").html('<div class="qrCodeBg"><div id="QRCode" style="width: 100px;height: 100px;margin: 215px 0 0 110px;padding: 4px;border: 1px solid rgba(18, 104, 171, 0.24);display: none;"></div></div>');
        }
        setTimeout(function () {
          qrcode = new QRCode('QRCode', {
            // render : "canvas",
            width: 100,
            height: 100, // 高度
            text: txt, // 二维码内容
            // colorLight: 'rgb(71, 150, 163)',//背景色
            // colorDark: '#fff'//前景色
          });
          // setTimeout(function () {
          //   $('#QRCode').show();
          // }, 200);
        }, 200);
        setTimeout(function () {
          $('#QRCode').show();
        }, 250);

        return false;
      },
      showPrompPut1() {
        this.showDialog1 = true;
        window.scrollTo(0, 0)
      },
      modalResponse1(json) {
        let _this = this
        if (json.type === 'close') {
          _this.showDialog1 = false;
        } else {//完成转账
          let obj = {
            account: _this.user.account,
            data_time: _this.openData.data_time,
            price: _this.openData.data_time == 1 ? (1000 / _this.btcPriceObj.huobi.last).toFixed(3) : (_this.openData.data_time == 2 ? (2000 / _this.btcPriceObj.huobi.last).toFixed(3) : (3000 / _this.btcPriceObj.huobi.last).toFixed(3)),
            desc: ''
          }
          window.open('/information');
          _this.$axios.post('renew', obj).then(function (result) {
            if (result.status == 0) {
              _this.myMessage.success('提交成功!');
              _this.showDialog1 = false;
            } else {
              _this.myMessage.error(result.msg);
            }
          }).catch(function (err) {
            _this.myMessage.error('网络请求发生异常,请稍后再试...');
          })
        }
      },
      showPrompPut() {
        let _this = this
        if (!!_this.user.walletaddress) {
          _this.showDialog2 = true;
          window.scrollTo(0, 0)
        } else {
          _this.myMessage.info('请先添加你的钱包地址!');
        }
      },
      showPrompPut3() {
        this.showDialog3 = true;
        window.scrollTo(0, 0)
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
            num: _this.putNum,
          };
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
          window.open('/information?type=bonus');
          _this.$axios.post('addBonus', obj).then(function (result) {
            if (result.status == 0) {
              _this.myMessage.success('提交成功!');
              _this.showDialog3 = false;
            } else {
              _this.myMessage.error(result.msg);
            }
          }).catch(function (err) {
            _this.myMessage.error('网络请求发生异常,请稍后再试...');
          })
        }
      },
      //初始化页面剩余使用时间
      initDateTxtFn: function () {
        let _this = this;
        let userEndTime = _this.endTime;
        if (userEndTime < 0 || !userEndTime) {
          _this.endTimeTxt = '已过期';
          if (_this.user.type == 0) {
            _this.endTimeTxt = '未开通';
          }
        } else {
          let day = userEndTime / (1000 * 60 * 60 * 24);
          let day1 = parseInt(day) + '天 ';
          if (parseInt(day) <= 0) {
            day1 = ''
          }

          let h = (userEndTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
          h = parseInt(h) + ':';

          let m = (userEndTime % (1000 * 60 * 60)) / (1000 * 60);
          m = parseInt(m) + ':';

          let s = (userEndTime % (1000 * 60)) / 1000;
          s = parseInt(s) + '';

          let txt = day1 + h + m + s;
          _this.endTimeTxt = txt;
        }
        if(_this.btcNewTime < 61 && _this.btcNewTime > -1){
          _this.btcNewTime = _this.btcNewTime - 1;
        }
      },
      initHtmlViewFn (){
        $('.knobInit2').knob({
          'format' : function (value) {
            return value + '%';
          }
        });
      }
    },
    beforeRouteLeave(to, from, next) {
      let _this = this;
      clearInterval(_this.interVal);
      next(true);
    }
  }
</script>
<style src="../../../static/index/css/bootstrap.min.css" scoped></style>
<style src="../../../static/index/css/animate.min.css" scoped></style>
<style src="../../../static/index/css/font-awesome.min.css" scoped></style>
<style src="../../../static/index/css/bootstrap-progressbar-3.3.4.min.css" scoped></style>
<!--<style src="../../../static/index/css/chartist.min.css" scoped></style>-->
<style src="../../../static/index/css/chartist-plugin-tooltip.css" scoped></style>
<style src="../../../static/index/css/main.css" scoped></style>
<!--<style src="../../../static/index/css/color_skins.css" scoped></style>-->
<style scoped>
  .avgEntBox { /*均价样式*/
  }

  .wrap {
    width: 500px;
    height: auto;
    margin: 50px;
  }

  .app-heading.app-heading-small {
    margin-bottom: 0;
  }

  .progress-bar {
    text-align: right;
    padding-right: 5%;
  }

  .col-sm-12 {
    padding-left: 2px;
    padding-right: 2px;
  }

  .hover-bar {
    cursor: pointer;
    width: 5px;
    padding: 0;
    overflow: inherit !important;
    color: #fff;
    left: 0;
  }

  .hover-bar:hover .hoverBox {
    display: block;
  }

  .hoverBox {
    display: none;
    position: absolute;
    bottom: 25px;
    left: -20px;
    overflow: hidden;
    z-index: 9999999;
    background: #666;
    /*height: 40px;*/
    opacity: 0.8;
    padding: 6px;
    border-radius: 4px;
    white-space: pre-line;
    line-height: 14px;
    min-width: 75px;
    text-align: left;
    text-indent: 0;
  }

  .rt-text {
    text-align: right;
    padding: 0 5px;
    width: 100%;
    display: inline-block;
    text-indent: 0;
    overflow: hidden;
  }

  .rl-text {
    text-align: left;
    padding: 0 5px;
    width: 100%;
    display: inline-block;
    text-indent: 0;
    overflow: hidden;
  }

  .text-muted.width33 {
    width: 33.33%;
    display: inline-block;
    padding: 0;
    margin: 20px 0 0;
    float: left;
  }

  .box-border {
    border: 1px solid rgb(228, 228, 228);
    margin-bottom: 30px;
    transition: all 300ms;
    /*cursor: pointer;*/
    /*overflow: hidden;*/
  }

  .box-border:hover {
    border: 1px solid rgba(0, 174, 205, 0.3) !important;
    box-shadow: 2px 2px 10px rgba(0, 174, 205, 0.3);
  }

  .body-hover-black {
    border: 1px solid rgb(228, 228, 228);
    margin: 0;
    transition: all 300ms;
  }

  .body-hover-black:hover {
    border: 1px solid rgba(68, 68, 68, 0.3) !important;
    box-shadow: 2px 2px 10px rgba(68, 68, 68, 0.3);
  }

  .row {
    margin: 0;
  }

  .button {
    background-color: #00aecd;
    width: 25%;
    line-height: 4px;
    height: 25px;
  }

  .button:hover {
    background-color: #414141;
  }

  .modal-dialog {
    width: 450px;
  }

  .qrCodeBg {
    background: #ff0000;
  }

  .qrCodeBg.bg-one {
    /*background: url("../../../static/home/img/2code_bg1.jpg");*/
    background-size: 100% 100%;
    width: 450px !important;
    height: 637px;
  }

  .qrCodeBg.bg-two {
    background: url("../../../static/home/img/2code_bg2.jpg");
    background-size: 100% 100%;
    height: 637px;
  }

  .qrCodeBg.bg-three {
    background: url("../../../static/home/img/2code_bg3.jpg");
    background-size: 100% 100%;
    height: 637px;
  }

  .form-horizontal .control-label {
    text-align: left;
    font-weight: 600;
    padding-top: 10px;
    padding-right: 0;
  }

  .weak_btn {
    padding: 0;
    margin: 0;
    color: #fff;
  }
  .weak_btn:hover{
    cursor: pointer;
    color: #1d8ecd !important;
  }
</style>


