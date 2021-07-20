import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './views/home/Home'
import { Nav } from './components/nav/Nav'
import Breed from './views/breed/Breed'
import Landing from './views/landing/Landing'
import CreateBreed from './views/createBreed/CreateBreed'

function App() {
  const [input, setInput] = useState('')

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/">
          <Nav setInput={setInput} input={input} />
          <Route
            exact
            path="/home"
            render={() => <Home setInput={setInput} input={input} />}
          />
          <Route exact path="/create" component={CreateBreed} />
          <Route
            exact
            path="/detail/:id"
            render={({ match }) => <Breed id={match.params.id}></Breed>}
          ></Route>
        </Route>
      </Switch>
    </div>
  )
}

export default App
