import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Index from './views/Index/Index'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App
