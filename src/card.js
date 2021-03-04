import React from 'react'
import pete from './pete.jfif'
import nails from './nails-677031_640.jpg'
import meat from "./liha.webp"
import villeFlex from './villeFlex.jpg'
//questions and answers

const Card = ({
                question,
                opt1,
                opt2,
                picPath
                }) => {



  const kuva = picPath === 'nails' ? nails : picPath === 'meat' ? meat : villeFlex

  return (
    <div className="columns is-centered">
        <div className="column is-half">
        <div className="card">
        <div className="card-content">
            <div className="media">
            <div className="media-left">
                <figure className="image is-48x48">
                <img src={pete} alt="Placeholder image"/>
                </figure>
            </div>
                <p className="title is-4 has-text-black">Ville</p>
            </div>

            <div className="content">
            <div className="has-text-weight-bold has-text-black">{question}</div>
            </div>
        </div>
        <div className="card-image">
            
            <figure className="image is-3by1">
            <img className="has-ratio" width="640" height="36" src={kuva} alt="Placeholder image"/>
            </figure> 
        </div>
        <footer className="card-footer-item">
                <i className="arrow left"></i><div className= "box">{opt2.desc}<br/><b>Hinta: </b>{Math.abs(opt2.cost)}</div> 
                <div className="box mx-5">{opt1.desc}<br/><b>Hinta: </b>{Math.abs(opt1.cost)}</div><i className="arrow right"></i>
    </footer>
</div>
    </div>
    </div>
)
}

export default Card;