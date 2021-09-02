import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Article from './pages/article'
import NewArticle from './pages/newArticle'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/article/new">
          <NewArticle />
        </Route>
        <Route path="/article/:id">
          <Article />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
