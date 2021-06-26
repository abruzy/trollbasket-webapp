import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { BUY_ROUTE, HOME_ROUTE } from '../utils/routes'

const Home = React.lazy(() => import('../pages/home'))
const Buy = React.lazy(() => import('../pages/buy'))

const Routes = () => {
  return (
    <Switch>
      <Route exact path={HOME_ROUTE} component={Home} />
      <Route exact path={BUY_ROUTE} component={Buy} />
    </Switch>
  )
}

export default Routes
