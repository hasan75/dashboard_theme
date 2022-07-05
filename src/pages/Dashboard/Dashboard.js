import React from 'react';
import logo from '../../assets/images/logo.png';

const Dashboard = () => {
  return (
    <div className='container'>
      <aside>
        <div className='top'>
          <div className='logo'>
            <img src={logo} alt='ekhoneshop' />
          </div>
          <div className='close' id='close-btn'>
            <span class='material-icons-sharp'>close</span>
          </div>
        </div>
        <div className='sidebar'>
          <a href='#'>
            <span class='material-icons-sharp'>dashboard</span>
            <h3>Dashboard</h3>
          </a>
          <a href='#' className='active'>
            <span class='material-icons-sharp'>person_outline</span>
            <h3>Payment</h3>
          </a>
          <a href='#'>
            <span class='material-icons-sharp'>fitbit</span>
            <h3>Apperance</h3>
          </a>
          <a href='#'>
            <span class='material-icons-sharp'>analytics</span>
            <h3>Analytics</h3>
          </a>
          <a href='#'>
            <span class='material-icons-sharp'>person_outline</span>
            <h3>Customers</h3>
          </a>
          <a href='#'>
            <span class='material-icons-sharp'>question_answer</span>
            <h3>Messages</h3>
            <span className='message-Count'>26</span>
          </a>
          <a href='#'>
            <span class='material-icons-sharp'>logout</span>
            <h3>Logout</h3>
          </a>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
