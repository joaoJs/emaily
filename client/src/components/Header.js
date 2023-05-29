import React from 'react'

function Header({name}) {
    return (
        <nav>
            <div className="nav-wrapper">
                <a className="left brand-logo">
                    {name}
                </a>
                <ul className="right">
                    <li>
                        <a href="/auth/google">Login with google</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header