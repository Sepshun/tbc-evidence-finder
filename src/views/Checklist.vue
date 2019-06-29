<template>
<div id="checklist" class="view">
	<template v-if="$store.state.evidenceData !== {}">
		<ChecklistNav />
		<div class="property-list">
			<ChecklistProperty
				v-for="(property, i) in properties"
				:key="property.title"
				v-if="property.state === $store.state.currentFilter || $store.state.currentFilter === 0"
				v-model="properties[i]"
			/>
		</div>
	</template>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import ChecklistNav from '@/components/ChecklistNav.vue'
import ChecklistProperty from '@/components/ChecklistProperty.vue'

export default {
    components: { ChecklistNav, ChecklistProperty },
	computed: {
		...mapGetters(['properties'])
	},
	created() {
		this.$store.dispatch('fetchProperties', this.$db.collection('checklist-data').doc('sections'))
	}
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
