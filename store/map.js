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
        // marker example
        {
            name: "medford",
            coordinates:[
                [-75.19425956282942, 39.96053457328256],
                [-75.08240561985154, 39.96798934901872],
                [-75.07559711897461, 39.837786877919655],
                [-75.24629596238886, 39.8284505582935],
                [-75.19425956282942, 39.96053457328256]
            ],
            address: "13 Branch St, Medford, New Jersey 08055, United States",
            price: "1200",
            rooms: 2,
            baths: 1,
            policies: ["pets", "section 8 housing"],
            img: 1
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