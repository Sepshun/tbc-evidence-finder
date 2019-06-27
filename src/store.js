import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        properties: [
            { // 918 Hoadly Ave.
                title: '918 Hoadly Ave.',
                locations: [
                    {
                        title: 'Kitchen',
                        image: 'https://steamuserimages-a.akamaihd.net/ugc/947349514287521692/F7DD1B107B323456C6BED18891D5BD81596A3D4C/'
                    }, {
                        title: 'Front Porch',
                        image: 'https://steamuserimages-a.akamaihd.net/ugc/992387199682139144/ACF776ED3E49EB45915CD1EE5DAC10DA8B04D370/',
                        items: [
                            {
                                title: 'Suitcase',
                                image: 'https://steamuserimages-a.akamaihd.net/ugc/947349514287523656/EF28D995490E16AF1FA99FBFE32238B5C74D704A/'
                            }, {
                                title: 'Boxes',
                                image: 'https://steamuserimages-a.akamaihd.net/ugc/992387199682139144/ACF776ED3E49EB45915CD1EE5DAC10DA8B04D370/'
                            }
                        ]
                    }, {
                        title: 'Backyard Table',
                        image: 'https://steamuserimages-a.akamaihd.net/ugc/992387199675473815/7539F31002DE8256BA08F1752F90758A6CC4F826/'
					}, {
						title: 'Downstairs',
						image: 'https://steamuserimages-a.akamaihd.net/ugc/992387199682149284/04988B93711D4D4D358ADF375DA4FFD42E9CDB16/'
					}, {
						title: 'Street Bench 1',
						image: 'https://steamuserimages-a.akamaihd.net/ugc/947349514287533529/116865ACC408EEB0B4389AF41E099235E9F1A650/'
					}, {
						title: 'Street Bench 2',
						image: 'https://steamuserimages-a.akamaihd.net/ugc/947349514287533529/116865ACC408EEB0B4389AF41E099235E9F1A650/'
					}, {
						title: 'Street Bench 3',
						image: 'https://steamuserimages-a.akamaihd.net/ugc/947349514287533529/116865ACC408EEB0B4389AF41E099235E9F1A650/'
					}
                ]
            },
            { // 919 Hoadly Ave.
                title: '919 Hoadly Ave.',
                locations: []
            },
            { // 920 Hoadly Ave.
                title: '920 Hoadly Ave.',
                locations: []
            },
            { // 921 Hoadly Ave.
                title: '921 Hoadly Ave.',
                locations: []
            },
            { // 922 Hoadly Ave.
                title: '922 Hoadly Ave.',
                locations: []
            },
            { // 1001 Hoadly
                title: '1001 Hoadly',
                locations: []
            },
            { // 1003 Hoadly
                title: '1003 Hoadly',
                locations: []
            },
            { // 1005 Hoadly
                title: '1005 Hoadly',
                locations: []
            },
            
            { // 920 Observation
                title: '920 Observation',
                locations: []
            },
            { // Instrument Supply
                title: 'Instrument Supply',
                locations: []
            },
            { // Ingestion
                title: 'Ingestion',
                locations: []
            },
            { // Sleeper Lockers
                title: 'Sleeper Lockers',
                locations: []
            },
            { // Nerve Center
                title: 'Nerve Center',
                locations: []
            },
            { // The Plexus
                title: 'The Plexus',
                locations: []
            },
            { // The Barracks
                title: 'The Barracks',
                locations: []
            },
            { // Signal Relay
                title: 'Signal Relay',
                locations: []
            },
            { // Somniloquy
                title: 'Somniloquy',
                locations: []
            },
            { // The Airway
                title: 'The Airway',
                locations: []
            },
            { // String Relay B
                title: 'String Relay B',
                locations: []
            },
            { // 1005 Elevator
                title: '1005 Elevator',
                locations: []
            },
            { // Cryptogram Library
                title: 'Cryptogram Library',
                locations: []
            },
            { // The Arches
                title: 'The Arches',
                locations: []
            },
            { // Subliminal Media
                title: 'Subliminal Media',
                locations: []
            },
            { // Film Archives
                title: 'Film Archives',
                locations: []
            },
            { // New Growth
                title: 'New Growth',
                locations: []
            }
        ]
    },
    mutations: {
        ...vuexfireMutations
    },
    actions: {

    }
})
