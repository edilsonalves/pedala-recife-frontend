import React from 'react';
import { FiTrash } from 'react-icons/fi';

import './styles.css';

const Card = ({ onClick, road }) => {
  const handleDelete = () => {
    onClick(road.id);
  };

  return (
    <div className='card-container'>
      <div className='text'>
        <h1>{road.name}</h1>
        <p>Extensão: {road.extension} Km</p>
        {road.hasBikeLane ? (
          <p>
            {road.bikeLanePercentage}% de ciclofaixa ({road.bikeLaneExtension} km)
          </p>
        ) : (
          <p>Não possui ciclofaixa</p>
        )}
      </div>
      <div className='button'>
        <button onClick={handleDelete}>
          <span>
            <FiTrash />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
