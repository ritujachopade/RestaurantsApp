//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Login.css';
import Login from './login';
import Dashboard from './Dashboard';


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
      </header>
    </div>
  );
}

export default App;*/



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Routes>
    </Router>
  );
}

export default App;

export const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
    </div>
  );
};

