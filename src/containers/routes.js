import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { HOME_ROUTE } from '../utils/routes'

const Home = React.lazy(() => import('../pages/home'))

const Routes = () => {
  return (
    <Switch>
      <Route exact path={HOME_ROUTE} component={Home} />
    </Switch>
  )
}

export default Routes
