import React from 'react'
import { Navbar } from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Caraousel from '../components/Caraousel'

export default function Home() {
  return (
    <div className='main'>
        <div><Navbar/></div>
        <div><Caraousel/></div>
        <div className='content'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </div>     
        <div><Footer></Footer></div>
        </div> 
  )
}
