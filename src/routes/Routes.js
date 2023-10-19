import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import { publicRoutes } from './index';

const Routes = () => {
  return (
    <ReactRoutes>
      {publicRoutes.map((route, idx) => (
        <Route
          path={route.path}
          element={<route.component />}
          key={idx}
        />
      ))}
    </ReactRoutes>
  );
}

export default Routes;
