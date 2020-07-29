import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import './styles.css';

const Modal = ({ onSubmit, onClose }) => {
  const [name, setName] = useState('');
  const [extension, setExtension] = useState(0);
  const [bikeLaneExtension, setBikeLaneExtension] = useState(0);

  const handleRegister = (event) => {
    event.preventDefault();
    onSubmit({ name, extension, bikeLaneExtension });
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === 'modal') {
      onClose();
    }
  };

  return (
    <div className='modal-container' id='modal' onClick={handleOutsideClick}>
      <div className='box'>
        <button className='close' onClick={onClose}>
          <AiOutlineClose />
        </button>
        <div className='content'>
          <h1>Registro de vias</h1>
          <form onSubmit={handleRegister}>
            <label>Nome</label>
            <input
              type='text'
              required
              value={name}
              placeholder='Avenida Boa Viagem'
              onChange={(event) => setName(event.target.value)}
            />
            <label>Extensão da via (km)</label>
            <input
              type='number'
              step='0.1'
              min='0'
              required
              value={extension}
              onChange={(event) => setExtension(event.target.value)}
            />
            <label>
              Extensão da ciclofaixa (km) <span>Se possuir</span>
            </label>
            <input
              type='number'
              step='0.1'
              min='0'
              required
              value={bikeLaneExtension}
              onChange={(event) => setBikeLaneExtension(event.target.value)}
            />
            <button type='submit'>Confirmar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
