import React from 'react'

const NaviBar = ({showLoginHandler, showRegisterHandler, showLogOut, logOutHandler}) => {
  
  const firmname = localStorage.getItem('firmname')

  return (
    <div className="navSection">
      
        <div className="company">
            Dashboard
        </div>
        <div className="firmname">
            <h4>{firmname}</h4>
        </div>
        <div className="userAuth">
          {!showLogOut ?  <>
           <span onClick={showLoginHandler}>Login / </span>
          <span onClick={showRegisterHandler}>Register</span>
          </> : <span onClick={logOutHandler}
          className='logout'
          >Logout</span>  }
          
        </div>
    </div>
  )
}


export default NaviBar