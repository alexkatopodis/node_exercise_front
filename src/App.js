import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './routes/Routes';
import { Wrapper, H1, Button } from './style';

const App = () => {
  return (
    <>
     <Wrapper>
        <H1>PCCW Plataform</H1>
        <Link to="/users">
          <Button>Users</Button>
        </Link>
        <Routes />
      </Wrapper>
    </>
  );
}

export default App;

