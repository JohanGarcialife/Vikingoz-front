import React, { useState } from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import WhatsApp from '../components/WhatsApp';

export default function BasicLayout(props) {
    const { children, active } = props;    
  return (
    <>
      <Header active={active} />
      <WhatsApp />
      {children}
      <Footer />
    </>
  )
}

