import React, {useState} from 'react'
import Card from './card.js'
import SwipeCard from './tinderCard.js'
import './index.css'
import TinderCard from 'react-tinder-card'



// initial values
const credits = 0
const olkkariIntegrity = 0


const db = [
  {
  question: 'Mitä maalia?',
  opt1:{ 
    desc:"Ihana vihreä",
    cost: -2,
    integ: 4,},
  opt2:{ 
    desc: "Oksen vihree",
    cost: -1,
    integ: -4}
},
{
  question: 'Laitetaanko premium nauloja?',
  opt1:{ 
    desc:"khyä",
    cost: -2,
    integ: 1,},
  opt2:{ 
    desc: "ei",
    cost: -1,
    integ: 0}
},
{
  question: 'Ankea valaistus, uudet lamput?',
  opt1:{ 
    desc:"Kyllä",
    cost: -3,
    integ: 2,},
  opt2:{ 
    desc: "ei",
    cost: -1,
    integ: -3}
},


]


const App = () => {

  const [ credit, setCredit ] = useState(credits)
  const [oIntegrity, setOIntegrity] = useState(olkkariIntegrity)
  const [cardInd, setCardInd] = useState(db.length-1)
  const [card, setCard] = useState(db[cardInd])


  const handleSwipe = (event) => {
    setCardInd(old => old-1)
    setCard(db[cardInd])

    setCredit(old => old+10)
    setOIntegrity(old => old+1)


  }

  const onSwipe = (direction) => {
    console.log(credit)
    console.log(cardInd)
    if(direction === 'left') {
     // console.log('vasurisisisi')

    }else if(direction === 'right'){
     // console.log('oikekke')
    }
    
  }
  




 const changeCredit = (card) => {
    console.log('change credit '+ card)
    setCredit(old => old + card.opt1.cost)  
 }

 const changeOIntegrity = (card) => {
   console.log('change integ ')
   setOIntegrity(oIntegrity + card.opt1.integ)
 }


  return(
    <div>
    <div className="centered"><h1>Villen suuri Olkkariremppa<br/>Auta villeä valitsemaan oikein</h1></div>
    <div className="p-4">
        <div className="centered">
          <span className="textBox">Massi: {credit}</span><span className="textBox"> Eheys: {oIntegrity}</span>  
        </div>
        </div>

 



<div className="card">     
        {db.map((q, i) => (

            <SwipeCard key ={q.question}
             card={q}
             handleSwipe={handleSwipe}
             //onSwipe={onSwipe}
             credit={credit}
             changeCredit={changeCredit}
             changeOIntegrity={changeOIntegrity}         
             >
            </SwipeCard>
        ))}
    </div>
    
    </div>  
    )
}


export default App;
