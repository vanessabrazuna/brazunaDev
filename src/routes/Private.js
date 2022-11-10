import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom"

import { auth } from "../services/firebaseConnection"
import { onAuthStateChanged } from "firebase/auth" // Verificar se está logado

export default function Private({ children }) {
  const [loading, setLoading] = useState(true)
  const [signed, setSigned] = useState(false)

  useEffect(() => {
    async function checkLogin() {
      onAuthStateChanged(auth, (user) => {

        if(user) {
          const userData = {
            uid: user.uid,
            email: user.email
          }

          localStorage.setItem('@detailUser', JSON.stringify(userData)) // Salvando
          setLoading(false)
          setSigned(true)
        } else {
          setLoading(false)
          setSigned(false)
        }
      })
    }
    checkLogin()
  }, [])

  if(loading) {
    return (
      <div></div>
    )
  }

  if(!signed) {
    return <Navigate to="/login" />
  }

  return children
}
