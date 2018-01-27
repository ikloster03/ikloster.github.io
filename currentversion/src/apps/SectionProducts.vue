<template>
    <section class="section-products">
        <container>
            <p class="section-products__header">Products I worked on</p>
            <row>
                <column col="12" sm="6" lg="3" v-for="item in allSites" :key="item.id">
                    <SiteCard v-if="isBadge( item.badge )" :siteName="item.name" :pathLink="item.link" :pathImg="item.img" :badgeName="item.badge"></SiteCard>
                    <SiteCard v-else :siteName="item.name" :pathLink="item.link" :pathImg="item.img"></SiteCard>
                </column>
            </row>

        </container>
    </section>
</template>

<script>
    import SiteCard from '@/apps/SiteCard.vue';

    import Container from '@/components/Container.vue';
    import Row from "@/components/Row";
    import Column from "@/components/Col";

    export default {
        components: {
            Container,
            Row,
            Column,
            SiteCard
        },
        methods: {
            isBadge( data ) {
                return !!data;
            }
        },
        data() {
            return {
                allSites: [
                    {
                        id: 1,
                        name: '24Truck',
                        link: 'https://www.24-truck.ru/',
                        img: '/static/img/24-truck.png',
                    },
                    {
                        id: 2,
                        name: 'Shaft Gear',
                        link: 'https://shaft-gear.ru/',
                        img: '/static/img/shaft-gear.png'
                    },
                    {
                        id: 3,
                        name: 'Hellosport',
                        link: 'https://hellosport.ru/',
                        img: '/static/img/hellosport.png',
                        badge: 'old version'
                    },
                    {
                        id: 4,
                        name: 'Tahograff',
                        link: 'https://tahograff.ru/',
                        img: '/static/img/tahograff-logo.png'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .section-products {
        padding-top: 150px;
        padding-bottom: 100px;
        background: #778beb;
    }

    .section-products__header {
        color: white;
        font-size: 4.75em;
        font-weight: 700;
        display: block;
    }
    @media only screen and (max-width: 768px) {
        .section-products {
            padding-top: 30px;
            padding-bottom: 30px;
        }
        .section-products__header {
            font-size: 1.5em;
        }
    }
</style>