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
            <span className='message-count'>26</span>
          </a>
          <a href='#'>
            <span class='material-icons-sharp'>logout</span>
            <h3>Logout</h3>
          </a>
        </div>
      </aside>
      <main>
        <h1>Dashboard</h1>
        <div className='date'>
          <input type='date' />
        </div>
        <div className='insights'>
          {/* sales  */}
          <div className='sales'>
            <span className='material-icons-sharp'>analytics</span>
            <div className='middle'>
              <div className='left'>
                <h3>Total Sales</h3>
                <h1>$21,000</h1>
              </div>
              <div className='progress'>
                <svg>
                  <circle cx='38' cy='38' r='36'></circle>
                </svg>
                <div className='number'>
                  <p>81%</p>
                </div>
              </div>
            </div>
            <small className='text-muted'>Last 24 hours</small>
          </div>
          {/* expenses */}
          <div className='expenses'>
            <span className='material-icons-sharp'>bar_chart</span>
            <div className='middle'>
              <div className='left'>
                <h3>Total Expenses</h3>
                <h1>$21,000</h1>
              </div>
              <div className='progress'>
                <svg>
                  <circle cx='38' cy='38' r='36'></circle>
                </svg>
                <div className='number'>
                  <p>81%</p>
                </div>
              </div>
            </div>
            <small className='text-muted'>Last 24 hours</small>
          </div>
          {/* income  */}
          <div className='income'>
            <span className='material-icons-sharp'>stacked_line_chart</span>
            <div className='middle'>
              <div className='left'>
                <h3>Total Income</h3>
                <h1>$21,000</h1>
              </div>
              <div className='progress'>
                <svg>
                  <circle cx='38' cy='38' r='36'></circle>
                </svg>
                <div className='number'>
                  <p>44%</p>
                </div>
              </div>
            </div>
            <small className='text-muted'>Last 24 hours</small>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
