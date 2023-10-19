import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/users/actions';
import CustomizedTable from '../../components/Table';
import Container from '@mui/material/Container';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Container maxWidth="md">
     <CustomizedTable users={users}/>
    </Container>
  );
}

export default Users;
