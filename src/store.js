import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        initData: {
            property: {},
            location: {}
        },
        evidenceData: {},
        currentFilter: undefined,
        settings: {
            collapseHeaders: false
        }
    },
    getters: {
        sections: state => {
            return state.evidenceData
        },
        properties: state => {
            if (state.evidenceData['Surface'] && state.evidenceData['The Maze']) {
                return state.evidenceData['Surface'].concat(state.evidenceData['The Maze'])
            } else return []
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
