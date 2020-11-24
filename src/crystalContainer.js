import React, {useState, useEffect}  from 'react';
import CrystalCard from './crystalCard'


const CrystalContainer = props => {
    const [value, setValue] = useState([])
    const [crystal, setCrystal] = useState({})
  

 
    useEffect(() => {
    fetch("http://localhost:3000/crystals")
     .then(r => r.json())
     .then(data => setValue(data))
    }, [] //
    );
 
    return (
        <div className="crystal-collection">
          {value.map((crystal) =>(     
             <CrystalCard crystal={crystal} key={crystal.id} handleCrystalState={props.handleCrystalState}
             />
           ))}
        </div>
    );
    }
 
    // return (
    //     <div>
    //     { <div className="crystal-collection"  >
    //       {value.map((crystal) =>(     
    //          <CrystalCard crystal={crystal} key={crystal.id} handleCrystalState={props.handleCrystalState}
    //          />
            
    //        ))}
    //     </div> }
    //     </div>
    // );
    // }

 
    

export default CrystalContainer;