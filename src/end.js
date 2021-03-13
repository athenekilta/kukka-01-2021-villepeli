import React from 'react'
import pulla from './pics/pulla.jpg'
import ReloadButton from './ReloadButton'

const End = ({gameSettings, credits, integrity, lost, gameState}) => {

    const goodScore= <div className="blinking"> 'Wautsi, mahtisuoritus! Olit tosi säästävä, mutta tiesit myös milloin pitää vähän törsätä. Olkkari elää kunnian päiviänsä.'</div>
    
    const mediumScore = 'Olkkari on eheä, eikä budjettikaan ylittyt liikoja. Hyvin tehty.'
    const badScore = 'Nyt ei remppatavoitteet oikeen toteutunu. Sait yhden tähden. Yritäppä uudestaan.'
    const outOfFunds = 'Budjetin puolesta meni pahasti pakkaselle, nyt kilta on konkurssissa. Lataa sivu uudelleen ja yritä, josko osaisit paremmin.'
    const badInteg = 'Rahaa kyllä säästyi, mutta Olkkarihan on kuin yksi kaatopaikka. Yritäpä uudestaan.'


    const score = 2 * integrity + credits

    

    const realScore = ()  => {
        if(gameState === 'easy') {
            if(score >= 90) { 
                return(
                    <>
                        <div className="pyro">
                            <div className="before"></div>
                            <div className="after"></div>
                        </div>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <br/>
                        <b>{gameState.toUpperCase()}</b>
                        <br/>
                        <br/>
                        Kokeile uudestaan eri vaikeusasteella!
                    </>
            )}
            else if(score >= 70) { return(
                <>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <br/>
                <b>{gameState.toUpperCase()}</b>
                </>
            )}
            else if(score >= 50){
                <>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <br/>
                <b>{gameState.toUpperCase()}</b>
                </>
            }
            else {
                <>
                Pisteesi eivät riittäneet edes yhteen tähteen. Kokeile uudestaan!
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <br/>
                <b>{gameState.toUpperCase()}</b>
                </>
            }
        }
        else if(gameState === 'medium') {
            if(score >= 60) {   
                return(
                    <>
                    <div className="pyro">
                        <div className="before"></div>
                        <div className="after"></div>
                    </div>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <br/>
                <b>{gameState.toUpperCase()}</b>
                    </>
            )}
            else if(score >= 45) { return(
                <>
                
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <br/>
                <b>{gameState.toUpperCase()}</b>
                </>
            )}
            else if(score >= 30){
                <>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <br/>
                <b>{gameState.toUpperCase()}</b>
                </>
            }
            else {
                <>
                Pisteesi eivät riittäneet edes yhteen tähteen. Kokeile uudestaan!
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <br/>
                <b>{gameState.toUpperCase()}</b>
                </>
            }

        }
        else if(gameState === 'hard') {
            if(score >= 39) {
                return(
                    <>
                    Vedit pelin läpi täysin pistein kovimmalla vaikeusasteella.
                    Oot isoin päällikkö ikinä. Laita tästä ss Athenen e-urheilujengille ja oot automaattisesti avauksessa.
                    <div className="pyro">
                        <div className="before"></div>
                        <div className="after"></div>
                    </div>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <br/>
                        <b>{gameState.toUpperCase()}</b>
                        <br/>
                        <img width="300" height="36" src={pulla} alt="Pulla kuva"/>
                        
                        

                    </>
            )}
            else if(score >= 25) { return(
                <>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <br/>
                <b>{gameState.toUpperCase()}</b>
                </>
            )}
            else if(score >= 15){
                <>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <br/>
                <b>{gameState.toUpperCase()}</b>
                </>
            }
            else {
                <>
                Pisteesi eivät riittäneet edes yhteen tähteen. Kokeile uudestaan!
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <br/>
                <b>{gameState.toUpperCase()}</b>
                </>
            }
           

        }else <>rikki</>  
    }    

    const youLost = (
            <>
                <h3>Nyt valitsit hölmösti :( </h3><i><h4>{lost}</h4></i><h3> ei ollut oikea päätös. <br/> Yritäpä uudestaan</h3>
            </>
        )

    const winning = (
        <>
            <h2>Remppa valmis</h2>
            Pelasit pelin ja rahaa sinulla on <div className="has-text-weight-bold">{credits} kolikkoa</div> ja
            Olkkarin eheys on tällä hetkellä <div className="has-text-weight-bold">{integrity}</div>
            
            
           
        </>
    )    

    return(

        <div className="centered">

           
            {integrity < -50 ? youLost
                :
                <>
                    { credits < 0 ? outOfFunds : 
                    <div>
                        {winning} 
                        <br/>
                        <br/>
                        <h1>Tulos:</h1>
                        <br/>
                        {realScore()}
                        <br/>
                        
                    </div>
                    }
                </>
            }
         
            <ReloadButton />
        </div>
        )
}

export default End
