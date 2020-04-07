import {state} from "@/store/map.js";

const createFeatures = () => {
    const features = [];

    for (const marker of state().places) {
        features.push({
            'type': 'Feature',
            'properties': {
                'price': marker.price
            },
            'geometry': {
                'type': 'Point',
                'coordinates': marker.coordinates
            }
        });
    };

    return features;
};

const createFeaturesPolygons = () => {
    const features = [];

    for (const marker of state().polygons) {
        features.push({
            'type': 'Feature',
            'properties': {
                'price': marker.price
            },
            'geometry': {
                'type': 'Polygon',
                'coordinates': marker.coordinates
            }
        });
    };

    return features;
};

// var geojson = () => {
//     return {
//         'type': 'FeatureCollection',
//         'features': createFeatures()     
//     };
// }

var geojson = () => {
    return {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'geometry': {
                'type': 'Polygon',
                'coordinates': createFeaturesPolygons()
            }
        }
    };
}

export { geojson };