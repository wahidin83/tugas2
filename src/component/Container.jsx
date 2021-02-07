import React from 'react'
import Biodata from './Biodata'
import Kendaraan from './Kendaraan'
import Resolusi from './Resolusi'
import Tombol from './Tombol'
import UserAccount from './UserAccount'
import './Container.css'

const Container = () => {
  return (
    <div className='bingkai'>
      <Biodata />
      <UserAccount />
      <Resolusi />
      <Tombol />
      <Kendaraan jenis='Motor' merk1='Honda' merk2='Yamaha' merk3='Suzuki' />
      <Kendaraan jenis='Mobil' merk1='Honda' merk2='Mitsubishi' merk3='Tesla' />
    </div>
  )
}
export default Container
