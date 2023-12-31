import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/users/actions';
import UserTable from '../../components/Table/TableUsers';
import Container from '@mui/material/Container';
import Filter from '../../components/Filter';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const [userInitial, setUserInitial] = useState(users)

  const applyFilter = (field, value) => {
    if (field && value) dispatch(fetchUsers({ [field]: value }));
  };

  const handleClearFilter = () => {
    dispatch(fetchUsers({}));
  };

  useEffect(() => {
    dispatch(fetchUsers({}))
  }, [dispatch]);

  useEffect(() => {
    if (users.length > 0 && userInitial.length === 0) {
      setUserInitial(users);
    }
  }, [users, userInitial]);

  return (
    <Container maxWidth="md">
      <Filter onFilter={applyFilter} onClear={handleClearFilter}/>
      <UserTable users={users} userInitial={userInitial}/>
    </Container>
  );
}

export default Users;
