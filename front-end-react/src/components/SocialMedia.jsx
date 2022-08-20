import React from 'react'
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="https://github.com/BahaaNimer">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://web.facebook.com/Nimer97/">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/bahaa-nimer-3b7a76130/">
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/b.97_nj/">
          <BsInstagram />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia