import React from 'react';


export default function Greeter() {
  const sayHelloInNativeTongue = () => {
    const lang = (navigator.language || navigator.userLanguage)
    switch (lang) {
      case 'en-US':
        return 'Hello'
      case 'de-DE':
        return 'Guten Tag'
      default:
        return '你好' // Ni hao
    }
  }
  return <h1>The greeter says: {sayHelloInNativeTongue()}</h1>
}
