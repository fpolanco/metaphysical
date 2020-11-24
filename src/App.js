import React, {useState} from 'react';
import CrystalContainer from './crystalContainer'
import './App.css';
import CrystalShowPage from './crystalShowPage';


function App() {
  const [crystal, setCrystal] = useState(null)

  const renderApp = () => {
    if (crystal) {
      return (
          <CrystalShowPage crystal={crystal} handleCrystalState={handleCrystalState}/>
      )
    } else {
      return (
      <CrystalContainer handleCrystalState={handleCrystalState} />
    )}

  }


  const handleCrystalState = (crystalObj) => {
    setCrystal(crystalObj)
  }

  return (
      <div className="App">
        <h1>Crystal Collection</h1>
        {renderApp()}
      </div>
  );
}

export default App;