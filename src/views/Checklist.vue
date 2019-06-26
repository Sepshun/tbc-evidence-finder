<template>
<div id="checklist" class="view">
	<ChecklistNav />
    <div class="property-list">
        <ChecklistProperty v-for="property in this.$store.state.properties" :property="property" />
    </div>
</div>
</template>

<script>
import ChecklistNav from '@/components/ChecklistNav.vue'
import ChecklistProperty from '@/components/ChecklistProperty.vue'

export default {
    components: { ChecklistNav, ChecklistProperty }
}
</script>

<style lang="scss">
#checklist {
    display: grid;
	grid-template-columns: 320px auto;
    
    > .property-list {
        box-sizing: border-box;
        padding: 32px;
        height: calc(100vh - 64px);
        overflow: auto;
    }
}
</style>
