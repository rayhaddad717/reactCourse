import logo from './logo.svg';
import './App.css';
import ZenQuote from './ZenQuote';
import GitHubUserInfo from './GitHubUserInfo';
function App() {
  return (
    <div className="App">
      <ZenQuote />
      <GitHubUserInfo username="rayhaddad717" />
    </div>
  );
}

export default App;
