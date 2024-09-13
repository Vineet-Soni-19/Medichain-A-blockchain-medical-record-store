import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Form/>}/>
    </Routes>
    </>
  );
}

export default App;
