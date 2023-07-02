import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import People from '../../assets/people.svg';
import Arrow from '../../assets/arrow.svg';

import H1 from '../../components/Title';
import ContainerItens from '../../components/ContainerItens';
import Button from '../../components/Button';

import { Container, Image, Label, Input } from './styles';

const Home = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const baseUrl = 'https://api-register-user-xi.vercel.app/users/';

  const inputName = useRef();
  const inputAge = useRef();

  const addNewUser = async () => {
    const { data: newUser } = await axios.post(`${baseUrl}`, {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    history.push('/usuarios');
  };

  return (
    <Container>
      <Image alt='logo-image' src={People} />
      <ContainerItens>
        <H1>Olá!</H1>
        <Label>Nome</Label>
        <Input ref={inputName} placeholder='Nome' />
        <Label>Idade</Label>
        <Input ref={inputAge} placeholder='Idade' />
        <Button onClick={addNewUser}>
          Cadastrar <img alt='arrow' src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Home;
