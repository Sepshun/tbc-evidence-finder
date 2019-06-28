import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        evidenceData: {
            'Surface': [],
            'The Maze': []
        },
        currentFilter: undefined
    },
    getters: {
        sections: state => {
            return state.evidenceData
        },
        properties: state => {
            return state.evidenceData['Surface'].concat(state.evidenceData['The Maze'])
        }
    },
    mutations: {
        ...vuexfireMutations
    },
    actions: {
        fetchProperties: firestoreAction(({bindFirestoreRef}, ref) => {
            bindFirestoreRef("evidenceData", ref)
        })
    }
})
