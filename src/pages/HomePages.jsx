import '../Styles/HomePagesStyles.css'
import '../Styles/variables.css'
import { Link } from 'react-router-dom';

function HomePages() {
    return ( 
        <>
            <div className='main'>
                <div className='section-1'>
                    <div className='bg'>
                        <div>
                            <h2 className='title'>Payez et gérez votre stationnement à distance avec <span className='nameapp'>Trouve Ma Place</span></h2>
                            <div className='search'>
                                <label for="parking-search">Rechercher un Parking :</label>
                                <br />
                                <br />
                                <input type="search" id="site-search" name="q" />
                            </div>
                        </div>
                        <img className='image' src="/map.png" alt="" />
                    </div>
                    <div className='section-1-1'>
                        <p className='description'>Avec <span className='nameapp'>Trouve Ma Place</span>, gagnez du temps et faites des économies. Garez-vous dans un parking en réservant et profitez d'une expérience de stationnement 100% sans contact.</p>
                        <div className='mobile'>
                            <div className='store'>
                                <img src="/icon-download-app-store-fr.svg" alt="Bouton download App Store" />
                                <img src="/icon-download-play-store-fr.svg" alt="Bouton download Play Store" />
                            </div>
                            <div>
                                <p>Disponible sur Androïde et IOS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-2'>
                    <div className=''>
                        <h1>Trouvez votre place <br /><span>en quelques clics</span></h1>
                    </div>
                    <div className='card'>
                        <h1>Dans un parking</h1>
                        <div className='card-main'>
                            <p><span>Garez</span> votre voiture pour une courte ou longue durée en toute <span>sécurité</span> dans nos parkings partenaires, équipés de caméras de surveillance et de gardiens de sécurité dans les <span>Pays de la Loire</span>.</p>
                            <button><Link to="/parkings">Réserver une place</Link></button>
                            <img src="/map.png" alt="Image d'un calendrier" />
                        </div>
                    </div>
                </div>
                <div className='pass'>
                    <div>
                        <h1>Une durée, <span>un prix</span></h1>
                        <button>Voir tous les pass</button>
                    </div>
                    <div>
                    <div className='card'>
                        <h1>Pass Journée</h1>
                        <div className='card-main'>
                            <p>Pour vos déplacements quotidiens, nous avons créé un forfait de stationnement à la journée, valable de minuit à minuit. Vous connaissez le coût de votre stationnement à l'avance et vous bénéficiez d'un prix réduit, jusqu'à 30%, par rapport au tarif payé sur place.</p>
                            <button>Acheter</button>
                            <img src="/daily-calendar.svg" alt="Image d'un calendrier" />
                        </div>
                    </div>
                    <div className='card'>
                        <h1>Pass Semaine</h1>
                        <div className='card-main'>
                            <p>Profitez d'un forfait de 7 jours à prix fixe dans le parking de votre choix, à partir de 25€. Entrez et sortez autant de fois que vous le souhaitez.</p>
                            <button>Acheter</button>
                            <img src="/weekly-calendar.svg" alt="Image d'un calendrier" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default HomePages;