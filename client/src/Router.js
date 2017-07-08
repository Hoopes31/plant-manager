import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import Settings from './components/Settings'

const Router = () => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/settings" component={Settings} />
    </Switch>
)

export default Router