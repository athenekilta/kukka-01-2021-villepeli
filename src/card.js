import React from 'react'
import nails from './pics/nails-677031_640.jpg'
import meat from "./pics/liha.png"
import kupit from './pics/kupit.jpg'
import bilis from './pics/bilis.jpg'
import baskeriVille from './pics/baskeriVille.jpg'
import dippiVille from './pics/dippiVille.jpg'
import hyväksyntäVille from './pics/hyväksyntäVille.jpg'
import jopuLaulaaVille from './pics/jopuLaulaaVille.jpg'
import lamppuVille from './pics/lamppuVille.jpg'
import pöytä from './pics/pöytä.jpg'
import villeHaamu from './pics/villeHaamu.jpg'
import olkkari from './pics/olkkari.jpg'



const Card = ({
                question,
                opt1,
                opt2,
                picPath
                }) => {



    var kuva = nails

    if (picPath === 'nails') kuva = nails
    else if (picPath === 'meat') kuva = meat 
    else if(picPath === 'kupit') kuva = kupit
    else if(picPath === 'bilis') kuva = bilis
    else if(picPath === 'baskeriVille') kuva = baskeriVille
    else if(picPath === 'dippiVille') kuva = dippiVille
    else if(picPath === 'hyväksyntäVille') kuva = hyväksyntäVille
    else if(picPath === 'jopuLaulaaVille') kuva = jopuLaulaaVille
    else if(picPath === 'lamppuVille') kuva = lamppuVille
    else if(picPath === 'pöytä') kuva = pöytä
    else if(picPath === 'villeHaamu') kuva = villeHaamu
    else if(picPath === 'olkkari') kuva = olkkari



  const getRich = picPath === 'hyväksyntäVille' 

  return (
    <div className="columns is-centered">
        <div className="column is-half">
        <div className="card">
        <div className="card-content">
           

            <div className="content">
            <div className="has-text-weight-bold has-text-black">{question}</div>
            </div>
        </div>
        <div className="card-image">
            
            <figure className="image is-3by2">
                <img src={kuva} alt="kaunis kuva"/>

            </figure> 

        </div>
        <footer className="card-footer-item">
                <i className="arrow left"></i><div className= "box">{opt2.desc}<br/><b>Hinta: </b>{Math.abs(opt2.cost)}</div> 
                <div className="box mx-5">{opt1.desc}<br/><b>Hinta:</b> {getRich ? 'Saat' : ''} {Math.abs(opt1.cost)}</div><i className="arrow right"></i>
    </footer>
</div>
    </div>
    </div>
)
}

export default Card;