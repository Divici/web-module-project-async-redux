import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Character from './components/Character';

function App(props) {
  const { character, loading} = props;

  return (
    <div className="App">
      <h1>Genshin Impact Tartaglia</h1>

      <Character character={character}/>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    character: state.character,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(App);