<template>
    <section class="section-opensource">
        <container>
            <p class="section-opensource__header">My open source projects</p>
            <row>
                <column col="12" sm="6" lg="3">
                    <div class="w-site-card">
                        <card>
                            <div class="w-img-site">
                                <img class="img-site" src="/static/img/simple-menu.png" alt="">
                            </div>
                            <card-body>
                                <h4 class="card-title">Simple Menu</h4>
                                <a class="btn light-blue darken-2 ripple-parent" @click="showSimpleMenu()">More</a>
                            </card-body>
                        </card>
                    </div>
                </column>
                <column col="12" sm="6" lg="3">
                    <div class="w-site-card">
                        <card>
                            <div class="w-img-site">
                                <img class="img-site" src="/static/img/vue-custom-loading.png" alt="">
                            </div>
                            <card-body>
                                <h4 class="card-title">Custom Loading</h4>
                                <a class="btn light-blue darken-2 ripple-parent" @click="showVueCustomLoading()">More</a>
                            </card-body>
                        </card>
                    </div>
                </column>
                <column col="12" sm="6" lg="3">
                    <div class="w-site-card">
                        <card>
                            <badge color="info" class="card-badge">in developing</badge>
                            <div class="w-img-site">
                                <img class="img-site" src="/static/img/timer.png" alt="">
                            </div>
                            <card-body>
                                <h4 class="card-title">Timefy</h4>
                                <a class="btn light-blue darken-2 ripple-parent" @click="showTimefy()">More</a>
                            </card-body>
                        </card>
                    </div>
                </column>
            </row>

        </container>
        <modal name="simple-menu" :adaptive="true" :scrollable="true" height="auto">
            <div class="box">
                <button type="button" class="close box__close" aria-label="Close" @click="hideSimpleMenu()">
                    <span aria-hidden="true">&times;</span>
                </button>
               <div class="box-part">
                   <h3 class="box-part__header">JQUERY SIMPLE MENU PLUGIN</h3>
                   <div class="w-modal-img">
                       <progressive-img
                               src="https://github.com/ikloster03/jquery-simple-menu/raw/master/images/example.gif"
                               @onLoad="onLoad"
                       />
                   </div>
                   <p><a class="modal-link" href="https://ikloster03.github.io/jquery-simple-menu/">Simple Menu Plugin</a> is a utility for quickly building a menu of the site</p>
                   <p>Repository:
                       <strong><a class="modal-link" href="https://github.com/ikloster03/jquery-simple-menu">jquery-simple-menu</a>
                       </strong>
                   </p>
               </div>
            </div>
        </modal>
        <modal name="vue-custom-loading" :adaptive="true" :scrollable="true" height="auto">
            <div class="box">
                <button type="button" class="close box__close" aria-label="Close" @click="hideVueCustomLoading()">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div class="box-part">
                    <h3 class="box-part__header">VUE CUSTOM LOADING</h3>
                    <div class="w-modal-img">
                        <progressive-img
                                src="https://github.com/ikloster03/vue-custom-loading/raw/master/img/example.gif"
                                @onLoad="onLoad"
                        />
                    </div>
                    <p><a class="modal-link" href="https://ikloster03.github.io/vue-custom-loading/">Vue Custom Loading</a> is a utility for quickly building a custom full overlay loading with spinner for Vue.</p>
                    <p>Repository:
                        <strong><a class="modal-link" href="https://github.com/ikloster03/vue-custom-loading">vue-custom-loading</a>
                        </strong>
                    </p>
                </div>
            </div>
        </modal>
        <modal name="timefy" :adaptive="true" :scrollable="true" height="auto">
            <div class="box">
                <button type="button" class="close box__close" aria-label="Close" @click="hideTimefy()">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div class="box-part">
                    <h3 class="box-part__header">Timefy</h3>
                    <p>Timefy your life with js!</p>
                    <p>Repository:
                        <strong><a class="modal-link" href="https://github.com/ikloster03/timefy">timefy</a>
                        </strong>
                    </p>
                </div>
            </div>
        </modal>
        <Loading
                :show="showProp"
                :overlay="overlayProp"
        >
            <div slot="loader">
                <div class="sk-folding-cube">
                    <div class="sk-cube1 sk-cube"></div>
                    <div class="sk-cube2 sk-cube"></div>
                    <div class="sk-cube4 sk-cube"></div>
                    <div class="sk-cube3 sk-cube"></div>
                </div>
            </div>
        </Loading>
    </section>
</template>

