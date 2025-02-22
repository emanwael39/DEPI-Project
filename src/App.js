
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import Main from './pages/main';
import Calls from './pages/calls';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/main' element={<Main/>}/>
          <Route path='/calls' element={<Calls/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
