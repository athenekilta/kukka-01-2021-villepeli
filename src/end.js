import React from 'react'

const End = ({gameSettings, credits, integrity, lost}) => {

    const goodScore= <div className="blinking"> 'Wautsi, mahtisuoritus! Olit tosi säästävä, mutta tiesit myös milloin pitää vähän törsätä. Olkkari elää kunnian päiviänsä.'</div>
    
    const mediumScore = 'Olkkari on eheä, eikä budjettikaan ylittyt liikoja. Hyvin tehty.'
    const badScore = 'Nyt ei remppatavoitteet oikeen toteutunu. Sait yhden tähden. Yritäppä uudestaan.'
    const outOfFunds = 'Budjetin puolesta meni pahasti pakkaselle, eikä Villellä ole varaa jatkaa remppaa. Lataa sivu uudelleen ja yritä, josko onnais nyt.'
    const badInteg = 'Rahaa kyllä säästyi, mutta Olkkarihan on kuin yksi kaatopaikka. Yritäpä uudestaan.'


    const score = credits+integrity

    const scoreText = score > gameSettings.goodScore ? goodScore
        : score > gameSettings.mediumScore ? mediumScore :  badScore
    


    const youLost = (
            <>
                <h1>Nyt valitsit hölmösti {lost} ei ollut oikea päätös <br/> Yritäpä uudestaan</h1>
            </>
        )

    const winning = (
        <>
            <h1>Remppa valmis</h1>
            Pelasit pelin ja rahaa sinulla on <div className="has-text-weight-bold">{credits} kolikkoa</div> ja
            Olkkarin eheys on tällä hetkellä <div className="has-text-weight-bold">{integrity}</div>
            {scoreText}
        </>
    )    
    

    return(

        <div className="centered">

            {score > gameSettings.goodScore ? 
                    <div className="pyro">
                        <div className="before"></div>
                        <div className="after"></div>
                    </div>
                : null
            }
            {integrity < -50 ? youLost
                :
                <>
                    { credits < 0 ? outOfFunds : winning }
                </>
            }

        </div>
        )
}

export default End