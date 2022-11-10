import { useState, useEffect } from 'react'

import './home.css'

import { Social } from '../../components/Social'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

import { db } from '../../services/firebaseConnection'

import {
  getDocs,
  collection,
  query,
  orderBy,
  doc,
  getDoc
} from 'firebase/firestore'

export default function Home() {
  const [links, setLinks] = useState([])
  const [socialLinks, setSocialLinks] = useState({})

  useEffect(() => {

    function loadLinks() {
      const linksRef = collection(db, 'links')
      const queryRef = query(linksRef, orderBy('created', 'asc')) // Busca ordenada

      getDocs(queryRef) 
      .then((snapshot) => {
        let list = []

        snapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().bg,
            color: doc.data().color
          })
        })
        setLinks(list)
      })
    }
    loadLinks()
  },[])

  useEffect(() => {
    function loadSocialLinks() {
      const docRef = doc(db, 'social', 'link')
      
      getDoc(docRef) 
      .then((snapshot) => {

        if(snapshot.data() !== undefined) {
          setSocialLinks({
            facebook: snapshot.data().facebook,
            instagram: snapshot.data().instagram,
            youtube: snapshot.data().youtube
          })
        }
      })
    }
    loadSocialLinks()
  },[])

  return (
    <div className="homeContainer">
      <h1>Vanessa Brazuna</h1>
      <span>Veja meus links 👇</span>

      <main className="links">

        { links.map((item) => (
          <section 
            key={item.id}
            className="linkArea"
            style={{ backgroundColor: item.bg }}
          >
           <a href={item.url} target="_blank">
              <p 
                className="linkText"
                style={{ color: item.color }}>
                {item.name}
              </p>
            </a>
          </section>
        ))}
      
        {links.length !== 0 && Object.keys(socialLinks).length > 0 && (
          <footer>
            <Social url={socialLinks?.facebook}>
              <FaFacebook size={35} color="#FFF"/>
            </Social>

            <Social url={socialLinks?.instagram}>
              <FaInstagram size={35} color="#FFF"/>
            </Social>

            <Social url={socialLinks?.youtube}>
              <FaYoutube size={35} color="#FFF"/>
            </Social>
          </footer>
        )}
      </main>
    </div>
  )
}

