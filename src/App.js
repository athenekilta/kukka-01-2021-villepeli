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
       easy:30,
       medium: 20,
       hard: 15
      },
    olkkariIntegrity:{
       easy: -3,
       medium: -5,
       hard: -10
      },
    goodScore: 1,
    mediumScore: -9,

  }




const db = [
  {
    question: 'Viimeisenä rempattavana kohteena on Olkkarin oma keittiöalue. Phabupöytä on vanhanaikainen ja vie tilaa. Poistetaanko suoraan?',
  opt1:{ 
    desc:"Pöytä ongelma-jätteeseen",
    cost: 0,
    integ: 5,},
  opt2:{ 
    desc: "Ei, pidetään ihana pöytä",
    cost: 0,
    integ: -100}
  },
  {
    question: 'Villeä ärsyttää, kun oma kahvikuppi pitäisi aina muistaa tiskata käytön jälkeen. Usein Villen kuppi jääkin lojumaan Olkkarilla sekalaisiin nurkkauksiin. Pitäisikö Olkkarille hankkia tiskikone?',
    opt1:{ 
      desc:"Kyllä, elämä on liian lyhyt tiskeihin",
      cost: -5,
      integ: 10,},
    opt2:{ 
      desc: "Ei, tää on kiva just näin",
      cost: 0,
      integ: 0}
  },
  {
    question: 'Isopaha IT-yritys tarjotaa Villelle sponssidiiliä remonttiin. Myyttekö Olkkarin sielun muutamasta pennosesta?',
    opt1:{ 
      desc:"Kyllä, onhan raha tärkeää.",
      cost: 4,
      integ: -3,},
    opt2:{ 
      desc: "Ei",
      cost: 0,
      integ: 0}
  },
  {
  question: 'Olkkarin rupiset seinät tarvitsevat uutta väriä. Millaisen maalin valitsette?',
  opt1:{ 
    desc:"Ihana, puistoisan vihreä",
    cost: -2,
    integ: 4,},
  opt2:{ 
    desc: "Oksen vihreä",
    cost: -1,
    integ: -4}
},
{
  question: 'Ville haluaa kasvattaa kiltahenkeä ja uskoo symbolisten voima-artefaktien kohottavaan vaikutukseen. Millainen patsas sopsisi parhaiten kosketeltavaksi Olkkarille?',
  opt1:{ 
    desc:"Parskalaali-patsas",
    cost: -3,
    integ: -100,},
  opt2:{ 
    desc: "Lihatarra-patsas",
    cost: -5,
    integ: 10}
},
{
  question: 'Sohvanurkkaus on vähän rahvaan oloinen, ja lattia tuo lähinnä mieleen ikean. Laitetaanko kunnon pähkinäpuiset lattialankut?',
  opt1:{ 
    desc:"Kyllä, tyyli on tärkeää",
    cost: -5,
    integ: 10,},
  opt2:{ 
    desc: "Ei, tää on kiva just näin",
    cost: 0,
    integ: 0}
},
{
  question: 'Athenelaiset ehtivät jo kyllästyä biljardiin. Pitäisikö Olkkarille viimein hankkia ilmakiekkopöytä?',
  opt1:{ 
    desc:"Kyllä",
    cost: -5,
    integ: 3,},
  opt2:{ 
    desc: "Ei",
    cost: 0,
    integ: 0}
},
{
  question: 'Ankea valaistus tulee uusia. Mikä on valaistusvalintanne?',
  opt1:{ 
    desc:"Discovalot",
    cost: -3,
    integ: 2,},
  opt2:{ 
    desc: "Kusen-keltaiset, kylmät lamput",
    cost: -1,
    integ: -3}
},
{
  question: 'Ville pohtii Athenelaisten syvimpiä haaveita. Tulisiko Olkkarille olla moottorisaha?',
  opt1:{ 
    desc:"Ei",
    cost: 0,
    integ: 0,},
  opt2:{ 
    desc: "Kyllä",
    cost: -3,
    integ: 5}
},
{
  question: 'Ville tarvitsee nauloja - valitsetteko kalliita vai halpoja?',
  opt1:{ 
    desc:"Halpoja",
    cost: -1,
    integ: 0,},
  opt2:{ 
    desc: "Kalliita, onhan killalla rahaa",
    cost: -2,
    integ: 1}
},


]


const App = () => {

  const [ credit, setCredit ] = useState(gameSettings.credits)
  const [oIntegrity, setOIntegrity] = useState(gameSettings.olkkariIntegrity)
  const [lander, setLander] = useState(true)
  const [isOver, setIsOver] = useState(false)
  const [lost, setLost] = useState('')



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
    setCredit(old => old + opt.cost)
    if(index===0 || opt.cost < -10){ 
      setIsOver(true)
    }
 }

 const changeOIntegrity = (opt) => {
   setOIntegrity(old => old + opt.integ)
   if(opt.integ < -50){
     setIsOver(true)
     setLost(opt.desc)

   } 
 }


  return(

    <div>
      <div className="centered"><h1>Villen suuri Olkkari remppa peli</h1></div>

        {lander ? <Lander easyOnClick={handleClickEasy} mediumOnClick={handleClickMedium} hardOnClick={handleClickHard}/>
        :
          <div>
              <div className="p-4">
                  <div className="centered">
                    <span className="textBox">Massi: {credit}</span><span className="textBox"> Eheys: {oIntegrity}</span>  
                  </div>
              </div>

          


              {isOver ? <End gameSettings={gameSettings} credits={credit} integrity={oIntegrity} lost={lost}/>
              :
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
        
            }

          </div>
    
}
</div>
)
}


export default App;
