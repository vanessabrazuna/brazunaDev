import './header.css'

import { BiLogOut } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { auth } from '../../services/firebaseConnection'
import { signOut } from 'firebase/auth'

export function Header() {

  // Deslogar o usuário
  async function handleLogout() {
    await signOut(auth) 
  }

  return (
    <header className='adminHeader'>
      <nav className="navHeader">
        <button onClick={handleLogout}>
          <BiLogOut size={28} color="#DB2629" />
        </button>

        <Link to="/admin">
          Links
        </Link>

        <Link to="/admin/social">
          Redes sociais
        </Link>
      </nav>
    </header>
  )
}