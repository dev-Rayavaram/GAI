import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
              <Navbar />


              <Switch>
                <Route path = '/' exact component = {LandingPage} />
                {/* <Route path ='/more-info' component={} />  */}
              </Switch>
          </BrowserRouter> 
      </header>
    </div>
  );
}

export default App;
