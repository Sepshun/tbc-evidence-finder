import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        propertiesSurface: [],
        propertiesMaze: [],
        currentFilter: 'not-checked'
    },
    getters: {
        sections: state => {
            return {
                surface: state.propertiesSurface,
                maze: state.propertiesMaze
            }
        },
        properties: state => {
            return state.propertiesSurface.concat(state.propertiesMaze)
        }
    },
    mutations: {
        ...vuexfireMutations
    },
    actions: {
        fetchProperties: firestoreAction(({bindFirestoreRef}, ref) => {
            bindFirestoreRef("propertiesSurface", ref)
        })
    }
})
