import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [IsShow, setIsShow] = useState(false)
  const refLinks = useRef(null);
  const refLinksContainer = useRef(null);

  useEffect(() => {
    const linksHeight = refLinks.current.getBoundingClientRect().height;
    if (IsShow) {
      refLinksContainer.current.style.height = `${linksHeight}px`
    } else {
      refLinksContainer.current.style.height = '0px'
    }
    console.log(linksHeight);
  }, [IsShow])

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button type="button" className="nav-toggle" onClick={() => setIsShow(!IsShow)}>
            <FaBars />
          </button>
        </div>
        <div ref={refLinksContainer} className='links-container'>
          <ul className="links" ref={refLinks}>
            {
              links.map(link => {
                const { id, url, text } = link
                return (
                  <li key={id}><a href={url}>{text}</a></li>
                )
              })
            }
          </ul>
        </div>
        <ul className="social-icons">
          {
            social.map(link => {
              const { id, url, icon } = link
              return (
                <li key={id}><a href={url}>{icon}</a></li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
