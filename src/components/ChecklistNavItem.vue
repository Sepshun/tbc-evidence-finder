<template>
    <div class="item">
        <img class="icon" src="" alt="">
        <p class="title" :class="{'span-2': !num}">{{ title }}</p>
        <p v-if="num" class="num">{{ num }}</p>
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
            default: null
        }
    }
}
</script>

<style lang="scss">

</style>
