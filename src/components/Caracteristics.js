import React from 'react';
import { useHistory } from 'react-router-dom';

function Caracteristics() {
  const history = useHistory();

  const navigateToComponentB = () => {
    history.push('/selection');
  };

  return (
    <div>
      <h1>Caracteristics</h1>
      <div className='box'> Number of variants - 50 </div><br></br>
        <div className='box'> Dish Properties</div>
        <button className="opc"> Download </button>
      <button onClick={navigateToComponentB}>Selection</button>
    </div>
  );
}

export default Caracteristics;

