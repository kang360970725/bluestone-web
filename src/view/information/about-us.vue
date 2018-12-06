<template>
  <div>
    <div class="sub-banner">
      <div class="w-container">
        <div class="w-row">
          <div class="w-col w-col-6">
            <h4 class="title-bread">{{$t('m.team.team')}}&nbsp;<span class="sub-title-lighter">/ {{$t('m.header.bodyTitle')}}<br></span></h4>
          </div>
          <div class="w-col w-col-6 col-right">
            <!--<div class="breadcrumbs">Unikue&nbsp;/&nbsp;Pages&nbsp;/&nbsp;Our Team</div>-->
          </div>
        </div>
      </div>
    </div>
    <!-- END SUB BANNER -->

    <!-- START SECTION 1 -->
    <section class="w-section section">
      <div class="w-container">
        <div class="top-title">
          <div class="title-txt">
            <h5>{{$t('m.team.team1')}}&nbsp;<span class="sub-title-lighter">/&nbsp;Our Heroes</span></h5>
          </div>
          <div class="divider"></div>
        </div>
        <div>
          <p v-html="$t('m.team.teamdsc1')"></p>
        </div>
        <div class="top-spc">
          <div class="w-row">
            <div class="w-col w-col-3">
              <div class="team-wrapper">
                <div><img src="../../../static/home/images/team8.jpg">
                </div>
                <div class="div-spc">
                  <h5 class="tm-title">{{$t('m.team.teamUser1')}}</h5>
                  <div class="sub-title-lighter">{{$t('m.team.teamUser1_ske')}}</div>
                  <div class="line-team"></div>
                  <p class="desc-p" :class="$i18n.locale">{{$t('m.team.teamUser1_desc')}}</p>
                  <div class="line-team"></div>
                  <div class="w-clearfix social-wrapper no-dwn">
                    <a class="w-inline-block social-ico facebook tooltip-2" title="Facebook">
                      <div class="w-embed"><i class="fa fa-facebook"></i>
                      </div>
                    </a>
                    <a class="w-inline-block social-ico twitter tooltip-2" title="Twitter">
                      <div class="w-embed"><i class="fa fa-twitter"></i>
                      </div>
                    </a>
                    <a class="w-inline-block social-ico rss tooltip-2" title="Rss">
                      <div class="w-embed"><i class="fa fa-rss"></i>
                      </div>
                    </a>
                    <a class="w-inline-block social-ico google-plus tooltip-2" title="Google Plus">
                      <div class="w-embed"><i class="fa fa-google-plus"></i>
                      </div>
                    </a>
                    <a class="w-inline-block social-ico linkdin tooltip-2" title="LinkdIn">
                      <div class="w-embed"><i class="fa fa-linkedin"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-col w-col-3">
              <div class="team-wrapper">
                <div><img src="../../../static/home/images/team8.jpg">
                </div>
                <div class="div-spc">
                  <h5 class="tm-title">{{$t('m.team.teamUser2')}}</h5>
                  <div class="sub-title-lighter">{{$t('m.team.teamUser2_ske')}}</div>
                  <div class="line-team"></div>
                  <p class="desc-p" :class="$i18n.locale">{{$t('m.team.teamUser2_desc')}}</p>
                  <div class="line-team"></div>
                  <div class="w-clearfix social-wrapper no-dwn">
                    <a class="w-inline-block social-ico facebook tooltip-2" title="Facebook">
                      <div class="w-embed"><i class="fa fa-facebook"></i>
                      </div>
                    </a>
                    <a class="w-inline-block social-ico twitter tooltip-2" title="Twitter">
                      <div class="w-embed"><i class="fa fa-twitter"></i>
                      </div>
                    </a>
                    <a class="w-inline-block social-ico rss tooltip-2" title="Rss">
                      <div class="w-embed"><i class="fa fa-rss"></i>
                      </div>
                    </a>
                    <a class="w-inline-block social-ico google-plus tooltip-2" title="Google Plus">
                      <div class="w-embed"><i class="fa fa-google-plus"></i>
                      </div>
                    </a>
                    <a class="w-inline-block social-ico linkdin tooltip-2" title="LinkdIn">
                      <div class="w-embed"><i class="fa fa-linkedin"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-col w-col-3">
              <div class="team-wrapper">
                <div><img src="../../../static/home/images/team8.jpg">
                </div>
                <div class="div-spc">
                  <h5 class="tm-title">{{$t('m.team.teamUser3')}}</h5>
                  <div class="sub-title-lighter">{{$t('m.team.teamUser3_ske')}}</div>
                  <div class="line-team"></div>
                  <p class="desc-p" :class="$i18n.locale">{{$t('m.team.teamUser3_desc')}}</p>
                  <div class="line-team"></div>
                  <div class="w-clearfix social-wrapper no-dwn">
                    <a class="w-inline-block social-ico facebook tooltip-2" title="Facebook">
                      <div class="w-embed"><i class="fa fa-facebook"></i>
                      </div>
                    </a>
                    <a class="w-inline-block social-ico twitter tooltip-2" title="Twitter">
                      <div class="w-embed"><i class="fa fa-twitter"></i>
                      </div>
                    </a>
                    <a class="w-inline-block social-ico rss tooltip-2" title="Rss">
                      <div class="w-embed"><i class="fa fa-rss"></i>
                      </div>
                    </a>
                    <a class="w-inline-block social-ico google-plus tooltip-2" title="Google Plus">
                      <div class="w-embed"><i class="fa fa-google-plus"></i>
                      </div>
                    </a>
                    <a class="w-inline-block social-ico linkdin tooltip-2" title="LinkdIn">
                      <div class="w-embed"><i class="fa fa-linkedin"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--<div class="top-spc more-spc">-->
          <!--<div class="w-row">-->
            <!--<div class="w-col w-col-3">-->
              <!--<div class="team-wrapper">-->
                <!--<div><img src="../../../static/home/images/user_init.jpg">-->
                <!--</div>-->
                <!--<div class="div-spc">-->
                  <!--<h5 class="tm-title">Jane Smith</h5>-->
                  <!--<div class="sub-title-lighter">Chief Executive Officer / CEO</div>-->
                  <!--<div class="line-team"></div>-->
                  <!--<p>Consectetur dolor ipsum quiam dolor adipisci velit, aenean at lorem vel est posuere feugiat sed quia noneas numquasa mode tempora incidunt.</p>-->
                  <!--<div class="line-team"></div>-->
                  <!--<div class="w-clearfix social-wrapper no-dwn">-->
                    <!--<a class="w-inline-block social-ico facebook tooltip-2" href="#" title="Facebook">-->
                      <!--<div class="w-embed"><i class="fa fa-facebook"></i>-->
                      <!--</div>-->
                    <!--</a>-->
                    <!--<a class="w-inline-block social-ico twitter tooltip-2" href="#" title="Twitter">-->
                      <!--<div class="w-embed"><i class="fa fa-twitter"></i>-->
                      <!--</div>-->
                    <!--</a>-->
                    <!--<a class="w-inline-block social-ico rss tooltip-2" href="#" title="Rss">-->
                      <!--<div class="w-embed"><i class="fa fa-rss"></i>-->
                      <!--</div>-->
                    <!--</a>-->
                    <!--<a class="w-inline-block social-ico google-plus tooltip-2" href="#" title="Google Plus">-->
                      <!--<div class="w-embed"><i class="fa fa-google-plus"></i>-->
                      <!--</div>-->
                    <!--</a>-->
                    <!--<a class="w-inline-block social-ico linkdin tooltip-2" href="#" title="LinkdIn">-->
                      <!--<div class="w-embed"><i class="fa fa-linkedin"></i>-->
                      <!--</div>-->
                    <!--</a>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="w-col w-col-3">-->
              <!--<div class="team-wrapper">-->
                <!--<div><img src="../../../static/home/images/user_init.jpg">-->
                <!--</div>-->
                <!--<div class="div-spc">-->
                  <!--<h5 class="tm-title">Jane Smith</h5>-->
                  <!--<div class="sub-title-lighter">Chief Executive Officer / CEO</div>-->
                  <!--<div class="line-team"></div>-->
                  <!--<p>Consectetur dolor ipsum quiam dolor adipisci velit, aenean at lorem vel est posuere feugiat sed quia noneas numquasa mode tempora incidunt.</p>-->
                  <!--<div class="line-team"></div>-->
                  <!--<div class="w-clearfix social-wrapper no-dwn">-->
                    <!--<a class="w-inline-block social-ico facebook tooltip-2" href="#" title="Facebook">-->
                      <!--<div class="w-embed"><i class="fa fa-facebook"></i>-->
                      <!--</div>-->
                    <!--</a>-->
                    <!--<a class="w-inline-block social-ico twitter tooltip-2" href="#" title="Twitter">-->
                      <!--<div class="w-embed"><i class="fa fa-twitter"></i>-->
                      <!--</div>-->
                    <!--</a>-->
                    <!--<a class="w-inline-block social-ico rss tooltip-2" href="#" title="Rss">-->
                      <!--<div class="w-embed"><i class="fa fa-rss"></i>-->
                      <!--</div>-->
                    <!--</a>-->
                    <!--<a class="w-inline-block social-ico google-plus tooltip-2" href="#" title="Google Plus">-->
                      <!--<div class="w-embed"><i class="fa fa-google-plus"></i>-->
                      <!--</div>-->
                    <!--</a>-->
                    <!--<a class="w-inline-block social-ico linkdin tooltip-2" href="#" title="LinkdIn">-->
                      <!--<div class="w-embed"><i class="fa fa-linkedin"></i>-->
                      <!--</div>-->
                    <!--</a>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="w-col w-col-3">-->
              <!--<div class="team-wrapper">-->
                <!--<div><img src="../../../static/home/images/user_init.jpg">-->
                <!--</div>-->
                <!--<div class="div-spc">-->
                  <!--<h5 class="tm-title">Jane Smith</h5>-->
                  <!--<div class="sub-title-lighter">Chief Executive Officer / CEO</div>-->
                  <!--<div class="line-team"></div>-->
                  <!--<p>Consectetur dolor ipsum quiam dolor adipisci velit, aenean at lorem vel est posuere feugiat sed quia noneas numquasa mode tempora incidunt.</p>-->
                  <!--<div class="line-team"></div>-->
                  <!--<div class="w-clearfix social-wrapper no-dwn">-->
                    <!--<a class="w-inline-block social-ico facebook tooltip-2" href="#" title="Facebook">-->
                      <!--<div class="w-embed"><i class="fa fa-facebook"></i>-->
                      <!--</div>-->
                    <!--</a>-->
                    <!--<a class="w-inline-block social-ico twitter tooltip-2" href="#" title="Twitter">-->
                      <!--<div class="w-embed"><i class="fa fa-twitter"></i>-->
                      <!--</div>-->
                    <!--</a>-->
                    <!--<a class="w-inline-block social-ico rss tooltip-2" href="#" title="Rss">-->
                      <!--<div class="w-embed"><i class="fa fa-rss"></i>-->
                      <!--</div>-->
                    <!--</a>-->
                    <!--<a class="w-inline-block social-ico google-plus tooltip-2" href="#" title="Google Plus">-->
                      <!--<div class="w-embed"><i class="fa fa-google-plus"></i>-->
                      <!--</div>-->
                    <!--</a>-->
                    <!--<a class="w-inline-block social-ico linkdin tooltip-2" href="#" title="LinkdIn">-->
                      <!--<div class="w-embed"><i class="fa fa-linkedin"></i>-->
                      <!--</div>-->
                    <!--</a>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="w-col w-col-3">-->
              <!--<div class="team-wrapper">-->
                <!--<div><img src="../../../static/home/images/user_init.jpg">-->
                <!--</div>-->
                <!--<div class="div-spc">-->
                  <!--<h5 class="tm-title">Jane Smith</h5>-->
                  <!--<div class="sub-title-lighter">Chief Executive Officer / CEO</div>-->
                  <!--<div class="line-team"></div>-->
                  <!--<p>Consectetur dolor ipsum quiam dolor adipisci velit, aenean at lorem vel est posuere feugiat sed quia noneas numquasa mode tempora incidunt.</p>-->
                  <!--<div class="line-team"></div>-->
                  <!--<div class="w-clearfix social-wrapper no-dwn">-->
                    <!--<a class="w-inline-block social-ico facebook tooltip-2" href="#" title="Facebook">-->
                      <!--<div class="w-embed"><i class="fa fa-facebook"></i>-->
                      <!--</div>-->
                    <!--</a>-->
                    <!--<a class="w-inline-block social-ico twitter tooltip-2" href="#" title="Twitter">-->
                      <!--<div class="w-embed"><i class="fa fa-twitter"></i>-->
                      <!--</div>-->
                    <!--</a>-->
                    <!--<a class="w-inline-block social-ico rss tooltip-2" href="#" title="Rss">-->
                      <!--<div class="w-embed"><i class="fa fa-rss"></i>-->
                      <!--</div>-->
                    <!--</a>-->
                    <!--<a class="w-inline-block social-ico google-plus tooltip-2" href="#" title="Google Plus">-->
                      <!--<div class="w-embed"><i class="fa fa-google-plus"></i>-->
                      <!--</div>-->
                    <!--</a>-->
                    <!--<a class="w-inline-block social-ico linkdin tooltip-2" href="#" title="LinkdIn">-->
                      <!--<div class="w-embed"><i class="fa fa-linkedin"></i>-->
                      <!--</div>-->
                    <!--</a>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      </div>
    </section>
  </div>
</template>

<script>
  import vdialog from "../../components/com-dialog";

  export default {
    name: 'home',
    data() {
      return {
        msg: 'Welcome to Home',
        dialogOptions: {//弹窗配置项
          width: '600',//弹窗宽度
          // title: '啥子东东',
          hasBtn: false //是否需要确定按钮，默认没有确认按钮
        },
        showDialog: false
      }
    },
    components: {
      vdialog
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home-bg {
    width: 100%;
    max-height: 100%;
    overflow: hidden;
    text-align: center;
  }

  .home-bg img {
    width: 100%;
    height: auto;
  }
  .desc-p.zh-CN{
    min-height: 208px;
  }
  .desc-p.en-US{
    min-height: 416px;
  }

  @media screen and (max-width: 991px) {
    .desc-p.zh-CN{
      min-height: 10px;
    }
    .desc-p.en-US{
      min-height: 10px;
    }
  }
</style>
