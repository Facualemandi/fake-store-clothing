import React from 'react';
import './ModalAddCart.css';
import { FcApproval } from 'react-icons/fc';

const ModalAddCart = () => {
  


  return (
     <> 
        <section className='modal'>
                <section className='section_modal'>
                   
                    <FcApproval className='icon_check'/>
                    <p>Producto Agregado</p>
                </section>
        </section>
     
     </>
  )
}

export default ModalAddCart