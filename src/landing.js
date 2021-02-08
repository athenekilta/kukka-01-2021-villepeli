import React from 'react'

const Lander = ({easyOnClick, mediumOnClick, hardOnClick}) => {
    return(
        <div>
            <br/>
            Oletko valmis pelaamaan? Valitse vain vaikeustaso ja lähde remppaamaan!
            <br/>
            <button onClick={easyOnClick}>Helppo, paljon massia ja kiltalaiset tyytyy vähään</button>
            <br/>
            <button onClick={mediumOnClick}>Semi vaikee</button>
            <br/>
            <button onClick={hardOnClick}>Himo vaikee, pandemia polki killan massit ja vastaavasti Olkkarille, joskus pandemian ollessa ohi, palaavat kiltalaiset kasvattavat odotuksensa taivaisiin asti. </button>


        </div>
    )
}


export default Lander