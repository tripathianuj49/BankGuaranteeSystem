import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
    <header>
    <h2 className="heading">BANK GUARANTEE MASTER DETAILS</h2>
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">Create</Link></li>
                <li><Link to="/show">Show</Link></li>
            </ul>
        </nav>
    </header>
    </>
  )
}
