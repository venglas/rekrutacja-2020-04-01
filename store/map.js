export const state = () => ({
    resize: 0,
    mapSearcher: {
        visible: false,
        slectedProperty: false,
        searcherSortingVisibility: true
    },
    places: [
        // marker example
        {
            name: "medford",
            coordinates: [-74.82203674316509, 39.90104022513472],
            address: "13 Branch St, Medford, New Jersey 08055, United States",
            price: "1200",
            rooms: 2,
            baths: 1,
            policies: ["pets", "section 8 housing"],
            img: 1
        }
    ],
    polygons: [
        // polygon example
        {
            id: "e01d57a01eb0acec0d7bddc1d2a6c6b2",
            name: "pepsi/phila",
            coordinates:[
                [-75.19476468634954, 39.9625282591694],
                [-75.1340310468226, 39.95859858486472],
                [-75.15020039241097, 39.90113911574903],
                [-75.20935653480743, 39.908399815273384],
                [-75.19476468634954, 39.9625282591694]
            ],
            price: "20,000,000$",
            area: "24921942.38 m2",
            img: "pepsi.com/logo.png"
        },

        {
            id: "3a0b87abcc115e3c87df56fc07fdbf66",
            name: "pepsi/phila",
            coordinates:[
                [-75.3241194510571, 39.94559882251647],
                [-75.28862576561933, 39.96011002478522],
                [-75.27324516859595, 39.93864444707603],
                [-75.31228822257805, 39.924431134132874],
                [-75.3241194510571, 39.94559882251647]
            ],
            price: "5,000,000$",
            area: "2921942.38 m2",
            img: "pepsi.com/logo.png"
        }
    ]
});

export const mutations = {
    showMapSearcher(state) {
        state.mapSearcher.visible = true;
    },
    hideMapSearcher(state) {
        state.mapSearcher.visible = false;
    },
    setSelectedProperty(state, condition) {
        state.mapSearcher.slectedProperty = condition;
    },
    increaseResize(state, width) {
        state.resize = width;
    },
    showSearcherSorting(state){
        state.mapSearcher.searcherSortingVisibility = true;
    },
    hideSearcherSorting(state){
        state.mapSearcher.searcherSortingVisibility = false;
    },
    changePrice(state, obj){
        let i = 0;
        
        for(const property of state.places) {
            if(JSON.stringify(property.coordinates) === JSON.stringify(obj.coordinates) ) {
                state.places[i].price = 675463565768798
            }
            i++;
        }
    }
};

export const actions = {
    async changeProertyPrice({ commit }, obj) {
        commit('changePrice', obj);
    },
    async setSelectedProperty({ commit }, condition) {
        commit('setSelectedProperty', condition);
    }   
};

export const getters = {
    getMapSearcherVisiblility: state => state.mapSearcher.visible,
    searcherSortingVisibility: state => state.mapSearcher.searcherSortingVisibility,
    getProperties: state => state.places,
    getResize: state => state.resize
}