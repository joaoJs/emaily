import React, {useEffect} from 'react'
import { BrowserRouter, Route } from 'react-router-dom' 
import Header from './Header'
import Landing from './Landing'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Dashboard from './Dashboard'

const SurveyNew = () => <h2>SurveyNew</h2>

function App(props) {
    useEffect(() => {
        props.fetchUser()
    }, [])

    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Landing}></Route>
                    <Route exact path="/surveys" component={Dashboard}></Route>
                    <Route path="/surveys/new" component={SurveyNew}></Route>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default connect(null, actions)(App);