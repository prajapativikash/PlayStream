// import React from 'react'
// import './Navbar.css'
// import menu from '../../assets/menu.png'
// import logo from '../../assets/logo.png';
// import search from '../../assets/search.png';
// import upload from '../../assets/upload.png';
// import more from '../../assets/more.png';
// import notification from '../../assets/notification.png';
// import user_profile from '../../assets/user_profile.jpg';
// import { Link } from 'react-router-dom';
// function Navbar({ setSidebar }) {
//    return (
//       <>
//          <nav className='flex_div'>
//             <div className="nav_left flex_div">
//                <img className='menu_icon' src={menu}
//                   alt="menu" onClick={() => setSidebar((prev) => prev === false ? true :
//                      <Link><img className='logo' src={logo} alt="logo" /></Link>


//             </div>

//             <div className="nav_middle">
//                <div className="search_box flex_div">

//                   <input type="text" placeholder='Search ' />
//                   <img src={search} alt="" />

//                </div>
//             </div>

//             <div className="nav_right flex-div">
//                <img src={upload} alt="" />
//                <img src={more} alt="" />
//                <img src={notification} alt="" />

//                <img className='user_icon' src={user_profile} alt="" />

//             </div>



//          </nav>
//       </>

//    )
// }

// export default Navbar



import React from 'react';
import './Navbar.css';
import menu from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
import upload from '../../assets/upload.png';
import more from '../../assets/more.png';
import notification from '../../assets/notification.png';
import user_profile from '../../assets/user_profile.jpg';
import { Link } from 'react-router-dom';

function Navbar({ setSidebar }) {
   return (
      <>
         <nav className='flex_div'>
            <div className="nav_left flex_div">
               <img
                  className='menu_icon'
                  src={menu}
                  alt="menu"
                  onClick={() => setSidebar(prev => prev ? false : true)} // Ternary used correctly
               />
               <Link to="/">
                  <img className='logo' src={logo} alt="logo" />
               </Link>
            </div>

            <div className="nav_middle">
               <div className="search_box flex_div">
                  <input type="text" placeholder='Search' />
                  <img src={search} alt="search" />
               </div>
            </div>

            <div className="nav_right flex_div">
               <img src={upload} alt="upload" />
               <img src={more} alt="more" />
               <img src={notification} alt="notification" />
               <img className='user_icon' src={user_profile} alt="user profile" />
            </div>
         </nav>
      </>
   );
}

export default Navbar;
