import {state} from "@/store/map.js";

const drawPolygons = (map) => {
    for (const polygon of state().polygons) {
        addSource(map, polygon);
        addLayer(map, polygon);
    }
};

const addSource = (map, polygon) => {
    map.addSource(polygon.id, {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'geometry': {
                'type': 'Polygon',
                'coordinates': [polygon.coordinates]
            }
        }
    });
}

const addLayer = (map, polygon) => {
    map.addLayer({
        'id': polygon.id,
        'type': 'fill',
        'source': polygon.id,
        'layout': {},
        'paint': {
            'fill-color': '#088',
            'fill-opacity': 0.65
        }
    });
};

export default drawPolygons;