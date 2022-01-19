import React from "react";
import MoreInfo from "./MoreInfo";

const Character = (props) => {
    const character = props.character[0];
    console.log(character);
    return (
        <div>
            <div className='char-card'>

                <div className='name'>
                    <h2>{character.name}</h2>
                </div>

                <div className='photo'></div>

                <div className='base-info'>
                    <p>Vision: {character.vision}</p>
                    <p>Weapon: {character.weapon}</p>
                    <p>Nation: {character.nation}</p>
                    <button>more info...</button>
                </div>
            </div> 
            <MoreInfo />
        </div>
      
    )
}

export default Character;