import React from 'react'
import pete from './pete.jfif'
import nails from './nails-677031_640.jpg'
import meat from "./liha.webp"
import kupit from './kupit.jpg'
import bilis from './bilis.jpg'
import baskeriVille from './baskeriVille.jpg'
import dippiVille from './dippiVille.jpg'
import hyväksyntäVille from './hyväksyntäVille.jpg'
import jopuLaulaaVille from './jopuLaulaaVille.jpg'
import lamppuVille from './lamppuVille.jpg'
import pöytä from './pöytä.jpg'
import villeHaamu from './villeHaamu.jpg'
import olkkari from './olkkari.jpg'



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