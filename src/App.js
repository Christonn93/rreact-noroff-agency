import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes } from 'react-router-dom';

// Importing views
import Home from './pages/Home';
import Listings from './pages/Listings';
import SignIn from './pages/SignIn';
import Register from './pages/Register';

function App() {

  return (
    <>
      <div className='container-fluid bg-theme-grey'>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Listings' element={<Listings />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
