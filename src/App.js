import './App.css';
import './components/Navbar/Navbar.css';
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Sidebar/>
        <Switch>
          <Route path=''/>
          <Route path='/events'/>
          <Route path='/mod-events'/>
          <Route path='/support'/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
