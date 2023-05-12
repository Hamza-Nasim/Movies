import React from 'react'

function Header() {
  return (
    <div className='Header'>
      <div className='i'>
      <i class='bx bx-chevron-left'></i>
      </div>
        
        <ul>
         <li id='search'>
          <div className='searchiC'>
          <i class='bx bx-search-alt-2' ></i> 
          </div>
         
              <input type="text" placeholder='Search movies'/>
         </li>
          <li>
            <div className='notif'></div>
            <i class='bx bx-bell'></i>
            </li>
          <li>
            <div className='profile'>
              <img src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
            </div>
          </li>
      </ul>
            

    </div>
  )
}

export default Header