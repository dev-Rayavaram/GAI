import React from 'react';
import "./Style/App.scss"
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Summary from './components/Summary'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
              <Navbar />
              <Switch>
                <Route path = '/' exact component = {LandingPage} />
                <Route path ='/summary' component={Summary} /> 
              </Switch>
          </BrowserRouter> 
    </div>
  );
}

export default App;
