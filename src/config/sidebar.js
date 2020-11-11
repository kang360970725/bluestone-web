let menusConfig = [
  {
    key: "user-index",
    title: "量化交易",
    href: "/index",
    icon: "fa fa-th-list",
    isShow: true
  },
  {
    key: "information",
    title: "个人资料",
    href: "/information",
    icon: "fa icon-files",
    isShow: true
  },
  {
    key: "package-info",
    title: "Bot设置",
    href: "/package-info",
    icon: "fa icon-coin-euro",
    isShow: false
  },
  {
    key: "team-info",
    title: "我的团队",
    href: "/team-info",
    icon: "fa icon-group-work",
    isShow: true
  },
  {
    key: "main",
    title: "关于蓝猫",
    href: "/main",
    icon: "fa icon-shutter",
    isShow: true
  },
  {
    key: "user-info",
    title: "会员管理",
    href: "/user",
    icon: "fa icon-users",
    isShow: false
  },
  {
    key: "put-list",
    title: "提现管理",
    href: "/put",
    icon: "fa icon-clipboard-text",
    isShow: false
  },
  {
    key: "renew-list",
    title: "充值核实",
    href: "/renew",
    icon: "fa icon-calendar-text",
    isShow: false
  },
  {
    key: "bonus-list",
    title: "分红转账核实",
    href: "/bonus",
    icon: "fa icon-calendar-text",
    isShow: false
  },
  {
    key: "bot-user",
    title: "排行榜",
    href: "/bot-user",
    icon: "fa icon-users",
    isShow: false
  }
];
if(!!localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).level == 5){
  menusConfig.forEach(function (item) {
    if(item.key == 'user-info' || item.key == 'put-list' || item.key == 'renew-list' || item.key == 'bonus-list' || item.key == 'bot-user'){
      item.isShow = true;
    }
  })
}
if(!!localStorage.getItem('user') && (JSON.parse(localStorage.getItem('user')).type != 0 && JSON.parse(localStorage.getItem('user')).type != 3)){
  let user = JSON.parse(localStorage.getItem('user'))
  if(user.type == 1 && user.endtime <= 0){

  }else {
    menusConfig.forEach(function (item) {
      if(item.key == 'package-info'){
        item.isShow = true;
      }
    })
  }
}
export default menusConfig
