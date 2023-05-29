import React, {useEffect} from 'react'
import { BrowserRouter, Route } from 'react-router-dom' 
import Header from './Header'
import { connect } from 'react-redux'
import * as actions from '../actions'

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>


function App(props) {
    useEffect(() => {
        props.fetchUser()
    }, [])

    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header name="Emaily" />
                    <Route exact path="/" component={Landing}></Route>
                    <Route exact path="/surveys" component={Dashboard}></Route>
                    <Route path="/surveys/new" component={SurveyNew}></Route>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default connect(null, actions)(App);