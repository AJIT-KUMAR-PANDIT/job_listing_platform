import React from 'react'
import NavCss from './Nav.module.css'

const Nav = () => {
    return (
        <>
        <div className={NavCss.nav}>
        <br/>
            <span>
            <span className={NavCss.logo}>Jobfinder</span>
            <span className={NavCss.right}>
                <button className={NavCss.login}>Login</button>
                &nbsp;&nbsp;&nbsp;
                <button className={NavCss.register}>Register</button>
            </span>
            </span>
        </div>
        </>
    )
}

export default Nav;