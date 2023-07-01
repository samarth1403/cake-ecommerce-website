import React from 'react'
import ContactDetails from '../ContactDetails/ContactDetails'
import ShippingDetails from '../ShippingDetails/ShippingDetails'

const Checkout = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center items-center'>
       <ContactDetails/>
       <ShippingDetails/>
    </div>
  )
}

export default Checkout