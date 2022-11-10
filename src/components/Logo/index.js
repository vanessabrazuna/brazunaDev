import './logo.css'

import { Link } from 'react-router-dom'

export function Logo() {
  return (
    <Link to="/">
      <h1 
        className="logo">Brazuna
        <span className="logoText">Dev</span>
      </h1>
    </Link>
  )
}