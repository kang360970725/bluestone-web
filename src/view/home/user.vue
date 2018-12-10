<template>
  <div class="block" style="padding: 10px;">
    <div v-show="editData">
      <vdialog :isShow="showDialog" :options="dialogOptions" v-on:modalResponse="modalResponse">
        <div style="">
          <form class="form-horizontal">
            <div class="form-group">
              <label class="w-col-2 control-label">用户</label>
              <div class="w-col-10">
                <input type="text" v-model="editUser.account" id="realName" class="form-control" readonly>
                <span class="error"></span>
              </div>
            </div>
            <div class="form-group">
              <label class="w-col-2 control-label">会员版本 </label>
              <div class="w-col-10">
                <div class="app-radio round">
                  <label style="margin-right: 10px;"><input type="radio" name="userType" v-model="editUser.type"
                                                            value="0"> 注册用户<span></span></label>
                  <label style="margin-right: 10px;"><input type="radio" name="userType" v-model="editUser.type"
                                                            value="1" @click="VIPTime = 1"> 试用用户<span></span></label>
                  <label style="margin-right: 10px;"><input type="radio" name="userType" v-model="editUser.type"
                                                            value="2" @click="VIPTime = 2"> 购买用户<span></span></label>
                </div>
                <!--<input type="text" v-model="editUser.email" id="email" class="form-control">-->
                <span class="error"></span>
              </div>
            </div>
            <div class="form-group" v-show="editUser.type != 0">
              <label class="w-col-2 control-label">机器人版本 </label>
              <div class="w-col-10">
                <div class="app-radio round">
                  <label style="margin-right: 10px;"><input type="radio" name="bottype" v-model="editUser.bot_type"
                                                            value="1"> 高级版<span></span></label>
                  <label style="margin-right: 10px;"><input type="radio" name="bottype" v-model="editUser.bot_type"
                                                            value="2"> 综合版<span></span></label>
                  <label style="margin-right: 10px;"><input type="radio" name="bottype" v-model="editUser.bot_type"
                                                            value="3"> 综合版<span></span></label>
                </div>
                <!--<input type="text" v-model="editUser.email" id="email" class="form-control">-->
                <span class="error"></span>
              </div>
            </div>
            <div class="form-group" v-show="editUser.type == 1 ||editUser.type == 2">
              <label class="w-col-2 control-label">开通时效</label>
              <div class="w-col-10">
                <div v-show="editUser.type == 1">
                  <div class="app-radio round" style="width: 70px;">
                    <label style="margin-right: 10px;"><input type="radio" name="VIPTime" v-model="VIPTime" value="1">
                      1天<span></span></label>
                  </div>
                  <label style="line-height: 36px;font-weight: 400;">
                    自定义
                    <input type="text" name="VIPTime" v-model="VIPTime" value="1" style="width: 60px;height: 24px;"
                           maxlength="2" onkeyup="this.value=this.value.replace(/\D/g,'')"
                           onafterpaste="this.value=this.value.replace(/\D/g,'')"> 天</label>
                </div>

                <div v-show="editUser.type == 2">
                  <div class="app-radio round" style="width: 400px;">
                    <label style="margin-right: 10px;"><input type="radio" name="VIPTime" v-model="VIPTime" value="1">
                      1月(月卡)<span></span></label>
                    <label style="margin-right: 10px;"><input type="radio" name="VIPTime" v-model="VIPTime" value="3">
                      3月(季卡)<span></span></label>
                    <label style="margin-right: 10px;"><input type="radio" name="VIPTime" v-model="VIPTime" value="666">
                      <span></span>
                      <!--<label style="line-height: 36px;font-weight: 400;">-->
                      自定义
                      <input type="text" name="VIPTime" v-model="VIPDayTime" value="30"
                             style="width: 60px;height: 20px;"
                             maxlength="3" onkeyup="this.value=this.value.replace(/\D/g,'')"
                             onafterpaste="this.value=this.value.replace(/\D/g,'')"> 天
                    </label>
                  </div>
                  <span class="error"></span>
                </div>
              </div>
            </div>
            <div class="form-group" v-show="editUser.type == 2">
              <label class="w-col-2 control-label">开通费用</label>
              <div class="w-col-10">
                <label style="line-height: 36px;font-weight: 400;">
                  <input type="text" name="VIPTime" v-model="editUser.ABonusNum" value="1"
                         style="width: 80px;height: 24px;"
                         maxlength="7" onkeyup="value=value.replace(/[^\d.]/g,'')"> Btc</label>
                <span class="error"></span>
              </div>
            </div>
          </form>
        </div>
      </vdialog>
      <vdialog :isShow="showPrincipal" :options="principalOptions" v-on:modalResponse="modalPrincipal">
        <div style="">
          <form class="form-horizontal">
            <div class="form-group">
              <label class="w-col-2 control-label">用户</label>
              <div class="w-col-10">
                <input type="text" v-model="editUser.account" id="realNames" class="form-control" readonly>
                <span class="error"></span>
              </div>
            </div>
            <div class="form-group">
              <label class="w-col-2 control-label">设置本金</label>
              <div class="w-col-10">
                <label style="line-height: 36px;font-weight: 400;">
                  <input type="text" name="VIPTime" v-model="editUser.user_principal" value="1"
                         style="width: 80px;height: 24px;"
                         maxlength="10" onkeyup="value=value.replace(/[^\d.]/g,'')"> Btc</label>
                <span class="error"></span>
              </div>
            </div>
          </form>
        </div>
      </vdialog>
      <div class="tab-data" style="min-height: 512px;">
        <div class="present-history">
          <div class="block-content" style="min-height: 512px;" v-show="!showCapital && !showBot">
            <div>
              <span>当前查询会员总数: {{pagination.totalCount}}</span>
            </div>
            <div>
              <button class="btn btn-info btn-xs" style="margin-bottom: 5px" @click="initImpFn">{{!endtimetype ?
                '查看即将过期会员' : '查看全部会员'}}
              </button>
            </div>
            <div style="margin: 10px 0;">
              <label style="padding-right: 20px;">
                <span>用户名:</span>
                <input type="text" v-model="serData.name" style="line-height: 24px;"/>
              </label>
              <label style="padding-right: 20px;">
                <span>用户状态:</span>
                <select style="line-height: 24px;height: 30px;" v-model="serData.type">
                  <option value="">全部</option>
                  <option value="0">注册用户</option>
                  <option value="1">试用用户</option>
                  <option value="2">购买用户</option>
                  <option value="3">停止使用</option>
                </select>
              </label>
              <label style="padding-right: 20px;">
                <span>bot状态:</span>
                <select style="line-height: 24px;height: 30px;" v-model="serData.state">
                  <option value="">全部</option>
                  <option value="0">未激活</option>
                  <option value="1">已激活</option>
                </select>
              </label>

              <button class="btn btn-info btn-xs" style="margin-bottom: 5px" @click="searchFn">查询</button>
              <button class="btn btn-info btn-xs pull-right" style="margin-bottom: 5px" @click="exportCardFn">导出选中会员</button>
              <button class="btn btn-info btn-xs pull-right" style="margin-bottom: 5px;margin-right: 10px;" @click="setUserGroupFn">确认分组</button>
              <label class="pull-right" style="margin-right: 10px;">
                将选中用户设置到
                <select v-model="groupType">
                  <option value="a">A组</option>
                  <option value="b">B组</option>
                  <option value="c">C组</option>
                  <option value="d">D组</option>
                  <option value="e">E组</option>
                </select>
              </label>

            </div>
            <table class="table table-striped table-bordered">
              <thead>
              <tr>
                <th><label><input v-model="checkAll" type="checkbox" @click="checkAllFn"/>全选</label></th>
                <th>账号</th>
                <th>当前组</th>
                <th>bot ID</th>
                <th>状态</th>
                <th>bot状态</th>
                <th>机器人令牌</th>
                <th>机器人版本</th>
                <th>会员有效期</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in dataList" :key='item.id' v-if="item.level != 5">
                <td><input v-model="item.check" type="checkbox"/></td>
                <td>{{item.account}}</td>
                <td style="text-transform: uppercase;">{{!!item.group ? item.group + '组' : '暂未分组'}}</td>
                <td>bs{{item.uuid}}</td>
                <td><span :style="'color:' + item.color">{{item.typeName}}</span></td>
                <td><span :style="item.activation_state == 0 ? 'color:orange' : 'color:green'">{{item.activation_state == 0 ? '未激活' : '已激活'}}</span>
                </td>
                <td><span>{{item.token}}</span></td>
                <td>{{item.bot_type == 1 ? '标准版' : (item.bot_type == 2 ? '专业版' : '精英版')}}</td>
                <td>{{item.timeTxt}}</td>
                <td>
                  <div>
                    <button class="btn btn-danger btn-xs" v-show="item.type != 3" @click="setUserTypeFn(item,'3')">禁用
                    </button>
                    <button class="btn btn-success btn-xs" v-show="item.type == 3" @click="setUserTypeFn(item,'0')">启用
                    </button>
                    <button class="btn btn-info btn-xs" @click="showPromp(item)" v-show="item.type != 3 && user.level == 8">开通期限</button>
                    <!--<button class="btn btn-info btn-xs" v-show="item.type == 2" @click="setPrincipalFn(item)">设置本金</button>-->
                    <button class="btn btn-info btn-xs" @click="capitalFn(item)">资金管理</button>
                    <!--<button class="btn btn-info btn-xs" v-show="item.popular_user == 0" @click="setPopularFn(item)">-->
                      <!--设置热门-->
                    <!--</button>-->
                    <!--<button class="btn btn-info btn-xs" v-show="item.popular_user == 1" @click="setPopularFn(item)">-->
                      <!--取消热门-->
                    <!--</button>-->
                    <button class="btn btn-info btn-xs" v-show="item.type == 1 || item.type == 2" @click="seeBotFn(item)">
                      查看参数
                    </button>
                    <button class="btn btn-info btn-xs" @click="updateInitImpFn(item)" v-show="item.type != 3 && user.level == 8">
                      重置密码
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-center" colspan="8" v-if="dataList.length <= 0">没有更多数据...</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="block-content" style="min-height: 512px;" v-show="showCapital">
            <table class="table table-striped table-bordered">
              <thead>
              <tr>
                <th>会员账号</th>
                <th>总资产</th>
                <th>总收益</th>
                <th>总邀请分红</th>
                <th>总收益分红</th>
                <th>当月总收益</th>
                <th>当月邀请收益</th>
                <th>当月分红收益</th>
                <th>总提现</th>
                <th>当月提现</th>
                <th>总分佣</th>
                <th>当月总分佣</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{{accountData.account}}</td>
                <td>{{accountData.countBtc || 0}}</td>
                <td>{{accountData.countProfit || 0}}</td>
                <td>{{accountData.countInBonus || 0}}</td>
                <td>{{accountData.countPrBonus || 0}}</td>
                <td>{{accountData.countMonth || 0}}</td>
                <td>{{accountData.countMoInBonus || 0}}</td>
                <td>{{accountData.countMoPrBonus || 0}}</td>
                <td>{{accountData.countPut || 0}}</td>
                <td>{{accountData.countMoPut || 0}}</td>
                <td>{{accountData.countTakes || 0}}</td>
                <td>{{accountData.countMoTakes || 0}}</td>
                <td>
                  <div>
                    <!--<button class="btn btn-info btn-xs" @click="confirmBonusFn()">确认分红到账</button>-->
                    <button class="btn btn-info btn-xs" @click="returnFn()">返回</button>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
            <div class="block-content w-col-6">
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
                  <td>{{item.timeTxt}}</td>
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
            <div class="block-content w-col-6">
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
                  <td>{{item.timeTxt}}</td>
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
          </div>
          <!--bot设置开始-->
          <div class="block-content" style="min-height: 512px;" v-show="showBot">
            <div class="block">
              <br>
              <form class="form-horizontal w-col w-col-3">
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">机器人开关</label>
                  <div class="w-col w-col-9">
                    <div class="w-col-12">
                      <label class="switch switch-cube">
                        <input type="checkbox" name="switch_5" v-model="bot.open" :value="bot.open" @click="openbot">
                        <span></span>
                      </label>
                    </div>
                    <span>机器人控制，需要更新策略</span>
                  </div>
                </div>
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">API ID</label>
                  <div class="w-col w-col-9">
                    <input style="font-size: 12px;" type="text" class="form-control" v-model="bot.api">
                    <span>BitMex Api ID</span>
                  </div>
                </div>
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">Secret</label>
                  <div class="w-col w-col-9">
                    <input style="font-size: 12px;" type="text" class="form-control" v-model="bot.secret">
                    <span>BitMex Secret</span>
                  </div>
                </div>
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">趋势交易</label>
                  <div class="w-col w-col-9">
                    <div class="w-col-12">
                      <label class="switch switch-cube">
                        <input type="checkbox" name="switch_5" v-model="bot.trendfollow">
                        <span></span>
                      </label>
                    </div>
                    <span>{{bot.trendfollow ? '做顺势交易':'做逆势交易'}}</span>
                  </div>
                </div>
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">自动管理MM</label>
                  <div class="w-col w-col-9">
                    <div class="w-col-12">
                      <label class="switch switch-cube">
                        <input type="checkbox" name="switch_5" v-model="bot.mm">
                        <span></span>
                      </label>
                    </div>
                    <span>启动复利自动本金管理</span>
                  </div>
                </div>
                <!--MM启动失效参数 Str-->
                <!--<div v-show="bot.mm == 0">-->
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">自定义头寸</label>
                  <div class="w-col w-col-9">
                    <input type="text" class="form-control" v-model="bot.entry">
                    <span>指定固定金额单位美金,MM指定为0的情况下有效</span>
                  </div>
                </div>
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">自定义补仓</label>
                  <div class="w-col w-col-9">
                    <input type="text" class="form-control" v-model="bot.nanpin">
                    <span>每次补仓合约数量，单位美金</span>
                  </div>
                </div>
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">最大持仓杠杆</label>
                  <div class="w-col w-col-9">
                    <input type="text" class="form-control" v-model="bot.maxleverage">
                    <span>最大补仓持仓数量=50杠杆*本金</span>
                  </div>
                </div>
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">K线</label>
                  <div class="w-col w-col-9">
                    <input type="text" class="form-control" v-model="bot.time">
                    <span>k线指标:1表示1分钟线，5表示5分钟线</span>
                  </div>
                </div>
              </form>
              <div class="form-horizontal w-col w-col-1"></div>
              <form class="form-horizontal w-col w-col-3">
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">MM头寸比例</label>
                  <div class="w-col w-col-9">
                    <input type="text" class="form-control" v-model="bot.mmpercent">
                    <span>保证金使用率（推荐0.0003〜0.0008)</span>
                  </div>
                </div>
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">自动补仓比例</label>
                  <div class="w-col w-col-9">
                    <input type="text" class="form-control" v-model="bot.mmnanpin">
                    <span>MM每次补仓的比例</span>
                  </div>
                </div>
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">最大补仓次数</label>
                  <div class="w-col w-col-9">
                    <input type="text" class="form-control" v-model="bot.maxnanpin">
                    <span>单位次</span>
                  </div>
                </div>
                <!--<div class="form-group">-->
                <!--<label class="w-col w-col-3 control-label">杠杆</label>-->
                <!--<div class="w-col w-col-9">-->
                <!--<input type="text" class="form-control" v-model="bot.leverage">-->
                <!--<span>bitmex杠杆指定。０表示全仓</span>-->
                <!--</div>-->
                <!--</div>-->
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">刷新时间</label>
                  <div class="w-col w-col-9">
                    <input type="text" class="form-control" v-model="bot.sleep">
                    <span>循环时间推荐40或70，单位秒</span>
                  </div>
                </div>
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">多军止盈间距</label>
                  <div class="w-col w-col-9">
                    <input type="text" class="form-control" v-model="bot.longrange">
                    <span>买涨时相对于均价止盈数量，单位美金</span>
                  </div>
                </div>
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">多军补仓间距</label>
                  <div class="w-col w-col-9">
                    <input type="text" class="form-control" v-model="bot.longstop">
                    <span>买涨被套后补仓价格间距，单位美金</span>
                  </div>
                </div>
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">空军止盈间距</label>
                  <div class="w-col w-col-9">
                    <input type="text" class="form-control" v-model="bot.shortrange">
                    <span>卖空时相对于均价止盈数量，单位美金</span>
                  </div>
                </div>
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">空军补仓间距</label>
                  <div class="w-col w-col-9">
                    <input type="text" class="form-control" v-model="bot.shortstop">
                    <span>卖空被套后补仓价格间距，单位美金</span>
                  </div>
                </div>
              </form>
              <div class="form-horizontal w-col w-col-1"></div>
              <form class="form-horizontal w-col w-col-3">
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">Losscut</label>
                  <div class="w-col w-col-9">
                    <input type="text" class="form-control" v-model="bot.losscut">
                    <span>根据钱包余额实时计算止损金额。(1表示不止损)</span>
                  </div>
                </div>
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">多军点位止损</label>
                  <div class="w-col w-col-9">
                    <input type="text" class="form-control" v-model="bot.longstopx">
                    <span>多军持仓均价偏离多少美金后全仓止损</span>
                  </div>
                </div>
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">空军点位止损</label>
                  <div class="w-col w-col-9">
                    <input type="text" class="form-control" v-model="bot.shortstopx">
                    <span>空军持仓均价偏离多少美金后全仓止损</span>
                  </div>
                </div>
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">多军单边</label>
                  <!--<div class="w-col w-col-9">-->
                  <!--<input type="text" class="form-control" v-model="bot.longorder">-->
                  <!--</div>-->
                  <div class="w-col w-col-9">
                    <div class="w-col-12">
                        <select class="form-control" v-model="bot.longorder">
                          <option value="0">关闭</option>
                          <option value="1">多军市价建仓交易</option>
                          <option value="2">多军限价建仓交易</option>
                        </select>
                        <span></span>
                    </div>
                    <span>只做多军的单边交易</span>
                  </div>
                </div>
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">空军单边</label>
                  <!--<div class="w-col w-col-9">-->
                  <!--<input type="text" class="form-control" v-model="bot.shortorder">-->
                  <!--<span>只做空军的单边交易</span>-->
                  <!--</div>-->
                  <div class="w-col w-col-9">
                    <div class="w-col-12">
                        <select class="form-control" v-model="bot.shortorder">
                          <option value="0">关闭</option>
                          <option value="1">空军市价建仓交易</option>
                          <option value="2">空军限价建仓交易</option>
                        </select>
                        <span></span>
                    </div>
                    <span>只做空军的单边交易</span>
                  </div>
                </div>
                <div class="form-group">
                  <label class="w-col w-col-3 control-label"> 空手道</label>
                  <div class="w-col w-col-9">
                    <input type="text" class="form-control" v-model="bot.nanpin_cancel">
                    <span>0无效,0.5空手道,1全仓认输,2.0乾坤大挪移</span>
                  </div>
                </div>
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">补仓模式</label>
                  <div class="w-col w-col-9">
                    <input type="text" class="form-control" v-model="bot.nanpin_order">
                    <span>2=急速手续费,1=高速补,0=低速补</span>
                  </div>
                </div>
                <div class="form-group">
                  <label class="w-col w-col-3 control-label">反手光环</label>
                  <div class="w-col w-col-9">
                    <div class="w-col-12">
                      <label class="switch switch-cube">
                        <input type="checkbox" name="switch_5" v-model="bot.doten">
                        <span></span>
                      </label>
                    </div>
                    <span>防止大单边深套,当市场急速反转时有几率触发反手</span>
                  </div>
                </div>
              </form>
              <div class="w-col-12 w-col">
                <div class="w-col-3 w-col" style=""></div>
                  <div class="w-col-3 w-col" style="">
                    <button class="btn btn-success w-col w-col-6 btn-lg" style="margin: 0 auto;" @click="setBotDataFn">更新策略</button>
                  </div>
                  <div class="w-col-3 w-col" style="">
                    <button class="btn btn-info w-col w-col-6 btn-lg" style="margin: 0 auto;" @click="returnFn">返回列表</button>
                  </div>
                <div class="w-col-3 w-col" style=""></div>
              </div>
            </div>
          </div>
          <!--bot设置结束-->
          <div v-show="!showCapital && !showBot">
            <label>
              每页显示
              <select @change="setPageSizeFn()" v-model="pagination.pageSize">
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>50</option>
              </select>条
            </label>
          </div>
          <pageBox class="pull-right" :pagination="pagination" v-on:setPageData="pagesFn($event)"
                   v-show="!showCapital && !showBot"></pageBox>
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
  // import '../../../static/boooya/js/app_plugins.js';
  import md5 from 'js-md5'
  import File from '../../../commonFunction/FileSaver'

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
        tabType: 1,
        groupType: 'a',
        user: {},
        editUser: {},
        dataList: [],
        ip: '',
        VIPTime: 1,
        VIPDayTime: 0,
        dialogOptions: {//弹窗配置项
          width: '550',//弹窗宽度
          title: '编辑会员资料',
          hasBtn: true, //是否需要确定按钮，默认没有确认按钮
          closeBtn: true //是否需要关闭按钮，默认没有关闭按钮
        },
        principalOptions: {//弹窗配置项
          width: '550',//弹窗宽度
          title: '设置会员本金',
          hasBtn: true, //是否需要确定按钮，默认没有确认按钮
          closeBtn: true //是否需要关闭按钮，默认没有关闭按钮
        },
        editData: true,
        showPrincipal: false,
        showDialog: false,
        pagination: {//分页参数
          pageIndex: 1,
          pageSize: 10,
          startCount: 0,
          totalCount: 0,
          pageCount: 0
        },
        serData: {
          name: '',
          type: '',
          state: ''
        },
        accountData: {},
        showCapital: false,
        showBot: false,
        editBotUser:{},
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
        endtimetype: false,
        checkAll: false,
        ProfitData: [],
        InviteData: [],
        bot: {
          open: false
        },
        contBot: {
          open: false
        },
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
      this.getInitData();
      setTimeout(function () {
        _this.ip = returnCitySN["cip"];
      }, 3000);
    },
    methods: {
      setPageSizeFn (){
        let _this = this;
        _this.pagination.pageIndex = 1;
        _this.getInitData();
      },
      getInitData: function () {
        let _this = this;
        _this.$axios.get('getalluser?pageIndex=' + _this.pagination.pageIndex + '&pageSize=' + _this.pagination.pageSize + '&name=' + _this.serData.name + '&type=' + _this.serData.type + '&state=' + _this.serData.state + '&endtimetype=' + _this.endtimetype).then(function (result) {
          if (result.status == 0) {
            _this.dataList = result.data.map(item => {
              let date = new Date(item.endtimems)
              item['check'] = false;
              item['timeTxt'] = '已过期';
              if (item.endtime > 0) {
                item['timeTxt'] = _this.common.initTimeFn(date);
              }
              switch (item.type) {
                case 0:
                  item.typeName = '注册用户';
                  item.color = '#42b0db';
                  break;
                case 1:
                  item.typeName = '试用用户';
                  item.color = 'orange';
                  break;
                case 2:
                  item.typeName = '购买用户';
                  item.color = 'green';
                  break;
                case 3:
                  item.typeName = '停止使用';
                  item.color = 'red';
                  break;
              }
              return item;
            });
            _this.pagination.totalCount = result.count;
            _this.pagination.pageCount = Math.ceil(_this.pagination.totalCount / _this.pagination.pageSize);
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
      searchFn: function () { //条件查询调用方法
        let _this = this;
        _this.pagination.pageIndex = 1;
        _this.getInitData();
      },
      steTabFn: function (type) {
        let _this = this;
        _this.tabType = type;
      },
      showPromp(item) {
        this.editUser = item;
        this.editUser.ABonusNum = 0;
        this.showDialog = true;
      },
      setPrincipalFn(item) {
        this.editUser = item;
        this.showPrincipal = true;
      },
      modalResponse(json) {
        let _this = this
        if (json.type === 'close') {
          this.showDialog = false;
        } else {//有表单等要操作的内容

          if (_this.editUser.type == 1 && !_this.VIPTime) {
            _this.myMessage.info('试用时长不合法');
            return;
          }
          if (_this.editUser.type == 2 && !_this.VIPTime) {
            _this.myMessage.info('开通时长不合法');
            return;
          }
          if (confirm('确定当前操作?')) {
            let obj = {
              id: _this.editUser.id,
              account: _this.editUser.account,
              type: _this.editUser.type,
              endtime: _this.editUser.endtime,
              time: _this.VIPTime,
              day: _this.VIPDayTime,
              bot_type: _this.editUser.bot_type,
              endtimems: _this.editUser.endtimems
            }
            _this.$axios.put('useredit', obj).then(function (result) {
              if (result.status == 0) {
                // if (_this.editUser.type == 2) {//开通需要分红
                  // let data = {
                  //   account: _this.editUser.account,
                  //   Invitdcode: _this.editUser.Invitdcode,
                  //   ABonusNum: _this.editUser.ABonusNum
                  // };
                  // _this.$axios.post('inABonus', data).then(function (result2) {
                  //   if (result2.status == 0) {
                  //     _this.myMessage.success('操作成功!');
                  //     _this.showDialog = false;
                  //     _this.getInitData();
                  //   } else {
                  //     _this.myMessage.error(result2.msg);
                  //   }
                  // }).catch(function (err) {
                  // })
                // } else {
                  _this.myMessage.success('修改成功!');
                  _this.showDialog = false;
                  _this.getInitData();
                // }
              } else {
                _this.myMessage.error(result.msg);
              }
            }).catch(function (err) {
              _this.myMessage.error('网络请求发生异常,请稍后再试...');
            })

          } else {
          }

        }
      },
      modalPrincipal(json) {
        let _this = this
        if (json.type === 'close') {
          this.showPrincipal = false;
        } else {//有表单等要操作的内容
          let obj = {
            id: _this.editUser.id,
            account: _this.editUser.account,
            user_principal: _this.editUser.user_principal
          };
          _this.$axios.put('useredit/principal', obj).then(function (result) {
            if (result.status == 0) {
              _this.myMessage.success('修改成功!');
              _this.showPrincipal = false;
              _this.getInitData();
            } else {
              _this.myMessage.error(result.msg);
            }
          }).catch(function (err) {
            _this.myMessage.error('网络请求发生异常,请稍后再试...');
          })

        }
      },
      initImpFn() {
        let _this = this
        _this.endtimetype = !_this.endtimetype;
        _this.getInitData();
      },
      updateInitImpFn(item) {
        let _this = this
        let obj = {
          pwd: md5('123456'),
          account: item.account,
          uuid: item.uuid
        };
        _this.$axios.post('user/repwd', obj).then(function (result) {
          if (result.status == 0) {
            _this.myMessage.success('登录密码重置成功');
          } else {
            _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },
      setUserTypeFn: function (item, type) {
        let _this = this;
        if (confirm('确定当前操作?')) {
          let obj = {
            id: item.id,
            account: item.account,
            type: type,
          }
          _this.$axios.put('putUserByType', obj).then(function (result) {
            if (result.status == 0) {
              _this.myMessage.success('修改成功!');
              _this.getInitData();
            } else {
              _this.myMessage.error(result.msg);
            }
          }).catch(function (err) {
            _this.myMessage.error('网络请求发生异常,请稍后再试...');
          })
        } else {
        }
      },
      setPopularFn: function (item) {
        let _this = this;
        let obj = {
          id: item.id,
          account: item.account,
          popular_user: item.popular_user == 0 ? 1 : 0
        }
        _this.$axios.put('useredit/popular', obj).then(function (result) {
          if (result.status == 0) {
            _this.myMessage.success(item.popular_user == 1 ? '取消热门成功!' : '设置热门成功!');
            _this.getInitData();
          } else {
            _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },
      capitalFn: function (item) {//获取账户资金统计
        let _this = this;
        _this.editUser = item;
        this.initRecordInvite();
        this.initRecordProfit();
        _this.$axios.get('getRecordAll?account=' + item.account).then(function (result) {
          if (result.status == 0) {
            if (result.data.length <= 0) {
              _this.myMessage.info(result.msg);
              return;
            }
            _this.showCapital = true;
            let obj = {
              uuid: item.uuid,
              account: item.account,
              Invitdcode: item.Invitdcode,
              level: item.level,
              countBtc: result.data[0].bot_balance,//总资产
              countProfit: 0,//总收益
              countInBonus: 0,//总邀请分红
              countPrBonus: 0,//总收益分红
              countMonth: 0,//当月总收益
              countMoInBonus: 0,//当月邀请收益
              countMoPrBonus: 0,//当月分红收益
              countPut: 0,//总提现
              countMoPut: 0,//当月提现
              countTakes: 0,//总分佣
              countMoTakes: 0//当月总分佣
            };
            //获取当前时间月的第一天
            let date = new Date();
            date.setDate(1);
            date.setHours(0, 0, 0, 0);
            let times = date.getTime();
            result.data.forEach(item => {
              switch (item.type) {
                case '0'://收益盈利数据
                  obj.countProfit = parseFloat(obj.countProfit, 4) + parseFloat(item.bot_change_num, 4);
                  if (item.bot_set_time > times) {//当月数据
                    obj.countMonth = parseFloat(obj.countMonth, 4) + parseFloat(item.bot_change_num, 4);
                  }
                  break;
                case '1'://邀请分红数据
                  obj.countInBonus = parseFloat(obj.countInBonus, 4) + parseFloat(item.bot_change_num, 4);
                  if (item.bot_set_time > times) {//当月数据
                    obj.countMoInBonus = parseFloat(obj.countMoInBonus, 4) + parseFloat(item.bot_change_num, 4);
                  }
                  break;
                case '2'://团队分红数据
                  obj.countPrBonus = parseFloat(obj.countPrBonus, 4) + parseFloat(item.bot_change_num, 4);
                  if (item.bot_set_time > times) {//当月数据
                    obj.countMoPrBonus = parseFloat(obj.countMoPrBonus, 4) + parseFloat(item.bot_change_num, 4);
                  }
                  break;
                case '3'://提现数据
                  obj.countPut = parseFloat(obj.countPut, 4) + parseFloat(item.bot_change_num, 4);
                  if (item.bot_set_time > times) {//当月数据
                    obj.countMoPut = parseFloat(obj.countMoPut, 4) + parseFloat(item.bot_change_num, 4);
                  }
                  break;
                case '4'://上级分佣抽成
                  obj.countTakes = parseFloat(obj.countTakes, 4) + parseFloat(item.bot_change_num, 4);
                  if (item.bot_set_time > times) {//当月数据
                    obj.countMoTakes = parseFloat(obj.countMoTakes, 4) + parseFloat(item.bot_change_num, 4);
                  }
                  break;
              }
              // return item;
            });
            _this.accountData = obj;
          } else {
            _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },
      returnFn: function () {
        let _this = this;
        _this.showCapital = false;
        _this.showBot = false;
      },
      updateImpUserTimeFn(list) {
        let _this = this
        if (list.length <= 0) {
          _this.myMessage.success('重置完成');
          return;
        }
        let item = list[0];
        _this.$axios.put('impuseredit', item).then(function (result) {
          if (result.status == 0) {
            let m = list.shift();
            _this.updateImpUserTimeFn(list);
          } else {
            _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },
      initRecordInvite: function () {
        let _this = this;
        _this.$axios.get('getRecordInvite?account=' + _this.editUser.account + '&pageIndex=' + _this.pageInvite.pageIndex + '&pageSize=' + _this.pageInvite.pageSize).then(function (result) {//获取邀请分红
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
        _this.$axios.get('getRecordProfit?account=' + _this.editUser.account + '&pageIndex=' + _this.pageProfit.pageIndex + '&pageSize=' + _this.pageProfit.pageSize).then(function (result) {//获取盈利分红
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
      exportCardFn() {//导出帐号
        let _this = this,
          cardTxt = '';
        _this.dataList.forEach(function (item) {
          if (item.check) {
            cardTxt += '会员id:bs' + item.uuid + "        ";
            cardTxt += '会员帐号:' + item.account;
            for (let i = 0; i < 30 - item.account.length; i++) {
              cardTxt += ' ';
            }
            cardTxt += '会员令牌:' + item.token + "\r\n";
          }
        })
        if (!cardTxt) {
          _this.myMessage.info('请先选中要导出的数据!');
          return;
        }
        var blob = new Blob([cardTxt], {type: "text/plain;charset=utf-8"});
        File.saveAs(blob, "导出会员.txt");
      },
      setUserGroupFn() {//用户分组
        let _this = this,
          userList = [];
        _this.dataList.forEach(function (item) {
          if (item.check) {
            userList.push(item.account)
          }
        });
        if (userList.length <= 0) {
          _this.myMessage.info('请先选中要分组的用户');
          return;
        }
        let obj = {
          account: userList,
          group: _this.groupType,
        };
        _this.$axios.put('putUserByGroup', obj).then(function (result) {
          if (result.status == 0) {
            _this.myMessage.success('修改成功!');
            _this.getInitData();
          } else {
            _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },
      checkAllFn(){//全选反选
        let _this = this;
        _this.dataList.forEach(function (item) {
          item.check = !_this.checkAll
        })
      },
      //查看账户bot设置
      seeBotFn(item){
        let _this = this;
        _this.showBot = true;
        _this.editBotUser = item;
        _this.$axios.get('api/parameters/bs'+ item.uuid).then(function (result) {
          if (!!result) {
            _this.bot = result;
            _this.contBot = JSON.parse(JSON.stringify(result));
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
      setBotDataFn: function(){
        let _this = this;
        if(_this.editBotUser.type != 1 && _this.editBotUser.type != 2 && _this.editBotUser.endtime <= 0){
          _this.bot.open = false
        }
        let newBot = _this.bot;
        let contBot = _this.contBot;
        let editkey = {
          ip: _this.ip
        };
        let logs = '【会员中心】';
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
            _this.getInitData()
          } else {
            _this.myMessage.error(result.msg);
          }
        })
      },
      openbot: function () {
        let _this = this;
        if(_this.user.type != 1 && _this.user.type != 2 && _this.user.endtime <= 0){
          _this.myMessage.info('该会员未充值开通');
          setTimeout(function () {
            _this.bot.open = !_this.bot.open;
          }, 300)
          // let obj = _this.bot
          // obj['open'] = "123456";
          // _this.bot = obj;
        }
      },
    }
  }
</script>

<style scoped>
  .form-horizontal.w-col.w-col-3{
    overflow: hidden;
    min-height: 720px;
    font-size: 12px;
  }
  .form-horizontal .form-group {
    margin: 0 0 15px 0;
    overflow: hidden;
  }
  .w-col.w-col-3.control-label{
    line-height: 36px;
    text-align: right;
  }

  .form-group .w-col-10 .error {
    color: red;
    /*position: absolute;*/
  }
  .form-group{
    height: 60px;
    padding: 0 5px;
    margin-bottom: 26px;
    position: relative;
  }
  .form-group input,  .form-group select{
    border: rgba(0,0,0,0.2) 1px solid !important;
    border-radius: 4px;
    transition: all 300ms;
    line-height: 30px;
    text-indent: 10px;
  }
  .form-group input:focus,  .form-group select:focus{
    border: rgba(51, 171, 184, 0.8) 1px solid !important;
    box-shadow: 2px 2px 10px rgba(51, 171, 184, 0.5);
    border-radius: 4px;
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

  .w-col-3 {
    padding-right: 16px !important;
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
