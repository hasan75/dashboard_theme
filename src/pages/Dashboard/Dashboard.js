import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/images/logo.png';
import person from '../../assets/images/person.png';

const Dashboard = () => {
  // const sideMenu = document.querySelector('aside');
  // const menuBtn = document.querySelector('#menu-btn');
  // const closeBtn = document.querySelector('#close-btn');
  // const themeToggler = document.querySelector('#theme-toggler');

  // menuBtn.addEventListener('click', () => {
  //   sideMenu.style.display = 'block';
  // });
  // closeBtn.addEventListener('click', () => {
  //   sideMenu.style.display = 'none';
  // });

  // themeToggler.addEventListener('click', () => {
  //   document.body.classList.toggle('dark-theme-variables');
  //   themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  //   themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
  // });

  const [lightTheme, setLightTheme] = useState(true);
  const asideRef = useRef(null);

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  };

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
          <div className='recent-orders'>
            <h2>Recent Orders</h2>
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Product Number</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Najim Phone</td>
                  <td>25689</td>
                  <td>Due</td>
                  <td className='warning'>Pending</td>
                  <td className='primary'>Details</td>
                </tr>
                <tr>
                  <td>Najim Phone</td>
                  <td>25689</td>
                  <td>Due</td>
                  <td className='warning'>Pending</td>
                  <td className='primary'>Details</td>
                </tr>
                <tr>
                  <td>Najim Phone</td>
                  <td>25689</td>
                  <td>Due</td>
                  <td className='warning'>Pending</td>
                  <td className='primary'>Details</td>
                </tr>
                <tr>
                  <td>Najim Phone</td>
                  <td>25689</td>
                  <td>Due</td>
                  <td className='warning'>Pending</td>
                  <td className='primary'>Details</td>
                </tr>
              </tbody>
            </table>
            <a href='#'>Show All</a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
