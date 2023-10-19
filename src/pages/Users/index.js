import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/users/actions';
import UserTable from '../../components/Table';
import Container from '@mui/material/Container';
import Filter from '../../components/Filter';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const applyFilter = (field, value) => {
    if (field && value) dispatch(fetchUsers({ [field]: value }));
  };

  const handleClearFilter = () => {
    dispatch(fetchUsers({}));
  };

  useEffect(() => {
    dispatch(fetchUsers({}))
  }, [dispatch]);


  return (
    <Container maxWidth="md">
      <Filter onFilter={applyFilter} onClear={handleClearFilter}/>
      <UserTable users={users}/>
    </Container>
  );
}

export default Users;
