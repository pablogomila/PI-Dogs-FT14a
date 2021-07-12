import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './views/home/Home';
import { Nav } from './components/nav/Nav';
import Breed from './views/breed/Breed';
import LandingPage from './views/landingPage/LandingPage';
import CreateBreed from './views/createBreed/CreateBreed';
import About from './views/about/About';

function App() {

  const [input, setInput] = useState('')

  return (
    <div className='App'>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path='/'>
          <Nav setInput={setInput} input={input} />
          <Route exact path="/home" render={() => <Home setInput={setInput} input={input} />} />
          <Route exact path="/create" component={CreateBreed} />
          <Route exact path="/about" component={About} />
          <Route exact path="/detail/:id" render={({ match }) => (
            <Breed id={match.params.id}></Breed>
          )}
          ></Route>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
