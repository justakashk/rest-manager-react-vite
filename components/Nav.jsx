import React from 'react'

const Nav = () => {
  return (
    
    <div className="navparent">

      <div className="navlogo"> 
        <img src="" alt="Logo" />  
      </div> 


      <div className="navlinks">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Gallary</li>
        </ul>
      </div>
      <div className="searchbar">

        <input type="text" />
        <div className="navicon"></div>

      </div>
        
    </div>


  )
}

export default Nav