import logo from './logo.svg';
import './App.css';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import { Switch } from 'react-router'
function NotFound() {
  return (
    <div>
      <h1>Not found</h1>
      <Link to="/Home"> GO Home?</Link>
    </div>
  )
}
function Home() {
  return (
    <h1>Hello world</h1>
  )
};
function Chips() {
  return (
    <h1>Chips</h1>
  )
};
function Soda() {
  return (
    <h1>Soda</h1>
  )
};
function Redbull() {
  return (
    <h1>Redbull</h1>
  )
}
function App() {
  return (
    <div className="App">
      <nav>
        <NavLink activeClassName='active' to="/">Home</NavLink>
        <NavLink activeClassName='active' to="/Chips">Chips</NavLink>
        <NavLink activeClassName='active' to="/Soda">Soda</NavLink>
        <NavLink activeClassName='active' to="/Redbull">Redbull</NavLink>
        <NavLink to="#parag" activeClassName='active'> P </NavLink>
        <a href="#parag">p</a>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Chips" element={<Chips />} />
        <Route path="/Soda" element={<Soda />} />
        <Route path="/RedBull" element={<Redbull />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <div>h</div>
      <p id="parag">Hello world</p>
    </div >
  );
}

export default App;
