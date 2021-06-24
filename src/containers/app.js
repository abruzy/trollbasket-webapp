import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import Loading from '../components/loading'

const NavBar = React.lazy(() => import('../components/navbar'))

function App () {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes />
        <NavBar />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
