const markersCoordinates = [
    {
        name: "medford",
        coordinates: [-74.82203674316509, 39.90104022513472],
        message: "Hello"
    },

    {
        name: "lindenwold",
        coordinates: [-75.00056457519611, 39.82408974673274],
        message: "Yup"
    },

    {
        name: "abington",
        coordinates: [-75.126907348634, 40.12087302391154],
        message: "boom"
    },

    {
        name: "randor",
        coordinates: [-75.36448669433696, 40.04732367582426],
        message: "Single"
    },

    {
        name: "mantua",
        coordinates: [-75.18046569824344, 39.792441246597264],
        message: "Hello"
    },

    {
        name: "cinnaminson",
        coordinates: [-74.99433802752026, 39.99662350222391],
        message: "something"
    }, 

    {
        name: "cherryHill",
        coordinates: [-75.0423292922568, 39.93543318502654],
        message: "ugh"
    },

    {
        name: "swarthmore",
        coordinates: [-75.36052739186454, 39.90308344919325],
        message: "Click"
    }
];

const createFeatures = () => {
    const features = [];

    for (const marker of markersCoordinates) {
        features.push({
            'type': 'Feature',
            'properties': {
                'message': marker.message,
                'iconSize': [60, 60]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': marker.coordinates
            }
        });
    };

    return features;
};

var geojson = () => {
    return {
        'type': 'FeatureCollection',
        'features': createFeatures()     
    };
}

export { geojson };