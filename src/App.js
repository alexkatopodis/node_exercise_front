import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeLayout, changeLayoutWidth, changeSidebarTheme, changeTopbarTheme } from './store/layout/actions';
import Routes from './routes/Routes';

function App() {
  const dispatch = useDispatch();
  const layoutType = useSelector(state => state.layout.layoutType);
  const layoutWidth = useSelector(state => state.layout.layoutWidth);
  const leftSideBarTheme = useSelector(state => state.layout.leftSideBarTheme);
  const topbarTheme = useSelector(state => state.layout.topbarTheme);


  useEffect(() => {
    dispatch(changeLayout(layoutType));
    dispatch(changeLayoutWidth(layoutWidth));
    dispatch(changeSidebarTheme(leftSideBarTheme));
    dispatch(changeTopbarTheme(topbarTheme));
  }, [dispatch, layoutType, layoutWidth, leftSideBarTheme, topbarTheme]);

  return (
    <div className={`App ${layoutType}`}>
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

