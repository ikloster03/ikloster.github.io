<template>
    <navbar position="top" class="mdb-color darken-2 navbar-dark" name="IKLOSTER03" href="/" scrolling>
        <navbar-collapse>
            <navbar-nav>
                <!--<navbar-item href="#" active waves-fixed>Home</navbar-item>-->
                <!--<navbar-item href="#" waves-fixed>Features</navbar-item>-->
                <!--<navbar-item href="#" waves-fixed>Pricing</navbar-item>-->
            </navbar-nav>
        </navbar-collapse>
    </navbar>
</template>
<script>
    import Navbar from '@/components/Navbar.vue';
    import NavbarItem from '@/components/NavbarItem.vue';
    import NavbarNav from '@/components/NavbarNav.vue';
    import NavbarCollapse from '@/components/NavbarCollapse.vue';


    export default {
        name: 'HomeHeader',
        components: {
            Navbar,
            NavbarItem,
            NavbarNav,
            NavbarCollapse,
        },
    };
</script>
<style scoped>
    .navbar .dropdown-menu a:hover {
        color: inherit !important;
    }
</style>