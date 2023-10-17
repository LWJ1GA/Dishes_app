import React from 'react';
import './Caracteristics.css';
import { Link } from 'react-router-dom';

export const Caracteristics =()=> {

  return (
    <div className="container">
      <div className='box'> Number of variants - 50 </div><br></br>
        <div className='box'> Dish Properties</div>
        <div className='buttons'>
        <button className="opc"> Download </button>
        <Link to='/selection'><button className="opc">Selection</button></Link>
        </div>

    </div>
  );
}



