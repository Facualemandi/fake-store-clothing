import React from 'react'
import { MdSearchOff } from "react-icons/md";
import './NoFound.css'

const NoFound = () => {
  return (
      <>
         <section className='section_no_found'>
            <MdSearchOff className='icon_found'/>
            <p> Lo sentimos, no encontramos lo que buscas</p>
         </section>
      </>
  )
}

export default NoFound