import React from 'react'
import banner from '../assets/Nt-banner.png'

const WithInNatureBanner = () => {
  return (
    <div className="container-fluid my-4 px-0">
      <div className="bottomwear-banner">
        <img
          src={banner}
          alt="nature banner"
          className="banner-img img-fluid"
        />
      </div>
    </div>
  )
}

export default WithInNatureBanner