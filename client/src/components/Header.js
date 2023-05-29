import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Header(props) {
    // console.log(props)
    const renderContent = () => {
        if (props.auth === null) return 
        if (props.auth === false) {
            return (
                <li>
                    <a href="/auth/google">Login with google</a>
                </li>
            )
        } else {
            return (
                <li>
                    <a href="/api/logout">Logout</a>
                </li>
            )
        }
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to={props.auth ? '/surveys' : '/'} className="left brand-logo">
                    Emaily
                </Link>
                <ul className="right">
                    {renderContent()}
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = ({auth}) => {return {auth}}

export default connect(mapStateToProps)(Header)