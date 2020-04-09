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
            imageURL: 'https://picsum.photos/960/960',
            id: "e01d57a01eb0acec0d7bddc1d2a6c6b211",
            name: "pepsi/phila1",
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
            imageURL: 'data:image/png;base64,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',
            id: "3a0b87abcc115e3c87df56fc07fdbf6622",
            name: "pepsi/phila2",
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
        },

        {
            imageURL: 'https://picsum.photos/100/100',
            id: "f7fd9a633e376df43a195ba8d9a354ff33",
            name: "pepsi/phila3",
            coordinates:[
                [-75.16810339734404, 39.989466880462885],
                [-75.16729045963288, 39.98938074262014],
                [-75.16761909402672, 39.98781699059242],
                [-75.16843203173792, 39.98794288720805],
                [-75.16810339734404, 39.989466880462885],
            ],
            price: "5,000,000$",
            area: "2921942.38 m2",
            img: "pepsi.com/logo.png"
        },

        {
            imageURL: 'data:image/png;base64,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',
            id: "3a0b87abcc115e3c87df56fc07fdbf6622adsdas",
            name: "pepsi/phila2",
            coordinates:[
                [-75.21332954149469, 39.90798870183886],
                [-75.21268625116736, 39.90800799318424],
                [-75.21266110195688, 39.90764348736792],
                [-75.21330439228417, 39.907640441350225],
                [-75.21332954149469, 39.90798870183886],
            ],
            price: "5,000,000$",
            area: "2921942.38 m2",
            img: "pepsi.com/logo.png"
        },
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