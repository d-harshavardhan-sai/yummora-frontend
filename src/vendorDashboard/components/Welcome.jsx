import React from 'react'

const Welcome = () => {
  const firmname = localStorage.getItem("firmname")

return (
  <div className='welcomeSection'>
      <h2>Welcome {firmname}</h2>
      <br />
      <br />
      <br />
      <div className="landingImage">
        <img src='/assets/chef.jpg' alt='welcome' />
      </div>
  </div>
)
}
export default Welcome