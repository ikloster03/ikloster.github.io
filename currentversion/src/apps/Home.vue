<template>
    <main>
        <AppHeader></AppHeader>
        <SectionProfile></SectionProfile>
        <SectionProducts></SectionProducts>
        <SectionOpenSource></SectionOpenSource>
        <AppFooter></AppFooter>
    </main>
</template>

<script>
    import AppHeader from '@/apps/Header.vue';
    import SectionProfile from '@/apps/SectionProfile.vue';
    import SectionProducts from '@/apps/SectionProducts.vue';
    import SectionOpenSource from '@/apps/SectionOpenSource.vue';
    import AppFooter from '@/apps/Footer.vue';

    export default {
        name: 'AppHome',
        components: {
            AppHeader,
            SectionProfile,
            SectionProducts,
            SectionOpenSource,
            AppFooter
        },
    };
</script>

<style scoped>

</style>