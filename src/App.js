import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {
  Route,
  Routes
 } from 'react-router-dom'
import Model from './pages/Model';
import Obzor from './pages/Obzor';
function App() {
  return (
    <>
    <Navbar>
      <Routes>
        <Route path='/model' element={<Model/>} />
        <Route path='/obzor' element={<Obzor/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Navbar>
    </>
  );
}

export default App;
