import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ParkingPage() {
    const [parkings, setParkings] = useState([]);
    const { id } = useParams();

    useEffect(() => {
    fetch('https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parkings-publics-nantes&q=&rows=50&facet=libcategorie&facet=libtype&facet=acces_pmr&facet=service_velo&facet=stationnement_velo&facet=stationnement_velo_securise&facet=moyen_paiement')
    .then((response) => response.json())
    .then((data) => setParkings(data.records));
    }, []);

    return (
        <div>
            {parkings.map((parking) => (
            <div key={parking.id} className="parking-card">
                <div>
                    <h1>{parking.fields.nom_complet} {id}</h1>
                    <iframe width='200' height='200' src={`https://maps.google.com/maps?q=${parking.fields.location}&hl=fr&z=14&amp&output=embed`} />
                </div>
            {/* Ajoutez d'autres informations importantes ici */}
            </div>
            ))}
        </div>
    );
}
export default ParkingPage;