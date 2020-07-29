import React, { useState, useEffect } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

import Card from '../../components/Card';
import Modal from '../../components/Modal';

import api from '../../services/api';
import logo from '../../assets/logo.svg';

import './styles.css';

const Home = () => {
  const [roads, setRoads] = useState([]);
  const [newRoad, setNewRoad] = useState([]);
  const [name, setName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`roads/?name=${name}`);
      setRoads(response.data);
    };
    fetchData();
  }, [name, newRoad]);

  const handleRegister = async (data) => {
    try {
      const response = await api.post('roads', data);

      if (response.data.errors) {
        alert('Dado(s) inválido(s)');
      } else {
        setNewRoad(response.data);
        handleModal();
      }
    } catch (error) {
      alert('Erro ao adicionar registro');
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`roads/${id}`);
      setRoads(roads.filter((element) => element.id !== id));
    } catch (error) {
      alert('Erro ao remover registro');
    }
  };

  const handleModal = () => {
    isModalVisible ? setIsModalVisible(false) : setIsModalVisible(true);
  };

  return (
    <div className='home-container'>
      <div className='header'>
        <button onClick={handleModal}>
          Novo registro
          <span>
            <FiPlusCircle />
          </span>
        </button>
      </div>
      <div className='logo'>
        <img src={logo} alt='Pedala Recife' />
      </div>
      <div className='search'>
        <form>
          <input
            type='search'
            value={name}
            placeholder='Pesquisar via'
            onChange={(event) => setName(event.target.value)}
          />
        </form>
      </div>
      <div className='list'>
        <ul>
          {roads.map((road) => (
            <li key={road.id}>
              <Card onClick={handleDelete} road={road} />
            </li>
          ))}
        </ul>
      </div>
      <div className='modal'>
        {isModalVisible ? <Modal onSubmit={handleRegister} onClose={handleModal} /> : null}
      </div>
    </div>
  );
};

export default Home;
