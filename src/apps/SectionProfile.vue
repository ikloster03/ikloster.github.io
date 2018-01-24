<template>
    <section class="section-profile">
        <container>
            <div class="img-avatar-wrap">
                <img class="img-circle" src="https://z-p3-scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/26167531_1957806581110884_7260365268330150310_n.jpg?oh=1b99240c332259892bd1283101d2d845&oe=5B2663D9" alt="">
            </div>
            <div class="intro-text">
                <p class="intro-text__name">Hey, I'm Ivan Monastyrev.</p>
                <div class="w-sub-intro">
                    <p class="intro-text__about">I'm a web developer from Russia.</p>
                    <p class="intro-text__about">I'm available for hire.</p>
                    <p class="intro-text__about"><a href="mailto:ikloster@yandex.ru" class="link-email">Email</a> or <a target="_blank" href="https://t.me/ikloster95" class="btn-floating btn-social-all "><i class="fa fa-telegram left"></i></a></p>
                </div>
            </div>
        </container>
    </section>
</template>

<script>
    import Container from '@/components/Container.vue';
    import fa from '@/components/Fa.vue';

    export default {
        name: 'SectionProfile',
        components: {
            Container,
            'Fa': fa

        },
    };

</script>

<style>
    .section-profile {
        padding-top: 150px;
        padding-bottom: 100px;
        background: #63cdda;
    }
    .img-avatar-wrap {
        position: relative;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto;
        width: 256px;
        height: 256px;
        box-shadow: 2px 7px 17px -2px rgba(117, 117, 117, 1);
    }
    .img-circle {
        position: absolute;
        width: 260px;
        top: 50%;
        left: 50%;
        margin-left: -128px;
        margin-top: -128px;
    }
    .intro-text {
        text-align: center;
        padding-top: 20px;
    }
    .w-sub-intro {
        display: inline-block;
        text-align: left;
    }
    .intro-text__name {
        color: white;
        font-size: 4.75em;
        font-weight: 700;
        display: block;

    }
    .intro-text__about {
        color: white;
        font-size: 1.75em;
        font-weight: 300;
        display: block;

    }
    .link-email {
        color: white;
        text-decoration: none;
        border-bottom: 3px solid white;
        padding-bottom: 0.15rem;
        position: relative;
    }
    .link-email:hover {
        color: white;
    }
    .link-email:after {
        content: "";
        -webkit-transition: width 0.2s ease-in-out;
        transition: width 0.2s ease-in-out;
        border-bottom: 3px solid #303952;
        position: absolute;
        left: 0;
        bottom: calc(0px - 0.15rem);
        width: 0;
    }
    .link-email:hover:after,  .link-email:active:after {
        width: 100%;
    }
    .btn-floating {
        position: relative;
        z-index: 1;
        vertical-align: middle;
        display: inline-block;
        overflow: hidden;
        width: 47px;
        height: 47px;
        padding: 0;
        border-radius: 50%;
        margin: 5px;
        background-color: #a6c;
        color: #fff;
        cursor: pointer;
        -webkit-transition: .3s;
        transition: .3s;
    }
    .btn-social-all {
        background-color: #3dc1d3;
        box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);
    }
    a.waves-effect, a.waves-light {
        display: inline-block;
    }
    footer.page-footer a {
        color: #fff;
    }


    .btn-floating i {
        display: inline-block;
        width: inherit;
        color: #fff;
        font-size: 1.25rem;
        line-height: 47px;
        text-align: center;
    }
    .btn-social-all i.fa {
        margin-top: 0;
    }
    @media only screen and (max-width: 768px) {
        .section-profile {
            padding-top: 94px;
            padding-bottom: 30px;
        }
        .img-avatar-wrap {
            width: 128px;
            height: 128px;
        }
        .img-circle {
            width: 130px;
            margin-left: -64px;
            margin-top: -64px;
        }
        .intro-text__name {
            font-size: 1.5em;
        }
        .intro-text__about {
            font-size: 1em;
        }
    }
</style>