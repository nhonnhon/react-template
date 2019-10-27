import React from 'react'

import './App.css'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from 'pages/Home'

// class Home extends React.PureComponent {
//   return <div>Home</div>
// }
// function About() {
//   return <div>About</div>
// }

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            About
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
