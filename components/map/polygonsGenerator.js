const drawPolygons = (map, id) => {
    addSource(map, id);
    addLayer(map, id);
};

const addSource = (map, id) => {
    map.addSource(id, {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-75.19425956282942, 39.96053457328256],
                    [-75.08240561985154, 39.96798934901872],
                    [-75.07559711897461, 39.837786877919655],
                    [-75.24629596238886, 39.8284505582935],
                    [-75.19425956282942, 39.96053457328256]
                ]]
            }
        }
    });
}

const addLayer = (map, id) => {
    map.addLayer({
        'id': id,
        'type': 'fill',
        'source': id,
        'layout': {},
        'paint': {
            'fill-color': '#088',
            'fill-opacity': 0.8
        }
    });
};

export default drawPolygons;