import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Admin from './Admin';
// import Error from './Error';

function App() {
  return (
    <>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/admin' element={<Admin />} />
        {/* <Route path='*' element={<Error />} /> */}
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
