import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import Avatar from '../../assets/avatar.svg';
import Arrow from '../../assets/arrow.svg';
import Trash from '../../assets/trash.svg';

import H1 from '../../components/Title';
import ContainerItens from '../../components/ContainerItens';
import Button from '../../components/Button';

import { Container, Image, User } from './styles';

const Users = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const baseUrl = 'https://api-register-user-xi.vercel.app/users/';

  useEffect(() => {
    const fetchUsers = async () => {
      const { data: newUsers } = await axios.get(`${baseUrl}`);

      setUsers(newUsers);
    };

    fetchUsers();
  }, []);

  const deleteUser = async (userId) => {
    await axios.delete(`${baseUrl}${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  };

  const goBackPage = () => {
    history.push('/');
  };

  return (
    <Container>
      <Image alt='logo-image' src={Avatar} />
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>
        <div>
          <ul>
            {users.map((user) => (
              <User key={user.id}>
                <p>{user.name}</p>
                <p>{user.age}</p>
                <button onClick={() => deleteUser(user.id)}>
                  <img alt='trash' src={Trash} />
                </button>
              </User>
            ))}
          </ul>
        </div>

        <Button isBack={true} onClick={goBackPage}>
          <img alt='arrow' src={Arrow} /> Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;
