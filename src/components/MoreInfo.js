import React from "react";
import { connect } from "react-redux";

const MoreInfo = (props) => {
    const {character} = props;
    return (
        <div className='more-info'>
            <p>More information</p>
            <p>Affiliation: {character.affiliation}</p>
            <p>Description: </p>
            {character.description}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        character: state.character
    }
}

export default connect(mapStateToProps)(MoreInfo);


