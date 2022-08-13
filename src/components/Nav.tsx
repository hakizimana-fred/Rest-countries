import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMoon } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../context/theme'

const Navbar: React.FC<{darkMode: boolean}> = ({darkMode}) => {

    const value = useContext(ThemeContext) as any

    return (
        <nav >
            <div className="container flex">
            <h1>Where in the world?</h1>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faMoon} onClick={() => value.switchTheme()}/>
                    <span>Dark mode</span>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar