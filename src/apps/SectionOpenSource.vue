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
                                <a class="btn light-blue darken-2 ripple-parent" @click="simpleMenuModal = true">More</a>
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
                                <a class="btn light-blue darken-2 ripple-parent" @click="timefyModal = true">More</a>
                            </card-body>
                        </card>
                    </div>
                </column>
            </row>

        </container>
        <modal v-if="simpleMenuModal" @close="simpleMenuModal = false">
            <h3 slot="header">JQUERY SIMPLE MENU PLUGIN</h3>
            <div slot="body">
                <div class="w-modal-img">
                    <img src="https://github.com/ikloster03/jquery-simple-menu/raw/master/images/example.gif" alt="Alt Text" style="max-width:100%;">
                </div>
                <p><a class="modal-link" href="https://ikloster03.github.io/jquery-simple-menu/">Simple Menu Plugin</a> is a utility for quickly building a menu of the site</p>
                <p>Repository:
                    <strong><a class="modal-link" href="https://github.com/ikloster03/jquery-simple-menu">jquery-simple-menu</a>
                    </strong>
                </p>
            </div>
        </modal>
        <modal v-if="timefyModal" @close="timefyModal = false">
            <h3 slot="header">Timefy</h3>
            <div slot="body">
                <p>Timefy your life with js!</p>
                <p>Repository:
                    <strong><a class="modal-link" href="https://github.com/ikloster03/timefy">timefy</a>
                    </strong>
                </p>
            </div>
        </modal>
    </section>
</template>

<script>
    import Modal from '@/components/Modal.vue';
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

    export default {
        components: {
            Modal,
            Container,
            Row,
            Column,
            Card,
            CardImg,
            CardHeader,
            CardBody,
            'Badge': badge,
            'Fa': fa
        },
        data() {
            return {
                simpleMenuModal: false,
                timefyModal: false
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
</style>