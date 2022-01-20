import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getCharacter } from './actions';
import './App.css';
import Character from './components/Character';

function App(props) {
  const {loading, error, getCharacter} = props;

  useEffect(()=>{
    getCharacter();
  }, []);

  if(error !== ''){
    return <h2>{error}</h2>;
  }

  return (
    <div className="App">
      <h1>Genshin Impact Tartaglia</h1>

      {
        loading ? <h3>Loading Character Info</h3> : <Character />
      }
      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, {getCharacter})(App);