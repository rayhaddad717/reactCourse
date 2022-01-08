import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import FoodSearch from './FoodSearch';
import { Navigate, useNavigate } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import history from 'history/browser';

function Food() {
  let { name } = useParams();
  //if the name contains a digit then redirect to home
  if (/\d/.test(name)) { return <Navigate replace to="/" /> }
  const url = `https://source.unsplash.com/1600x900/?${name}`;
  return (
    <div className="Food">
      <Link to="/"> Home</Link>
      <img src={url} alt={name} style={{ width: '50%' }} />
      <h3>I love {name}</h3>
    </div>
  )
};
function Page404() {
  return (
    <h1>Not found</h1>
  )
};
function Nav() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/food/eggs');
  }
  return (
    <nav>
      <button onClick={handleClick}>Go eggs</button>
      <BackButton />
    </nav>
  )
};
function BackButton() {
  return (
    <button onClick={() => history.back()}>Back</button>
  )

}

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        {//will only hit /food/name
          /*will not hit /food/name/something */}
        {/* <Route path="/food/:name" element={<Food name={'egg'} />} /> */}
        <Route path="/food" element={<FoodSearch />} />
        < Route path="/food/:name" element={[<Food />, <FoodSearch />]} />
        <Route path="/" element={<Navigate replace to="/food" />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div >
  );
}

export default App;
