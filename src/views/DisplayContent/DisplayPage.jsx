import React from 'react'
import SwiperC from '../Swiper/SwiperC'
import CartMv from './CartsMovies/CartMv'
import Footer from '../Footer/Footer'
function DisplayPage() {
  return (
    <div className='DisplayPage'>
      <div className='showMovies'>
         <div className='content'>
            <div className='circle'>
              <button id='btn'><i class='bx bx-wifi' ></i></button>
              <h1 id='e'>VIKINGS</h1>
              <h2 id='a'>The Saision Two</h2>
              <ul>
                <li>
                  
                  <div className='img'>
                    <img src="star.png" alt="" />
                  </div>
                  7.8
                  </li>
                <li>
                  <div className='img'>
                    <img src="eng.png" alt="" />
                  </div>
                  English
                </li>
              </ul>
              <button id='watch'>Watch Now</button>
            </div>
            <div className='ListofMv'>
          <SwiperC/>
         </div>
        
         </div>
         
      </div>
      <div className='ListOfMovies'>
        <div className='keepwtc'>
       
        
        <div className='filter'>
          <div className='filt'>
            <div className='tit'>
            <i class='bx bx-right-arrow-alt'></i>
            Filter Movies
            </div>
            <div className='action'>
            <button className='category'>
          <span>الفئات</span>
          <i class='bx bx-chevron-down'></i>
          
        </button>
            <button className='category'>
          <span>الانواع</span>
          <i class='bx bx-chevron-down'></i>
        </button>
            <button className='category'>
          <span>السنة</span>
          <i class='bx bx-chevron-down'></i>
        </button>
            <button className='category'>
          <span>الجودة</span>
          <i class='bx bx-chevron-down'></i>
        </button>
            </div>
          </div>
          <div className='filt buttonF'>
            <div className='action'>
            <button className='category'>
            <i class='bx bx-time'></i>
          <span>المضاف حديثا</span>
         
        </button>
            <button className='category'>
            <i class='bx bx-user-voice' ></i>
          <span>الاكثر مشاهده</span>
  
        </button>
            <button className='category'>
            <i class='bx bx-heart'></i>
          <span>الاكثر اعجابا</span>
          
        </button>
            <button className='category'>
            <i class='bx bx-objects-vertical-bottom'></i>
          <span>الاعلى تقييما</span>
          
        </button>
            </div>
          </div>
        </div>
        </div>
       <CartMv/>
       <Footer/>
      </div>
    </div>
  )
}

export default DisplayPage