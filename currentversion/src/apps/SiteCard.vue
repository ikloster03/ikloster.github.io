<template>
    <div class="w-site-card">
        <card>
            <badge v-if="isBadge( badgeName )" color="info" class="card-badge">{{ badgeName }}</badge>
            <div class="w-img-site">
                <img class="img-site" :src="setImgSrc( pathImg )" :alt="setAlt( siteName )">
            </div>
            <card-body>
                <h4 class="card-title">{{ siteName }}</h4>
                <a :href="setHrefLink( pathLink )" target="_blank" class="btn mdb-color lighten-1 ripple-parent" >go to {{ siteName }}</a>
            </card-body>
        </card>
    </div>
</template>
<script>
    import Card from '@/components/Card.vue';
    import CardImg from '@/components/CardImg.vue';
    import CardHeader from '@/components/CardHeader.vue';
    import CardFooter from '@/components/CardFooter.vue';
    import CardBody from '@/components/CardBody.vue';
    import badge from '@/components/Badge.vue';

    export default {
        components: {
            Card,
            CardImg,
            CardHeader,
            CardBody,
            'Badge': badge,
        },
        props: {
            siteName: {
                type: String,
                required: true
            },
            pathImg: {
                type: String,
                required: true
            },
            pathLink: {
                type: String,
                required: false
            },
            badgeName: {
                type: String,
                required: false
            },
        },
        methods:{
            setImgSrc( data ) {
                return data;
            },
            setHrefLink( data ) {
                return data;
            },
            setAlt( data ) {
                return data;
            },
            isBadge( data ) {
                return !!data;
            },
        },
    }
</script>

<style scoped>
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
    .card-body {
        text-align: center;
    }
</style>