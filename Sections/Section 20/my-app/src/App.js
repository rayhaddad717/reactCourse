import './App.css';
import Dog from './Dog'
import Home from './Home'
import Contact from './Contact'
import { Route, Routes, NavLink } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <nav>
        <NavLink activeClassName="active" to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/dogs">Dogs</NavLink>
        <NavLink activeClassName="active" to="/contact">Contact</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<Dog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div >
  );
}

export default App;
