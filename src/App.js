import React from 'react'

// MODULE
import { Switch, Route, withRouter } from 'react-router-dom'

// PAGES
import Home from './Pages/Home'
import Detail from './Pages/Detail'

function App () {

  return (
    <div style={{width : "100%"}}>

      <Switch>
        <Route path="/:name" component={Detail}/>
        <Route path="/" component={Home} />
      </Switch>

    </div>
  )

}

export default withRouter(App);