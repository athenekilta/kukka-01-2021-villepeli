import React from 'react'

const Lander = ({easyOnClick, mediumOnClick, hardOnClick}) => {
    return(
        <div>
            <div className="has-text-centered">
                Oletko valmis pelaamaan? Valitse vain vaikeustaso ja lähde remppaamaan! <br/>
                Pelissä on tarkoitus auttaa Villeä Olkkarin rempassa. Voit valita, mitä Olkkarille tulee pyyhkäisemällä haluamasi valinnan suuntaan.
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
                            <div className="is-size-7">
                                Himo vaikee. Pandemia polki killan rahavarat pohjamutii<br/>
                                ja vastaavasti joskus pandemian ollessa ohi Olkkarille,<br/> 
                                palaavat kiltalaiset odottavat Olkkarin olevan aktuaalinen pala taivasta.
                            </div>
                    </button>
                </div>
        </div>

    )
}


export default Lander