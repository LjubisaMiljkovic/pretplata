import React from 'react'
import { useSelector } from 'react-redux';

function PayPages() {
    const {subscription} = useSelector((state) => state.paketStore)
  return (
    // izrada uplatnice u toku
    <div className='grid grid-cols-2'>
        <div className='bg-green-100 border-1'>
            <h1>Uplatiac: Ime i prezime</h1>
            <h1>svrha uplate: uplata pretplate u iznosu od {subscription}</h1>
            <h1>Primalac Danilo Vesovic</h1>
        </div>
        <div>
          <h1>Sifra placanja 221</h1>
          <h1>Iznos {subscription}</h1>
          <h2>Racun primaoca: xxxxxxxxxxxxxxxxx</h2>
        </div>
        
    </div>
  )
}

export default PayPages