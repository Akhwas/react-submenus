import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {data,closeSubMenu} = useGlobalContext()
  
  return <section className='hero'>
    <div className='hero-center' onMouseOver={closeSubMenu}>

      <article className='hero-info'>
        <h1>
          payments infrastructure <br></br>
          for the internet
        </h1>
        <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
        <button className='btn'>start now</button>
      </article>
      <article className='hero-images'>
        <img src={phoneImg} className='phone-img'></img>
      </article>
    </div>
  </section>
}

export default Hero
