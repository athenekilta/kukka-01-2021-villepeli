import React from 'react'

const End = ({gameSettings, credits, integrity}) => {

    const goodScore = 'Wautsi, mahtisuoritus! Olit tosi säästävä, mutta tiesit myös milloin pitää vähän törsätä. Olkkari elää kunnian päiviänsä.'
    const mediumScore = 'Olkkari on eheä, eikä budjettikaan ylittyt liikoja. Hyvin tehty.'
    const badScore = 'Nyt ei remppatavoitteet oikeen toteutunu. Sait yhden tähden. Yritäppä uudestaan.'
    const outOfFunds = 'Muuten hyvä, mutta budjetin puolesta meni pahasti pakkaselle, eikä Villellä ole varaa jatkaa remppaa. Yritäpä uudestaan.'
    const badInteg = 'Rahaa kyllä säästyi, mutta Olkkarihan on kuin yksi kaatopaikka. Yritäpä uudestaan.'


    const score = credits+integrity

    const scoreText = score > gameSettings.goodScore ? goodScore
        : score > gameSettings.mediumScore ? mediumScore :  badScore
    


    return(
        <div>
            <h1>Remppa valmis</h1>
             Pelasit pelin ja rahaa sinulla on <div className="has-text-weight-bold">{credits} kolikkoa</div> ja
             Olkkarin eheys on tällä hetkellä <div className="has-text-weight-bold">{integrity}</div>
             {credits < 0 ? outOfFunds : scoreText}


        </div>
        )
}

export default End