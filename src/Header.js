import React, { useContext } from 'react'
import { FaLaptop,FaTabletAlt,FaMobileAlt } from 'react-icons/fa'
import { DataProvider } from './Context/DataContext'

const Header = ({title}) => {
  const {width}=useContext(DataProvider)
  return (
    <div className='Header'>
        <h1>{title}</h1>
        {width<768?<FaMobileAlt/>:width<992?<FaTabletAlt/>:<FaLaptop/>}
    </div>
  )
}

export default Header