import React from 'react'

function SideBar() {
  return (
    <div className='SideBar'>
      <div className='logo'>
        <div className='img'>
          <img src="https://t4.ftcdn.net/jpg/03/34/40/23/360_F_334402361_sN7Ni26mWNQTdsUrWFwmpfN4N2lAfijN.jpg" alt="" />
        </div>
        <div className='Est'>Estivanico<span>Tv</span></div>
      </div>
      <div className='List'>
      <span id='listOf'>List of tools</span>
      <ul className='ulTools'>
        <li id='home'><i class='bx bx-home'></i> Home</li>
        <li><i class='bx bx-movie-play'></i> Movies</li>
        <li><i class='bx bx-slideshow'></i> Series</li>
        <li><i class='bx bx-play-circle'></i> Saved</li>
        <li><i class='bx bx-time-five' ></i> latest views</li>
      </ul>
      <hr />
      <span id='listOf'>Actors</span>
      <ul className='ul'>
      
        <li >
        <div className='name'>
        <div className='actr'>
          <img src="https://blogsenclasse.fr/23-bourganeuf-college-jeanpicartledoux-club-journal/wp-content/uploads/sites/361/2021/01/Ragnar.jpg" alt="" />
          </div>
          Travis Fimmel
          </div>
          <div className='ex'></div>
          </li>
        <li >
        <div className='name'>
        <div className='actr'>
          <img src="https://static.onecms.io/wp-content/uploads/sites/6/2015/02/alexander-ludwig-vikings_0.jpg" alt="" />
          </div>
          Alexander Ludwig
          </div>
          <div className='ex'></div>
          </li>
        <li >
        <div className='name'>
        <div className='actr'>
          <img src="https://cropper.watch.aetnd.com/cdn.watch.aetnd.com/sites/2/2016/10/vikings_season4_cast_lagertha.jpg" alt="" />
          </div>
          Katheryn Winnick
          </div>
          <div className='ex'></div>
          </li>
        <li >
        <div className='name'>
        <div className='actr'>
          <img src="https://mythologian.net/wp-content/uploads/2017/02/real-floki-from-vikings-1024x657.jpg" alt="" />
          </div>
          Gustaf Skarsgård
          </div>
          <div className='ex'></div>
          </li>
        <li id='d'>
        <div className='name'>
        <div className='more'>
        <i class='bx bx-chevron-down'></i>
          </div>
          Load more
          </div>
          </li>
      </ul>
      
      </div>
    </div>
  )
}

export default SideBar