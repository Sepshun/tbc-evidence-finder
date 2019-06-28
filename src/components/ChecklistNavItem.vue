<template>
    <div class="item">
        <img class="icon" src="" alt="">
        <p class="title">{{ title }}</p>
        <p class="num">{{ num }}</p>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: 'Nav Item'
        },
        num: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style lang="scss">

</style>
