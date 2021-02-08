import React, {useState} from 'react'
import TinderCard from 'react-tinder-card'
import Card from './card.js'



 
  

const SwipeCard = ({card, changeOIntegrity, changeCredit})=>{ //onSwipe}) => {
    
    const cost = card.opt1.cost
    const [dir, setDir] = useState('')


    const onSwipe = (direction) => {
    }

    const onCardLeftScreen = (direction) => {
        if(direction === 'right') changeCredit(card)
        else changeOIntegrity(card)

    }


   return(   
    <TinderCard className="card-content is-overlay" onSwipe={onSwipe}
        onCardLeftScreen={onCardLeftScreen}
        preventSwipe={[ 'up', 'down']}
        >
        
        <Card  question={card.question}
                            opt1={card.opt1}
                            opt2={card.opt2}
                            
                             />

     </TinderCard>
    )
}

export default SwipeCard