import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './routes/Routes';
import { Wrapper, H1, Button } from './style';
import { Stack } from '@mui/material';

const App = () => {
  return (
    <>
     <Wrapper>
        <H1>PCCW Plataform</H1>
          <Stack sx={{ justifyContent: "center" }} className="stack" direction="row" spacing={1}>
            <Link to="/users">
              <Button>Users</Button>
            </Link>
          </Stack>
        <Routes />
      </Wrapper>
    </>
  );
}

export default App;

