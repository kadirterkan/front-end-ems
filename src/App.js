import './App.css';
import './EventView/Event.css';
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';
import EventView from './EventView/EventView';
import styled from 'styled-components';
import Login from './Login/Login.js';
import EventAdder from './EventView/EventAdder/EventAdder';


const Switcher = styled(Switch)`
  position:relative;
  margin-top:100px;
`
const styledul = styled.div`
  position:absolute;
  list-style-type: none;
  margin-top:70px;
`

const styleli = styled.li`
  position:absolute;
  margin-top:64px;
`


function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
        {/* <Route exact path=''/> */}
        <Route path='/events' exact component={EventView}>
        </Route>
        <Route path='/company' exact component={Login}>
        </Route>
        <Route path='/events/create-event' exact component={EventAdder}/>
        {/* <Route exact path='/mod-events'/>
        <Route exact path='/support'/> */}
        </Switch>
      </Router>
  );
}

export default App;