<script>
    import Container from '@/components/Container.vue';
    import Row from "@/components/Row";
    import Column from "@/components/Col";
    import Card from '@/components/Card.vue';
    import CardImg from '@/components/CardImg.vue';
    import CardHeader from '@/components/CardHeader.vue';
    import CardFooter from '@/components/CardFooter.vue';
    import CardBody from '@/components/CardBody.vue';
    import badge from '@/components/Badge.vue';
    import fa from '@/components/Fa.vue';
    import Loading from 'vue-custom-loading';


    export default {
        components: {
            Container,
            Row,
            Column,
            Card,
            CardImg,
            CardHeader,
            CardBody,
            'Badge': badge,
            'Fa': fa,
            Loading,
        },
        methods: {
            showSimpleMenu () {
                this.$modal.show('simple-menu');
                this.showProp = true;
            },
            hideSimpleMenu () {
                this.$modal.hide('simple-menu');
            },
            showVueCustomLoading () {
                this.$modal.show('vue-custom-loading');
                this.showProp = true;
            },
            hideVueCustomLoading () {
                this.$modal.hide('vue-custom-loading');
            },
            showTimefy () {
                this.$modal.show('timefy');
            },
            hideTimefy () {
                this.$modal.hide('timefy');
            },
            onLoad () {
                this.showProp = false;
            },
        },
        data() {
            return {
                showProp: false,
                overlayProp: 'light',
                simpleMenuModal: false,
                vueCustomLoadingModal: false,
                timefyModal: false,
            }
        }
    }
</script>

<style scopedw-modal-img>
    .section-opensource {
        padding-top: 100px;
        padding-bottom: 100px;
        background: #786fa6;
    }
    .section-opensource__header {
        color: white;
        font-size: 4.75em;
        font-weight: 700;
        display: block;
    }
    .w-site-card {
        padding: 15px 0;
    }
    .card-badge {
        position: absolute;
        top: 12px;
        right: 0;
        padding: 6px;
        z-index: 30;
    }
    .card-title {
        font-size: 1em;
    }
    .w-img-site {
        position: relative;
        display: block;
        width: 100%;
        height: 100px;
    }
    .img-site {
        z-index: 20;
        width: 100px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%)
    }
    .box {
        position: relative;
    }
    .box__close {
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 10px;
    }
    .box-part {
        padding: 15px;
    }
    .box-part__header {
        text-align: center;
    }
    .w-modal-img {
        padding-bottom: 30px;
    }
    .modal-link {
        color: #18BC9C;
        outline: none;
    }
    .card-body {
        text-align: center;
    }
    @media only screen and (max-width: 768px) {
        .section-opensource {
            padding-top: 30px;
            padding-bottom: 30px;
        }
        .section-opensource__header {
            font-size: 1.5em;
        }
    }

    .sk-folding-cube {
        margin: 20px auto;
        width: 40px;
        height: 40px;
        position: relative;
        -webkit-transform: rotateZ(45deg);
        transform: rotateZ(45deg);
    }

    .sk-folding-cube .sk-cube {
        float: left;
        width: 50%;
        height: 50%;
        position: relative;
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
    }
    .sk-folding-cube .sk-cube:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #333;
        -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
        animation: sk-foldCubeAngle 2.4s infinite linear both;
        -webkit-transform-origin: 100% 100%;
        -ms-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
    }
    .sk-folding-cube .sk-cube2 {
        -webkit-transform: scale(1.1) rotateZ(90deg);
        transform: scale(1.1) rotateZ(90deg);
    }
    .sk-folding-cube .sk-cube3 {
        -webkit-transform: scale(1.1) rotateZ(180deg);
        transform: scale(1.1) rotateZ(180deg);
    }
    .sk-folding-cube .sk-cube4 {
        -webkit-transform: scale(1.1) rotateZ(270deg);
        transform: scale(1.1) rotateZ(270deg);
    }
    .sk-folding-cube .sk-cube2:before {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
    }
    .sk-folding-cube .sk-cube3:before {
        -webkit-animation-delay: 0.6s;
        animation-delay: 0.6s;
    }
    .sk-folding-cube .sk-cube4:before {
        -webkit-animation-delay: 0.9s;
        animation-delay: 0.9s;
    }
    @-webkit-keyframes sk-foldCubeAngle {
        0%, 10% {
            -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
            opacity: 0;
        } 25%, 75% {
              -webkit-transform: perspective(140px) rotateX(0deg);
              transform: perspective(140px) rotateX(0deg);
              opacity: 1;
          } 90%, 100% {
                -webkit-transform: perspective(140px) rotateY(180deg);
                transform: perspective(140px) rotateY(180deg);
                opacity: 0;
            }
    }

    @keyframes sk-foldCubeAngle {
        0%, 10% {
            -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
            opacity: 0;
        } 25%, 75% {
              -webkit-transform: perspective(140px) rotateX(0deg);
              transform: perspective(140px) rotateX(0deg);
              opacity: 1;
          } 90%, 100% {
                -webkit-transform: perspective(140px) rotateY(180deg);
                transform: perspective(140px) rotateY(180deg);
                opacity: 0;
            }
    }
</style>