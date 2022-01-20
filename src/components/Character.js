import React from "react";
import MoreInfo from "./MoreInfo";
import { connect } from "react-redux";


const Character = (props) => {
    const {character} = props;

    return (
        <div>
            <div className='char-card'>

                <div className='name'>
                    <h2>{character.name}</h2>
                </div>

                <div className='photo'>
                    <div className="img"></div>
                </div>

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

const mapStateToProps = (state) => {
    return {
        character: state.character
    }
}

export default connect(mapStateToProps)(Character);