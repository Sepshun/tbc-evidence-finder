<template>
<div id="checklist" class="view">
	<ChecklistNav />
    <div class="property-list">
        <ChecklistProperty
			v-for="(property, i) in this.$store.state.properties"
			:key="property.title"
			:property="property"
		/>
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
	grid-template-columns: 240px auto;
    
    > .property-list {
        box-sizing: border-box;
        padding: 16px;
        height: calc(100vh - 64px);
        overflow: auto;
    }
}
</style>
