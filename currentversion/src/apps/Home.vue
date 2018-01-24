<template>
    <main>
        <Header></Header>
        <SectionProfile></SectionProfile>
        <SectionProducts></SectionProducts>
        <SectionOpenSource></SectionOpenSource>
        <Footer></Footer>
    </main>
</template>

<script>
    import Header from '@/apps/Header.vue';
    import SectionProfile from '@/apps/SectionProfile.vue';
    import SectionProducts from '@/apps/SectionProducts.vue';
    import SectionOpenSource from '@/apps/SectionOpenSource.vue';
    import Footer from '@/apps/Footer.vue';

    export default {
        name: 'AppHome',
        components: {
            Header,
            SectionProfile,
            SectionProducts,
            SectionOpenSource,
            Footer
        },
    };
</script>

<style scoped>

</style>