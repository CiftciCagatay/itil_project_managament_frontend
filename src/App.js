import React from 'react'

import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { Home as HomeIcon } from '@material-ui/icons'

import Drawer from './components/Drawer'

// Routes
import Home from './routes/Home'
import ProjectDetails from './routes/ProjectDetails'

const App = () => {
  const routes = [
    { path: '/', name: 'Anasayfa', component: Home, icon: <HomeIcon /> }
  ]

  return (
    <BrowserRouter>
      <CssBaseline />
      <Drawer routes={routes}>
        <Switch>
          <Route path="/projects/:id" component={ProjectDetails} />
          <Route path="/" component={Home} />
        </Switch>
      </Drawer>
    </BrowserRouter>
  )
}

export default App
