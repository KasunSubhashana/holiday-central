import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import PrivateRoute from './routes/privateRoute';
import LoginPage from './pages/loginPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<PrivateRoute><HomePage /></PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;
