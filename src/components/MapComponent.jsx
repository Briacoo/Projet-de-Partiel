import React, { useEffect, useState } from 'react';

function MapComponent() {
    const [coordinates, setCoordinates] = useState([]);

    useEffect(() => {
    fetch('https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parkings-publics-nantes&q=&rows=50&facet=libcategorie&facet=libtype&facet=acces_pmr&facet=service_velo&facet=stationnement_velo&facet=stationnement_velo_securise&facet=moyen_paiement') // Replace this with the actual API URL
    .then((response) => response.json())
    .then((data) => {
        const coords = data.records.map((record) => record.fields.location);
        setCoordinates(coords);
    });
    }, []);

    return (
        <div>
        {/* Render the coordinates or use them in any way you want */}
        {coordinates.map((coord, index) => (
        <p key={index}>
            Latitude: {coord[0]}, Longitude: {coord[1]}
        </p>
    ))}
    </div>
    );
}

export default MapComponent;