import React from "react";
import MoreInfo from "./MoreInfo";

const Character = (props) => {
    return (
        <div>
            <div className='char-card'>

                <div className='name'>
                    <h2>Character Name</h2>
                </div>

                <div className='photo'></div>

                <div className='base-info'>
                    <p>vision: hydro</p>
                    <p>Weapon: Bow</p>
                    <p>Nation: Snezhnaya</p>
                    <button>more info...</button>
                </div>
            </div> 
            <MoreInfo />
        </div>
      
    )
}

export default Character;