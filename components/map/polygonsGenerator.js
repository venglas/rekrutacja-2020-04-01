import {state} from "@/store/map.js";

const drawPolygons = (map) => {
    var checking_style_status = false;
    map.on('styledata', function (e) {
        if (checking_style_status){
            return;
        } else {
            checking_style_status = true;
            check_style_status();

            for (const polygon of state().polygons) {
                addSource(map, polygon);
                loadImage(map, polygon);
                addLayer(map, polygon);
            }
        }
    });

    function check_style_status() {
        if (map.isStyleLoaded()) {
            checking_style_status = false;
        } else {
            setTimeout(function() {check_style_status();}, 200);
            return;
        }
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
            'fill-pattern': polygon.id,
        }
    });
};

const loadImage = async (map, polygon) => {
    await map.loadImage(polygon.imageURL,
        (err, image) => {
            if (err) throw err;
            map.addImage(polygon.id, image);
        }
    )
};

export default drawPolygons;