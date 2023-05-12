import React from 'react'
import Header from './Header'
import DisplayPage from './DisplayContent/DisplayPage'
import SideBar from './SideBar/SideBar'

function Container() {
  return (
    <div className='Container'>
      <SideBar/>
      <div className='sideBr'></div>
      <div className='ContainerALL'>
        <Header/>
        <DisplayPage/>
      </div>
    </div>
  )
}

export default Container