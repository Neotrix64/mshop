import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Shop from './pages/Shop'
import Lenis from '@studio-freight/lenis'

function App() {

  useEffect( () =>{
  const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  }, [])

  return (
    <>
    <Shop/>
    </>
  )
}

export default App
