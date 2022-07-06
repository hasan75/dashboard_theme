import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Payment from './components/Payment/Payment';
import ComponentDashboard from './components/ComponentDashboard/ComponentDashboard';
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders';
import Apperance from './components/Apperance/Apperance';
import Analytics from './components/Analytics/Analytics';
import Customers from './components/Customers/Customers';
import Messages from './components/Messages/Messages';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='dashboard' element={<Dashboard />}>
            <Route path='dashboard' element={<ComponentDashboard />} />
            <Route path='products' element={<Products />} />
            <Route path='orders' element={<Orders />} />
            <Route path='payment' element={<Payment />} />
            <Route path='appearance' element={<Apperance />} />
            <Route path='analytics' element={<Analytics />} />
            <Route path='customers' element={<Customers />} />
            <Route path='messages' element={<Messages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
