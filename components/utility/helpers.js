const getCoordinates = (map) => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmFydDEyMzQxMiIsImEiOiJjazhobm9lMmowMjczM25tY2g5cngydHR6In0.xuM_M3yP-pxSVB9Ls2ZcOw';
     
    const coords = (e) => {
        const coords = JSON.stringify(e.lngLat.wrap());
        const trimmed = coords.replace(/[{}latng":]/g, "");
        const finalCoords = `[${trimmed}]`
        
        return finalCoords;
    }

    map.on('click', function(e) {
        
        document.getElementById('info').innerHTML =
        // e.point is the x, y coordinates of the mousemove event relative
        // to the top-left corner of the map
        // JSON.stringify(e.point) +
        // '<br />' +
        // e.lngLat is the longitude, latitude geographical position of the event
        // JSON.stringify(e.lngLat.wrap());

        coords(e);
    });
};

export { getCoordinates };