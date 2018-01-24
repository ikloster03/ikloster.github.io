<template>
    <footer class="footer">
        <container>
            <p class="footer__header">Also you can find me at</p>
            <a v-for="item in socNetworks" target="_blank" :href="getHref( item.name, item.profile )" class="btn btn-floating btn-social-all  waves-effect waves-light"><i :class="getIcon( item.name )"></i></a>
        </container>
    </footer>
</template>

<script>
    import Container from '@/components/Container.vue';


    export default {
        name: 'HomeFooter',
        components: {
            Container,
        },
        methods: {
            getHref( name, profile ) {
                return 'https://www.' + name + '.com/' + profile;
            },
            getIcon( name ) {
                return 'fa fa-' + name + ' left';
            }
        },
        data() {
            return {
                socNetworks: [
                    {
                        name: 'vk',
                        profile: 'ikloster95',
                    },
                    {
                        name: 'instagram',
                        profile: 'ikloster95',
                    },
                    {
                        name: 'facebook',
                        profile: 'ikloster95',
                    },
                    {
                        name: 'github',
                        profile: 'ikloster03',
                    },
                    {
                        name: 'twitter',
                        profile: 'ikloster95',
                    },
                ]
            }
        }

    };
</script>

<style scoped>
    .footer {
        padding: 15px 0;
        background: #303952;
        text-align: center;
    }
    .footer__header {
        color: white;
        font-size: 1.75em;
        display: block;
    }
    @media only screen and (max-width: 768px) {
        .footer__header {
            font-size: 1em;
        }
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
        margin: 10px;
        background-color: #a6c;
        color: #fff;
        cursor: pointer;
        -webkit-transition: .3s;
        transition: .3s;
    }
    .btn-social-all {
        background-color: #436281;
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
</style>