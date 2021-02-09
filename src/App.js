import React, {useState} from 'react'
import SwipeCard from './tinderCard.js'
import './index.css'
import Lander from './landing.js'
import End from './end.js'



/* initial values 
opt1 = swipe right
opt2 = swipe left


*/

//game settings in this file for simplicity
// score atm =  integ + credits
// fixaa scoret eri vaikeuksilla
const gameSettings = {
    credits:{
       easy:100,
       medium: 50,
       hard: 25
      },
    olkkariIntegrity:{
       easy: -4,
       medium: -6,
       hard: -10
      },
    goodScore: 1,
    mediumScore: -9,

  }




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
    desc: "Ei",
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
    desc: "Ei",
    cost: -1,
    integ: -3}
},


]


const App = () => {

  const [ credit, setCredit ] = useState(gameSettings.credits)
  const [oIntegrity, setOIntegrity] = useState(gameSettings.olkkariIntegrity)
  const [lander, setLander] = useState(true)
  const [isOver, setIsOver] = useState(false)


 const handleClickEasy = () => {
   setCredit(gameSettings.credits.easy)
   setOIntegrity(gameSettings.olkkariIntegrity.easy)
   setLander(false)
   
 } 

 const handleClickMedium = () => {
   setCredit(gameSettings.credits.medium)
   setOIntegrity(gameSettings.olkkariIntegrity.medium)
   setLander(false)
} 

const handleClickHard = () => {
  setCredit(gameSettings.credits.hard)
  setOIntegrity(gameSettings.olkkariIntegrity.hard)
  setLander(false)
} 

//also takes care of tracking the index of card, i.e. notifying when the last card is played
 const changeCredit = (opt, index) => {
    console.log(index)
    setCredit(old => old + opt.cost)
    if(index===0) setIsOver(true)
 }

 const changeOIntegrity = (opt) => {
   setOIntegrity(old => old + opt.integ)
 }


  return(

    <div>
      <div className="centered"><h1>Villen suuri Olkkari remppa peli</h1></div>

        {lander ? <Lander easyOnClick={handleClickEasy} mediumOnClick={handleClickMedium} hardOnClick={handleClickHard}/>
        : credit < 0 ? null  
          :  
            <>
              <div className="p-4">
                  <div className="centered">
                    <span className="textBox">Massi: {credit}</span><span className="textBox"> Eheys: {oIntegrity}</span>  
                  </div>
              </div>

          



              <div className="card">     
                    {db.map((q, i) => (

                        <SwipeCard key ={q.question}
                        card={q}
                        index={i}
                        changeCredit={changeCredit}
                        changeOIntegrity={changeOIntegrity}         
                        >
                        </SwipeCard>
                    ))}
              </div>
            </>
            }

          {(isOver || credit < 0) ? <End gameSettings={gameSettings} credits={credit} integrity={oIntegrity}/> : null}

    </div>
            
    )
}


export default App;
