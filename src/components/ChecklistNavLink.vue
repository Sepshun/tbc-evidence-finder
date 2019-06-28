<template>
    <a :href="href" class="item scrollactive-item">
        <img class="icon" src="" alt="">
        <p class="title" :class="{'span-2': !num}">{{ title }}</p>
        <p v-if="num" class="num">{{ num }}</p>
    </a>
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
        },
        href: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
#checklist-nav .item {
	display: grid;
    grid-template-columns: 42px auto 42px;
    height: 42px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 16px;
    opacity: 0.5;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    
    > .icon {
        background: white;
        height: 32px;
        width: 32px;
    }
    
    > .title, > .num {
        margin: 0;
        color: white;
        font-size: 16px;
    }
    > .title { margin-left: 8px; }
    > .num { justify-self: end; }
    
    > .span-2 { grid-column-end: span 2; }
    
    &:hover, &.active { opacity: 1; }
    &.active { background: linear-gradient(90deg, rgba(white, 0.2), rgba(0,0,0,0)); }
}
</style>
