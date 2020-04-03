export const state = () => ({
    mapSearcher: {
        visible: false
    },
    places: [
        {
            name: "medford",
            coordinates: [-74.82203674316509, 39.90104022513472],
            address: "13 Branch St, Medford, New Jersey 08055, United States",
            price: "1200",
            rooms: 2,
            baths: 1,
            policies: ["pets", "section 8 housing"],
            img: 1
        },
    
        {
            name: "lindenwold",
            coordinates: [-75.00056457519611, 39.82408974673274],
            address: "141 Broadway, Clementon, New Jersey 08021, United States",
            price: "850",
            rooms: 1,
            baths: 1,
            policies: ["pets"],
            img: 2
        },
    
        {
            name: "abington",
            coordinates: [-75.126907348634, 40.12087302391154],
            address: "2141 Kent Rd, Abington, Pennsylvania 19001, United States",
            price: "1400",
            rooms: 3,
            baths: 1,
            policies: ["pets", "section 8 housing"],
            img: 3
        },
    
        {
            name: "randor",
            coordinates: [-75.36448669433696, 40.04732367582426],
            address: "412 Belrose Ln, Wayne, Pennsylvania 19087, United States",
            price: "1900",
            rooms: 4,
            baths: 2,
            policies: ["smoking", "section 8 housing"],
            img: 4
        },
    
        {
            name: "mantua",
            coordinates: [-75.18046569824344, 39.792441246597264],
            address: "170 Ash Ave, Mantua, New Jersey 08051, United States",
            price: "925",
            rooms: 2,
            baths: 1,
            policies: ["section 8 housing"],
            img: 1
        },
    
        {
            name: "cinnaminson",
            coordinates: [-74.99433802752026, 39.99662350222391],
            address: "928 Burlington Pike, Riverton, New Jersey 08077, United States",
            price: "1000",
            rooms: 2,
            baths: 2,
            policies: ["pets", "section 8 housing"],
            img: 2
        }, 
    
        {
            name: "cherryHill",
            coordinates: [-75.0423292922568, 39.93543318502654],
            address: "692 Kenilworth Ave, Cherry Hill, New Jersey 08002, United States",
            price: "560",
            rooms: 1,
            baths: 1,
            policies: ["section 8 housing"],
            img: 3
        },
    
        {
            name: "swarthmore",
            coordinates: [-75.36052739186454, 39.90308344919325],
            address: "65 Oak Knoll Dr, Swarthmore, Pennsylvania 19081, United States",
            price: "4200",
            rooms: 5,
            baths: 3,
            policies: ["smoking", "pets", "section 8 housing"],
            img: 4
        },

        {
            name: "marple township",
            coordinates: [75.37801116935998, 39.99360444317338],
            address: "2736 Brierwood Rd, Broomall, Pennsylvania 19008, United States",
            price: "2250",
            rooms: 2,
            baths: 2,
            policies: ["pets", "section 8 housing"],
            img: 1
        },

        {
            name: "marple township",
            coordinates: [-75.37801116935998, 39.99360444317338],
            address: "16 Devon Dr, Newtown Square, Pennsylvania 19073, United States",
            price: "1645",
            rooms: 2,
            baths: 1,
            policies: ["section 8 housing"],
            img: 2
        },

        {
            name: "upper darby township",
            coordinates: [-75.285274615643, 39.944486268122574],
            address: "169 W Albemarle Ave, Lansdowne, Pennsylvania 19050, United States",
            price: "4500",
            rooms: 3,
            baths: 2,
            policies: ["smoking", "pets", "section 8 housing"],
            img: 3
        },

        {
            name: "haddon",
            coordinates: [-75.09591725465987, 39.88937241157279],
            address: "385 Lake Front St, Mount Ephraim, New Jersey 08059, United States",
            price: "4125",
            rooms: 3,
            baths: 2,
            policies: ["smoking", "pets", "section 8 housing"],
            img: 4
        },

        {
            name: "Manti St",
            coordinates: [-75.23380825595677, 40.03971360438061],
            address: "6946 Manti St, Philadelphia, Pennsylvania 19128, United States",
            price: "2700",
            rooms: 2,
            baths: 2,
            policies: ["pets", "section 8 housing"],
            img: 1
        },

        {
            name: "Gibbstown, New Jersey",
            coordinates: [-75.2843035522518, 39.81333197609709],
            address: "212 Co Rd 673, Gibbstown, New Jersey 08027, United States",
            price: "2300",
            rooms: 2,
            baths: 2,
            policies: ["smoking", "section 8 housing"],
            img: 3
        },

        {
            name: "Cherry Hill, New Jersey",
            coordinates: [-74.97744752110958, 39.88937241157549],
            address: "22 Imperial Dr, Cherry Hill, New Jersey 08003, United States",
            price: "2100",
            rooms: 2,
            baths: 1,
            policies: ["smoking", "pets", "section 8 housing"],
            img: 4
        },

        {
            name: "Philadelphia, Pennsylvania",
            coordinates: [-75.14447042413087, 39.98170024782709],
            address: "2006 N 6th St, Philadelphia, Pennsylvania 19122, United States",
            price: "3200",
            rooms: 3,
            baths: 1,
            policies: ["smoking", "pets", "section 8 housing"],
            img: 1
        },
        
        {
            name: "abington",
            coordinates: [-75.49114005425992,39.996580167876516],
            address: "2141 Kent Rd, Abington, Pennsylvania 19001, United States",
            price: "1400",
            rooms: 3,
            baths: 1,
            policies: ["pets", "section 8 housing"],
            img: 3
        },
        
        {
            name: "lindenwold",
            coordinates: [-75.10611342024708,39.99806798160529],
            address: "141 Broadway, Clementon, New Jersey 08021, United States",
            price: "1850",
            rooms: 1,
            baths: 1,
            policies: ["pets"],
            img: 2
        },

        {
            name: "randor",
            coordinates: [-75.16437722362838,39.89235267284968],
            address: "412 Belrose Ln, Wayne, Pennsylvania 19087, United States",
            price: "1900",
            rooms: 4,
            baths: 2,
            policies: ["smoking", "section 8 housing"],
            img: 4
        },

        {
            name: "cherryHill",
            coordinates: [-75.09640278634998,40.05160768502691],
            address: "692 Kenilworth Ave, Cherry Hill, New Jersey 08002, United States",
            price: "1120",
            rooms: 1,
            baths: 1,
            policies: ["section 8 housing"],
            img: 3
        },

        {
            name: "upper darby township",
            coordinates: [-75.285274615646, 39.944486268122345],
            address: "169 W Albemarle Ave, Lansdowne, Pennsylvania 19050, United States",
            price: "1275",
            rooms: 3,
            baths: 2,
            policies: ["smoking", "pets", "section 8 housing"],
            img: 3
        },


    ]
});

export const mutations = {
    showMapSearcher(state) {
        state.mapSearcher.visible = true;
    },
    hideMapSearcher(state) {
        state.mapSearcher.visible = false;
    }
}