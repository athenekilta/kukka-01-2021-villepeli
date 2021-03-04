import React from 'react'

const Lander = ({easyOnClick, mediumOnClick, hardOnClick}) => {
    return(
        <div>
            <div className="has-text-centered">
                 <br/>
                Pelissä on tarkoitus auttaa Villeä Olkkarin rempassa. Voit valita, mitä Olkkarille tulee pyyhkäisemällä <br/> haluamasi valinnan suuntaan.
                Pelissä on tarkoituksena valita parhaat vaihtoehdot Olkkarille, niin rahan kuin eheydenkin kannalta.<br/> Kun peli on pelattu, tulokseesi vaikuttavat jäljellä oleva raha ja Olkkarin lopullinen eheys.
                <br/><br/> Oletko valmis pelaamaan? Valitse vain vaikeustaso ja lähde remppaamaan! 
            </div>
            <br/>
                <div className="buttons has-addons is-centered">
                    <button className="button is-success is-large" onClick={easyOnClick}>Helppo</button>
                </div>
                <div className="buttons has-addons is-centered">
                    <button className="button is-warning is-large" onClick={mediumOnClick}>Semi vaikee</button>
                </div>
                <div className="buttons has-addons is-centered">
                    <button className="button is-danger is-large" onClick={hardOnClick}>
                            <p style={{fontSize: "10px"}}>
                                Vaikee. Pandemia polki killan rahavarat pohjamutii<br/>
                                ja vastaavasti joskus pandemian ollessa ohi Olkkarille,<br/> 
                                palaavat kiltalaiset odottavat sen olevan <br/> aktuaalinen pala taivasta.
                            </p>
                    </button>
                </div>
        </div>

    )
}


export default Lander