import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/ParkingsPageStyles.css'


function ParkingsPage() {
    const [parkings, setParkings] = useState([]);

    useEffect(() => {
    fetch('https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parkings-publics-nantes&q=&rows=50&facet=libcategorie&facet=libtype&facet=acces_pmr&facet=service_velo&facet=stationnement_velo&facet=stationnement_velo_securise&facet=moyen_paiement')
    .then((response) => response.json())
    .then((data) => setParkings(data.records));
    }, []);

    return (
        <div>
            <h1 className='title-parking'>Parkings</h1>
            <div className='parking-cards-container'>
                {parkings.map((parking) => (
                <div key={parking.recordid} className="parking-card">
                    <div>
                        <h2>{parking.fields.nom_complet}</h2>
                        <div>
                            <a href=""><button>{parking.fields.telephone}</button></a>
                        </div>
                        <div className='capacite'>
                            <h4>capacite voiture : <span>{parking.fields.capacite_voiture}</span></h4>
                            <h4>capacite moto : <span>{parking.fields.capacite_moto}</span></h4>
                        </div>
                        <button><Link to={`/parkings/${parking.fields.idobj}`}>Détails</Link></button>
                    </div>
                {/* Ajoutez d'autres informations importantes ici */}
                </div>
                ))}
            </div>
        </div>
    );
}

export default ParkingsPage;