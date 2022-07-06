import React, { useEffect, useRef, useState } from 'react';
// import { useRouteMatch } from 'react-router';
// import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import person from '../../assets/images/person.png';
import Apperance from '../../components/Apperance/Apperance';
import Payment from '../../components/Payment/Payment';

const Dashboard = () => {
  // const { url, path } = useRouteMatch();

  const [lightTheme, setLightTheme] = useState(true);
  const asideRef = useRef(null);

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  };
  const url = '/dashboard';

  useEffect(() => {
    document.body.classList.toggle('dark-theme-variables', !lightTheme);
  }, [lightTheme]);

  const showSideMenue = () => {
    asideRef.current.style.display = 'block';
  };

  const closeSideBar = () => {
    asideRef.current.style.display = 'none';
  };

  return (
    <div className=''>
      <div className='container'>
        {/* aside  */}
        <aside ref={asideRef}>
          <div className='top'>
            <div className='logo'>
              <img src={logo} alt='ekhoneshop' />
            </div>
            <div className='close' id='close-btn' onClick={closeSideBar}>
              <span className='material-icons-sharp'>close</span>
            </div>
          </div>
          <div className='sidebar'>
            <NavLink to={`dashboard`} className='a'>
              <span className='material-icons-sharp'>dashboard</span>
              <h3>Dashboard</h3>
            </NavLink>
            <NavLink to={`products`} className='a'>
              <span class='material-icons-sharp'>grid_view</span>
              <h3>Products</h3>
            </NavLink>
            <NavLink to={`orders`} className='a'>
              <span class='material-icons-sharp'>note_alt</span>
              <h3>Orders</h3>
            </NavLink>
            <NavLink to={`payment`} className='a'>
              <span className='material-icons-sharp'>person_outline</span>
              <h3>Payment</h3>
            </NavLink>
            <NavLink to={`analytics`} className='a'>
              <span className='material-icons-sharp'>analytics</span>
              <h3>Analytics</h3>
            </NavLink>
            <NavLink to={`customers`} className='a'>
              <span className='material-icons-sharp'>person_outline</span>
              <h3>Customers</h3>
            </NavLink>
            <NavLink to={`messages`} className='a'>
              <span className='material-icons-sharp'>question_answer</span>
              <h3>Messages</h3>
              <span className='message-count'>26</span>
            </NavLink>
            <NavLink to={`logout`} className='a'>
              <span className='material-icons-sharp'>logout</span>
              <h3>Logout</h3>
            </NavLink>
          </div>
        </aside>
        {/* main  */}
        <main>
          {/* top right for profile and toggle button  */}
          <div className='right'>
            <div className='top'>
              <button id='menu-btn' onClick={showSideMenue}>
                <span className='material-icons-sharp'>menu</span>
              </button>
              <div
                className='theme-toggler'
                id='theme-toggler'
                onClick={toggleTheme}
              >
                <span
                  className={`material-icons-sharp ${
                    lightTheme ? 'active' : ''
                  }`}
                >
                  light_mode
                </span>
                <span
                  className={`material-icons-sharp ${
                    !lightTheme ? 'active' : ''
                  }`}
                >
                  dark_mode
                </span>
              </div>
              <div className='profile'>
                <div className='info'>
                  <p>
                    Hey, <b>Hasan</b>
                  </p>
                  <small className='txt-muted'>Admin</small>
                </div>
                <div className='profile-photo'>
                  <img src={person} alt='' />
                </div>
              </div>
            </div>
          </div>
          {/* pages to go  */}
          {/* HERE IS THE CODE  */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
