import React from 'react';
import "./Style/App.scss"
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Page from './components/Page'
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
              <Navbar />
              <Switch>
                <Route path = '/' exact component = {LandingPage} />
                <Route path ='/summary' component={Page} /> 
              </Switch>
          </BrowserRouter> 
    </div>
  );
}

export default App;
