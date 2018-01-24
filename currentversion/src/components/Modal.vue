<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <container class="modal-container">
                    <div class="modal-header">
                        <slot name="header">
                            default header
                        </slot>
                        <button type="button" class="close" aria-label="Close" @click="$emit('close')">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            default body
                        </slot>
                    </div>
                </container>
            </div>
        </div>
    </transition>
</template>

<script>
    import Container from '@/components/Container.vue';
    export default {
        name: 'Modal',
        components: {
            Container,
        },
    }
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
        font-size: 20px;
        font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    .modal-container {
        max-width: 650px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
    }
    .modal-header {
        position: relative;
        display: block;
        text-align: center;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
        font-weight: bold !important;
    }
    .close {
        cursor: pointer;
        position: absolute;
        top: 5px;
        right: 0px;
        z-index: 100;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-default-button {
        float: right;
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>