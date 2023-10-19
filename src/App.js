import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './routes/Routes';

const App = () => {
  return (
    <div className='app'>
      <div className="wrapper">
        <h1>PCCW Plataform</h1>
        <Link to="/users">
          <button>Users</button>
        </Link>
        <Routes />
      </div>
    </div>
  );
}

export default App;

